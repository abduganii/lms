import NewsPage from "@/components/page/news";
import { fetchData } from "@/service/get";
import { Metadata } from "next";

async function getNews({page,lang}:any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/posts?page=${page || 1}`,lang);
}

export async function generateMetadata({ params: { locale } }: any): Promise<Metadata> {
  return {
    title:  "Министерство юстиции Республики Узбекистан",
    description: "Министерство юстиции Республики Узбекистан",
  }
}
export default async function News({ searchParams: {page },params:{locale}}:any) {
  const news = await getNews({page:page,lang:locale})

  return (
    <>
    <NewsPage news={news}/>
    </>
  )
}
