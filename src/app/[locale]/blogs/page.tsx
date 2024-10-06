import BlogsPage from "@/components/page/blogs";
import { fetchData } from "@/service/get";

async function getBlogs({page, category}:any) {
  return  fetchData(`${process.env.NEXT_PUBLIC_URL}/blogs?page=${page || 1}${category && `&category_id=${category}`}`);
}

async function getBlogsCategories() {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/blogs-categories/list`);
}

// /api/blogs-categories/list
export default async function Blogs({ searchParams }: any) {
  const blogs = await getBlogs({ page: searchParams?.page,category: searchParams?.category })
  const categories = await getBlogsCategories()
  
  return (
    <>
      <BlogsPage blogs={blogs} categories={categories} />
    </>
  )
}
