import { useRouter } from "next/router";

export default function NewsDetail() {
  const router = useRouter();
  const newsId = router.query.newsId;
  //send backend request and fetch news data
  return <h1>Detail</h1>;
}
