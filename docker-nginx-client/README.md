# Webapp for controlling the applesnapper
Front end code build in Typescript that connects via websocket to the Applesnapper to display topics and params and submit service calls.

# Install
```
cd client
npm install
```

# Development
To use webpack serve
```
npm start
```
or use local NGINX
```
npm build
```
# Production
This outputs a docker image with the webapp contained. Place this on the applesnapper and run it.
```
./build.sh
```

# Use
Access the webapp by getting on the Applesnapper WiFi and in your browser go to `192.168.xxx.xxx`