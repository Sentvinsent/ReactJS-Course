//domain.com/news
import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>News</h1>
      <ul>
        <li>
          <Link href="news/news-1">News 1</Link>
        </li>
        <li>
          <Link href="news/news-2">News 2</Link>
        </li>
      </ul>
    </>
  );
}
