import TrainingVideosPage from "@/components/page/training-videos";
import { fetchData } from "@/service/get";

async function getCourses({ page , category ,lang }: any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/courses?page=${page || 1}${category && `&category_id=${category}`}`,lang);
}
async function getCoursesCategory({lang}:any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/courses/categories/list`,lang);
}
export default async function Curs({ searchParams }: any) {

  const curs = await getCourses({ page: searchParams?.page,category: searchParams?.category,lang:searchParams.locale })
  const category = await getCoursesCategory({lang:searchParams.locale})
  return (
    <><TrainingVideosPage curs={curs} category={category}/></>
  )
}
