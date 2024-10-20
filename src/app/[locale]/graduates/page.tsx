import GraduatesPage from "@/components/page/graduates";
import { fetchData } from "@/service/get";

async function getGraduates({lang}:any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/graduated-user`,lang);
}

export default async function graduates({ searchParams: { locale }}:any) {
  const graduates = await getGraduates({lang:locale})

  return (
    <><GraduatesPage graduates={graduates?.data} /></>
  )
}
