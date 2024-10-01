import CursPage from "@/components/page/curs";

async function getCourses({id}:any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/courses/${id}`);
  if (!res.ok) {
    return console.log("errr");
  }
  return res.json();
}

export default async function Curs({ params: { id }}:any) {
  const curs = await getCourses({ id: id })
  return (
    <>
      <CursPage curs={curs} />
    </>
  )
}
