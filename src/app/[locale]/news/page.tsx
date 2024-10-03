import NewsPage from "@/components/page/news";

async function getNews({page}:any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/posts?page=${page || 1}`);
  if (!res.ok) {
    return console.log("errr");
  }
  return res.json();
}
export default async function News({searchParams}:any) {
  const news = await getNews({page:searchParams?.page})
  return (
    <>
    <NewsPage news={news}/>
    </>
  )
}
