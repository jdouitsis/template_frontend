import { routesForUsers } from "@/server/endpoints/User";
import { factories } from "@/server/factories";
import { models } from "@/server/models";
import { faker } from "@faker-js/faker";
import { createServer } from "miragejs";

export function mirageInit() {
  const server = createServer({
    models,
    factories,
    seeds(server) {
      server.createList("user", faker.datatype.number({ min: 1, max: 35 }));
    },
  });

  server.logging = true;

  routesForUsers(server);
}
