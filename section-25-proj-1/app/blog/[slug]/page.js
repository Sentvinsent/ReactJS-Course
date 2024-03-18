import Link from "next/link";

export default function BlogPost({ params }) {
  return (
    <main>
      <h1>The blog post page!</h1>
      <p>{params.slug}</p>
    </main>
  );
}
