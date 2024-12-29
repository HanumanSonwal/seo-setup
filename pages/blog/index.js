import Link from 'next/link';

export default function Blog() {
  return (
    <ul>
      <li><Link href="/blog/blog1">Blog 1</Link></li>
      <li><Link href="/blog/blog2">Blog 2</Link></li>
    </ul>
  );
}
