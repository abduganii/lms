import GraduatesPage from "@/components/page/graduates";
async function getGraduates() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/graduated-user`);
  if (!res.ok) {
    return console.log("errr");
  }
  return res.json();
}
export default async function graduates() {
  const graduates = await getGraduates()

  return (
    <><GraduatesPage graduates={graduates?.data} /></>
  )
}
