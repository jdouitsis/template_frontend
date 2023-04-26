import { Response, Server } from "miragejs";
import { AppSchema } from "@/server/types";

export function routesForUsers(server: Server) {
  server.get(`/api/user`, (schema: AppSchema) => {
    const user = schema.find("user", "1");
    console.log(user?.attrs);
    return new Response(200, {}, user?.attrs);
  });
}
