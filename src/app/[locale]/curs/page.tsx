import TrainingVideosPage from "@/components/page/training-videos";
import { fetchData } from "@/service/get";

async function getCourses({ page , category }: any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/courses?page=${page || 1}${category && `&category_id=${category}`}`);
}
async function getCoursesCategory() {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/courses/categories/list`);
}
export default async function Curs({ searchParams }: any) {

  const curs = await getCourses({ page: searchParams?.page,category: searchParams?.category })
  const category = await getCoursesCategory()
  return (
    <><TrainingVideosPage curs={curs} category={category}/></>
  )
}
