import HomePage from "@/components/page/home";
import { fetchData } from "../../service/get";

interface GraduatesInterface {
  page: number;
  lang: any
}

async function getGraduates({ page ,lang }: GraduatesInterface) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/graduated-user?page=${page}`,lang);
}

async function getPartners({ page ,lang }: GraduatesInterface) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/partners?page=${page}`,lang);
}

async function getCourses({ page ,lang }: GraduatesInterface) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/courses?page=${page}`,lang);
}

async function getPost({ page ,lang }: GraduatesInterface) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/posts?page=${page}`,lang);
}

async function getPage({page,lang}:any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/pages?page=${page || 1}`,lang);
}

export default async function Home({ params: { locale }}:any) {
  const [graduated, partners, courses, posts, pages] = await Promise.all([
    getGraduates({ page: 1 ,lang:locale}),
    getPartners({ page: 1 ,lang:locale}),
    getCourses({ page: 1 ,lang:locale}),
    getPost({ page: 1 ,lang:locale}),
    getPage({ page: 1 ,lang:locale}),
  ]);

  return (
    <>
      <HomePage
        partners={partners?.data || []}
        posts={posts?.data || []}
        graduated={graduated?.data || []}
        courses={courses?.data || []}
        pages={pages?.data||[]}
      />
    </>
  );
}
