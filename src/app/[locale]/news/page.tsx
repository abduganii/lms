import NewsPage from "@/components/page/news";
import { fetchData } from "@/service/get";

async function getNews({page}:any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/posts?page=${page || 1}`);
}

export default async function News({searchParams}:any) {
  const news = await getNews({page:searchParams?.page})

  return (
    <>
    <NewsPage news={news}/>
    </>
  )
}
