import { MongoClient } from "mongodb";
import { readFileSync } from "fs";

var ca = [readFileSync(__dirname + "/../rds-combined-ca-bundle.pem")];
const initParams = readFileSync(
  __dirname + "/../../credentials_DO_NOT_COMMIT.json"
);

let initObj: any = JSON.parse(initParams.toString());
console.log(initObj);
let mongoUri: string = `mongodb://${initObj.tsNodeMongo.user}:${initObj.tsNodeMongo.password}@${initObj.tsNodeMongo.dbAddress}`;
console.log(mongoUri);
const mongoClientConnect = async (): Promise<void> => {
  console.log("mongoClientConnect");
  try {
    let client = await MongoClient.connect(mongoUri, {
      sslCA: ca,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      checkServerIdentity: false,
    });
    console.log("Connected");
    let collection = client
      .db("donkeybot")
      .collection("sprayRecordsObservations");
    let result = await collection.find({}).sort({ date: -1 }).toArray();
    console.log(result);
  } catch (err) {
    console.log("Error");
    console.log(err);
  }
};

mongoClientConnect();

// 'mongodb://<sample-user>:<password>@sample-cluster.node.us-east-1.docdb.amazonaws.com:27017/sample-database?ssl=true&replicaSet=rs0&readPreference=secondaryPreferred',
// {
//   sslValidate: true,
//   sslCA:ca,
//   useNewUrlParser: true
// },

// let client = await MongoClient.connect(mongoUri, {
//   ssl: true,
//   sslValidate: true,
//   sslCA: ca,
//   useNewUrlParser: true,
//   useUnifiedTopology: false,
//   checkServerIdentity: false,
// });

//     "dbAddress": "localhost:27019/admin?ssl=true&replicaSet=rs0&readPreference=secondaryPreferred"
