import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    await prisma.post.create({
        data: {
            title: 'Hello World',
            content: 'Hello nice world',
        },
    });
    await prisma.post.create({
        data: {
            title: 'Published Post',
            content: 'This is published',
            published: true,
        },
    });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
