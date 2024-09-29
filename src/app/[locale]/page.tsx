import HomePage from "@/components/page/home";

interface  Graduatesinterface {
  page: number,
}

async function getGraduates({page}:Graduatesinterface) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/graduated-user?page=${page}`);
  if (!res.ok) {
    return console.log("errr");
  }
  return res.json();
}

async function getPartners({page}:Graduatesinterface) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/partners?page=${page}`);
  if (!res.ok) {
    return console.log("errr");
  }
  return res.json();
}

async function getCourses({page}:Graduatesinterface) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/courses?page=${page}`);
  if (!res.ok) {
    return console.log("errr");
  }
  return res.json();
}
async function getPost({page}:Graduatesinterface) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/posts?page=${page}`);
  if (!res.ok) {
    return console.log("errr");
  }
  
  return res.json();
}

export default async function Home() {
  const graduated = await getGraduates({page:1});
  const partners = await getPartners({page:1});
  const courses = await getCourses({page:1});
  const posts = await getPost({page:1});
  return (
    <>
      <HomePage partners={partners?.data} posts={posts?.data} graduated={graduated?.data} courses={courses?.data}/>
    </>
  );
}
