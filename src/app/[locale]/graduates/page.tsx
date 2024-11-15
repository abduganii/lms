import GraduatesPage from "@/components/page/graduates";
import { fetchData } from "@/service/get";
import { Metadata } from "next";

async function getGraduates({lang}:any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/graduated-user`,lang);
}
export async function generateMetadata({ params: { locale } }: any): Promise<Metadata> {
  return {
    title:  "Министерство юстиции Республики Узбекистан",
    description: "Министерство юстиции Республики Узбекистан",
  }
}
export default async function graduates({params:{locale}}:any) {
  const graduates = await getGraduates({lang:locale})

  return (
    <><GraduatesPage graduates={graduates?.data || []} /></>
  )
}
