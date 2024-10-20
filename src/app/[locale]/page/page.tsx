import NewsPage from "@/components/page/news";
import PagesPage from "@/components/page/page";
import { fetchData } from "@/service/get";

async function getPage({page,lang}:any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/pages?page=${page || 1}`,lang);
}

export default async function News({ searchParams: {page,category },params:{locale}}:any) {
  const news = await getPage({ page: page,category: category,lang:locale })
  return (
    <>
     <PagesPage news={news}/>
    </>
  )
}
