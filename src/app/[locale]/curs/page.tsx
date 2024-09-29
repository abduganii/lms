import TrainingVideosPage from "@/components/page/training-videos";

async function getCourses({page}:any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/courses?page=${page}`);
  if (!res.ok) {
    return console.log("errr");
  }
  return res.json();
}
export default async function Curs() {
  const curs = await getCourses({page:1})
  return (
    <><TrainingVideosPage curs={curs?.data}/></>
  )
}
