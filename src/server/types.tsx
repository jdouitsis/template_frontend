import { Registry } from "miragejs";
import Schema from "miragejs/orm/schema";
import { models } from "@/server/models";
import { factories } from "@/server/factories";

type AppRegistry = Registry<typeof models, typeof factories>;
export type AppSchema = Schema<AppRegistry>;
