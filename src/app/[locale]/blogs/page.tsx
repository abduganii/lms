import BlogsPage from "@/components/page/blogs";
import { fetchData } from "@/service/get";

async function getBlogs({page}:any) {
  return  fetchData(`${process.env.NEXT_PUBLIC_URL}/blogs`);
}

async function getBlogsCategories() {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/blogs-categories/list`);
}

// /api/blogs-categories/list
export default async function Blogs() {
  const blogs = await getBlogs({ page: 1 })
  const categories = await getBlogsCategories()
  
  return (
    <>
      <BlogsPage blogs={blogs} categories={categories} />
    </>
  )
}
