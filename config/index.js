const convict = require("convict");

var config = convict({
 env: {
  doc: "The application environment.",
  format: ["development",],
  default: "development",
  env: "NODE_ENV",
 },
 // ip: {
 //  doc: "The IP address to bind.",
 //  format: "ipaddress",
 //  default: "127.0.0.1",
 //  env: "IP_ADDRESS",
 // },
 port: {
  doc: "The port to bind.",
  format: "port",
  default: 5000,
  env: "PORT",
  arg: "port",
 },
 db: {
  host: {
   doc: "Database host name/IP",
   format: String,
   default: "127.0.0.1",
   env: "DATABASE_HOST",
  },
  name: {
   doc: "Database name",
   format: String,
   default: "database_development",
   env: "DATABASE_NAME",
  },
  username: {
   doc: "db user",
   format: String,
   default: "root",
   env: "DATABASE_USERNAME",
  },
  password: {
   doc: "db password",
   format: "*",
   default: null,
   env: "DATABASE_PASSWORD",
  },
 },
});

// Load environment dependent configuration
let env = config.get("env");
if (env === "development") {
 config.loadFile(__dirname + "/environments/" + env + ".json");
}

// Perform validation
config.validate({ allowed: "strict" });
module.exports = config;