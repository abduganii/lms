import CursPage from "@/components/page/curs";
import { fetchData } from "@/service/get";


async function getCourses({ id ,lang}: any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/courses/${id}`,lang);
}
export default async function Curs({ searchParams: { id ,locale }}:any) {
  const curs = await getCourses({id:id,lang:locale})
  return (
    <>
      <CursPage curs={curs} />
    </>
  )
}
