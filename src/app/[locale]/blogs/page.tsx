import BlogsPage from "@/components/page/blogs";
import { fetchData } from "@/service/get";

async function getBlogs({page, category,lang}:any) {
  return  fetchData(`${process.env.NEXT_PUBLIC_URL}/blogs?page=${page || 1}${category && `&category_id=${category}`}`,lang);
}

async function getBlogsCategories({lang}:any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/blogs-categories/list`,lang);
}

// /api/blogs-categories/list
export default async function Blogs({ searchParams }: any) {
  const blogs = await getBlogs({ page: searchParams?.page,category: searchParams?.category,lang:searchParams.locale })
  const categories = await getBlogsCategories({lang:searchParams.locale})
  
  return (
    <>
      <BlogsPage blogs={blogs} categories={categories} />
    </>
  )
}
