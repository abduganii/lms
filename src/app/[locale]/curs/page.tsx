import TrainingVideosPage from "@/components/page/training-videos";
import { fetchData } from "@/service/get";

async function getCourses({ page , category ,lang }: any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/courses?page=${page || 1}${category && `&category_id=${category}`}`,lang);
}
async function getCoursesCategory({lang}:any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/courses/categories/list`,lang);
}
export default async function Curs({ searchParams: {page,category, locale }}:any) {

  const curs = await getCourses({ page: page,category: category,lang:locale })
  const categories = await getCoursesCategory({lang:locale})
  return (
    <><TrainingVideosPage curs={curs} category={categories}/></>
  )
}
