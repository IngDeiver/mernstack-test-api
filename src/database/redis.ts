const redis = require("redis");

const REDIS_PORT = process.env.REDIS_PORT;
const REDIS_USER = process.env.REDIS_USER;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
const REDIS_HOST = process.env.REDIS_HOST;

const client = redis.createClient({
  url: `redis://${REDIS_USER}:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}`,
  legacyMode: true
});

client.on("error", (err: any) => console.log("Redis Client Error", err));
client.on("ready", () => console.log("Redis client connected"));
client.connect();

export default client;
