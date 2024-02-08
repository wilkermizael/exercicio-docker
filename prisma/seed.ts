import prisma from "../src/database";
import { faker } from "@faker-js/faker";
import { User } from "@prisma/client";

const NUMBER_OF_USERS = 10;

type CreateUser = Omit<User, "id">;

async function main() {
  const users: CreateUser[] = [];
  for (let i = 0; i < NUMBER_OF_USERS; i++) {
    users.push({
      name: faker.name.fullName(),
      email: faker.internet.email()
    });
  }

  await prisma.user.createMany({
    data: users
  });
}

main().then(() => {
  console.log("Usuários criados com sucesso!");
}).catch(e => {
  console.log("Algum erro ocorreu na criação dos usuários.");
  console.log(e);
  process.exit(1);
})