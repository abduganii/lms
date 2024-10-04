import CursPage from "@/components/page/curs";
import { fetchData } from "@/service/get";


async function getCourses({ id }: any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/courses/${id}`);
}
export default async function Curs({ params: { id }}:any) {
  const curs = await getCourses({ id: id })
  return (
    <>
      <CursPage curs={curs} />
    </>
  )
}
