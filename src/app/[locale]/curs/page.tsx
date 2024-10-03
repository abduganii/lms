import TrainingVideosPage from "@/components/page/training-videos";

async function getCourses({page}:any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/courses/?page=${page||1}`);
  if (!res.ok) {
    return console.log("errr");
  }
  return res.json();
}
export default async function Curs({searchParams}:any) {
  const curs = await getCourses({ page: searchParams?.page })
  return (
    <><TrainingVideosPage curs={curs}/></>
  )
}
