import HomePage from "@/components/page/home";
import { fetchData } from "../../service/get";

interface GraduatesInterface {
  page: number;
}

async function getGraduates({ page }: GraduatesInterface) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/graduated-user?page=${page}`);
}

async function getPartners({ page }: GraduatesInterface) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/partners?page=${page}`);
}

async function getCourses({ page }: GraduatesInterface) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/courses?page=${page}`);
}

async function getPost({ page }: GraduatesInterface) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/posts?page=${page}`);
}

export default async function Home() {
  const [graduated, partners, courses, posts] = await Promise.all([
    getGraduates({ page: 1 }),
    getPartners({ page: 1 }),
    getCourses({ page: 1 }),
    getPost({ page: 1 }),
  ]);
  return (
    <>
      <HomePage
        partners={partners?.data || []}
        posts={posts?.data || []}
        graduated={graduated?.data || []}
        courses={courses?.data || []}
      />
    </>
  );
}
