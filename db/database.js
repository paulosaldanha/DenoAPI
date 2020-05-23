// import { Client } from "https://deno.land/x/postgres@v0.3.11/mod.ts";

//     const client = new Client().connect({
//       user: "postgres",
//       database: "deno_test",
//       host: "localhost",
//       password: "postgres",
//       port: "5432"
//     });
// export default client

import { Client } from "https://deno.land/x/postgres@v0.3.11/mod.ts";

class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    this.client = new Client({
      user: "postgres",
      database: "deno_test",
      host: "localhost",
      password: "postgres",
      port: "5432",
      applicationName: "denoAPI"
    });
    console.log(this.client);
    await this.client.connect();
  }
}

export default new Database().client;
