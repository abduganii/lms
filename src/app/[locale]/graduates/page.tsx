import GraduatesPage from "@/components/page/graduates";
import { fetchData } from "@/service/get";

async function getGraduates() {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/graduated-user`);
}

export default async function graduates() {
  const graduates = await getGraduates()

  return (
    <><GraduatesPage graduates={graduates?.data} /></>
  )
}
