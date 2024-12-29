import { useRouter } from 'next/router';
import Head from 'next/head';

export default function BlogPost() {
  const { slug } = useRouter().query;

  return (
    <>
      <Head>
        <title>{slug} | My Next.js Blog</title>
        <meta name="description" content={`Read the blog post about ${slug}.`} />
      </Head>
      <h1>Blog Post: {slug}</h1>
    </>
  );
}
