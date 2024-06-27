import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.deleteMany();
  // const user = await prisma.user.create({
  //   data: {
  //     name: "testing4",
  //     email: "testing4 a email",
  //     age: 14,
  //     UserPreference: {
  //       create: {
  //         emailUpdates: true,
  //       },
  //     },
  //   },
  //   // include : { UserPreference : true}
  //   select: {
  //     name: true,
  //     UserPreference: {
  //       select: {
  //         id: true,
  //       },
  //     },
  //   },
  // });

  // const user = await prisma.user.findMany({
  //   where: {
  //     // name: "testing",
  //     // name: { equals:"testing"},
  //     // name: { not:"testing"},
  //     // name: { in: ["testing", "sally"] },

  //     // age: { gt: 20 },
  //     // email : {contains : ""}
  //     email : {startsWith : "t"}
  //     // AND: [
  //     //   { email: { startsWith: "testing" } },
  //     //   { name: { contains: "test" } },
  //     // ],

  //     // NOT: [
  //     //   { email: { startsWith: "testing" } },
  //     //   { name: { contains: "test" } },
  //     // ],
  //   },
  //   // select: {
  //   //   name: true,
  //   // },
  //   // distinct: ["name"],
  //   take: 10,
  //   skip: 1,
  //   orderBy: {
  //     age: "asc",
  //   },
  // });


  // const user = await prisma.user.update(
  //   {
  //     where : {
  //       id : "006e2f52-a7c4-4d8b-abe0-2e801517b010"
  //     },
  //     data :{
  //       name : "testing"
  //     }
  //   }
  // )
  const user = await prisma.user.deleteMany({
    where : {
      age : { lt : 10}
    },
  })
  console.log(user);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
