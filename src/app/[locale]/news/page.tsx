import NewsPage from "@/components/page/news";

async function getNews({page}:any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/posts`);
  if (!res.ok) {
    return console.log("errr");
  }
  return res.json();
}
export default async function News() {
  const news = await getNews({page:1})
  return (
    <>
    <NewsPage news={news?.data}/>
    </>
  )
}
