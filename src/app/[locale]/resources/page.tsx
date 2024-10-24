import ResourcesPage from '@/components/page/resources'
import { fetchData } from '@/service/get';
import { Metadata } from 'next';
async function getArticles({page,lang}:any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/articles?page=${page || 1}`,lang);
}

export async function generateMetadata({ params: { locale } }: any): Promise<Metadata> {
  return {
    title:  "Министерство юстиции Республики Узбекистан",
    description: "Министерство юстиции Республики Узбекистан",
  }
}
export default async function Resources({ searchParams: {page }, params:{locale}}:any) {

  const articles = await getArticles({page:page, lang: locale})
  return (
    <><ResourcesPage articles={articles}/></>
  )
}
