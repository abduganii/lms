import TrainingVideosPage from "@/components/page/training-videos";
import { fetchData } from "@/service/get";

async function getCourses({ page }: any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/courses?page=${page}`);
}
async function getCoursesCategory() {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/courses`);
}
export default async function Curs({searchParams}:any) {
  const curs = await getCourses({ page: searchParams?.page })
  const category = await getCoursesCategory()
  return (
    <><TrainingVideosPage curs={curs} category={category}/></>
  )
}
