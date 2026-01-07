// import { PrismaClient } from '@prisma/client';
// const { PrismaClient } = require('./generated/prisma')
// const { PrismaClient } = require('@prisma/client')

// const globalForPrisma = globalThis;

// export const prisma =
//   globalForPrisma.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== 'production') {
//   globalForPrisma.prisma = prisma;
// }

// import { PrismaClient } from "@prisma/client";

// let prisma;

// if (!global.prisma) {
//   prisma = new PrismaClient();
//   if (process.env.NODE_ENV !== "production") {
//     global.prisma = prisma;
//   }
// } else {
//   prisma = global.prisma;
// }

// export { prisma };



// import { PrismaClient } from "@prisma/client";

// let prisma;

// if (!global.prisma) {
//   prisma = new PrismaClient({
//     // Explicitly provide the datasource URL
//     datasources: {
//       db: {
//         url: process.env.DATABASE_URL,
//       },
//     },
//   });

//   if (process.env.NODE_ENV !== "production") {
//     global.prisma = prisma;
//   }
// } else {
//   prisma = global.prisma;
// }

// export { prisma };



// import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "@/generated/prisma/client";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";



const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({
  // connectionString: process.env.DATABASE_URL,
  connectionString: connectionString
})
// const adapter = new PrismaPg({ connectionString })
// const prisma = new PrismaClient({ adapter })

// const prisma = new PrismaClient({
//   adapter,
// });

const globalForPrisma = global;

const prisma = globalForPrisma.prisma || new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;
