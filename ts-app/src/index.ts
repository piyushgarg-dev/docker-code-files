import http from "http";

import { Redis } from "ioredis";
import pg from "pg";

import app from "./app/server";

async function init() {
  try {
    // Redis Connection
    console.log(`Connecting Redis...`);
    const redis = new Redis("redis://redis:6379", { lazyConnect: true });
    await redis.connect();
    console.log(`Redis Connection Success...`);

    // Postgresql Connection
    console.log(`Connecting Postgres...`);

    const { Client } = pg;
    const client = new Client({
      host: "db",
      port: 5432,
      database: "postgres",
      user: "postgres",
      password: "postgres",
    });
    await client.connect();

    console.log(`Postgres Connection Success...`);

    // Http Server Stuff
    const PORT = process.env.PORT ? +process.env.PORT : 8000;
    const server = http.createServer(app);
    server.listen(PORT, () =>
      console.log(`Http server is listening on PORT ${PORT}`)
    );
  } catch (err) {
    console.log(`Error Starting Server`, err);
  }
}

init();
