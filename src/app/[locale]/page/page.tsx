import NewsPage from "@/components/page/news";
import PagesPage from "@/components/page/page";
import { fetchData } from "@/service/get";

async function getPage({page}:any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/pages?page=${page || 1}`);
}

export default async function News({searchParams}:any) {
  const news = await getPage({page:searchParams?.page})

  return (
    <>
     <PagesPage news={news}/>
    </>
  )
}
