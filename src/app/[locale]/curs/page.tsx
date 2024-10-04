import TrainingVideosPage from "@/components/page/training-videos";
import { fetchData } from "@/service/get";

async function getCourses({ page }: any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/courses?page=${page}`);
}
export default async function Curs({searchParams}:any) {
  const curs = await getCourses({ page: searchParams?.page })
  return (
    <><TrainingVideosPage curs={curs}/></>
  )
}
