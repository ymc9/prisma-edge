import styles from './page.module.css';
import { prisma } from '@/lib/db';

export default async function Home() {
    const posts = await prisma.post.findMany();

    return (
        <main className={styles.main}>
            <div>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                            {post.published && <span>Published</span>}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
