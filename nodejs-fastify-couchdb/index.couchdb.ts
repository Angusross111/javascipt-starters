import { readFileSync } from "fs";
import fastify, { FastifyReply, RouteShorthandOptions } from "fastify";
import dayjs from "dayjs";
import fastifyCouchDB from "fastify-couchdb";
import { Feature, GeoJSON, GeoJsonProperties } from "geojson";
import { MaybeDocument, DocumentResponseRow } from "nano";
let initFilePath = "./init.json";

interface initFile {
    user: string;
    password: string;
    dbAddress: string;
    dbPort: number;
    serverAddress: string;
    serverPort: number;
}

interface UploadBody {
    block: string;
    date: string;
    geojson: GeoJSON;
}
interface GetQuerystring {
    block: string;
    date: string;
}
interface RemoveQuerystring {
    block: string;
    date: string;
    rev: string;
}

interface BlockDb extends MaybeDocument {
    geojson: GeoJSON;
}

const initParams = readFileSync(initFilePath);
const initObj: initFile = JSON.parse(initParams.toString());
console.log(initObj);
const COUCHDB_URL = `http://${initObj.user}:${initObj.password}@${initObj.dbAddress}:${initObj.dbPort}`;

const server = fastify({
    logger: true,
    bodyLimit: 24971520,
});

server.register(fastifyCouchDB, { url: COUCHDB_URL });

server.get("/create", async (request, reply) => {
    const response = await server.couch.db.create("alice");
    reply.send({ ok: response.ok });
});

server.post<{
    Body: UploadBody;
}>("/api/upload", async (request, reply) => {
    const { block, date, geojson } = request.body;
    const dblist = await server.couch.db.list();
    if (!dblist.includes(block)) {
        console.log("Database doesnt contain block. Creating Database");
        const response = await server.couch.db.create(block);
        if (!response.ok) {
            reply.code(200).send(response);
            return;
        }
        console.log("Database created for '", block, "'");
    }
    console.log("Found Database. Inserting data");
    const blockdb = server.couch.use(block);
    const document: BlockDb = { geojson: geojson };
    const response = await blockdb.insert(document, date);
    reply.code(200).send(response);
});

server.get<{}>("/api/request_blocks", async (request, reply) => {
    const dblist = await server.couch.db.list();
    let databaseDocuments = await Promise.all(
        dblist.map(async (block: string) => {
            const blockdb = server.couch.use(block);
            const docList = await blockdb.list();
            return { block: block, dates: docList.rows.map((doc: DocumentResponseRow<unknown>) => doc.key) };
        })
    );
    console.log(databaseDocuments);
    reply.code(200).send({ ok: true, data: databaseDocuments });
});

server.get<{
    Querystring: GetQuerystring;
}>("/api/request_data", async (request, reply) => {
    const { block, date } = request.query;
    const blockdb = server.couch.use(block);
    const doc = await blockdb.get(date);
    reply.code(200).send({ ok: true, data: doc });
});

server.get<{
    Querystring: RemoveQuerystring;
}>("/api/remove_doc", async (request, reply) => {
    const { block, date, rev } = request.query;
    const blockdb = server.couch.use(block);
    const response = await blockdb.destroy(date, rev);
    console.log(response);
    reply.code(200).send(response);
});

const start = async () => {
    try {
        await server.listen(initObj.serverPort, initObj.serverAddress);
        console.log(`Listening on http://${initObj.serverAddress}:${initObj.serverPort}`);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
