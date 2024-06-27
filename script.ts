import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const user = await prisma.user.create({
    data: {
      name: "testing",
      email: "testing a email",
      age: 12,
      UserPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    // include : { UserPreference : true}
    select: {
      name: true,
      UserPreference: {
        select: {
          id: true,
        },
      },
    },
  });
  console.log(user);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
