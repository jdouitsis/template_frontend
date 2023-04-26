import { Factory } from "miragejs";
import { faker } from "@faker-js/faker";

import { User } from "@/interfaces";

export const userFactory = Factory.extend<User>({
  id(i) {
    return i;
  },
  name() {
    return faker.name.firstName() + " " + faker.name.lastName();
  },
});
