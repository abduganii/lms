import BlogsPage from "@/components/page/blogs";
import { fetchData } from "@/service/get";

async function getBlogs({page, category,lang}:any) {
  return  fetchData(`${process.env.NEXT_PUBLIC_URL}/blogs?page=${page || 1}${category && `&category_id=${category}`}`,lang);
}

async function getBlogsCategories({lang}:any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/blogs-categories/list`,lang);
}

export default async function Blogs({ params: {page,category, locale }}:any) {
  const blogs = await getBlogs({ page: page,category: category,lang:locale })
  const categories = await getBlogsCategories({lang:locale})
  
  return (
    <>
      <BlogsPage blogs={blogs} categories={categories} />
    </>
  )
}
