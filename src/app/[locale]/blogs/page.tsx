import BlogsPage from "@/components/page/blogs";

async function getBlogs({page}:any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/blogs`);
  if (!res.ok) {
    return console.log("errr");
  }
  return res.json();
}
async function getBlogsCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/blogs-categories/list`);
  if (!res.ok) {
    return console.log("errr");
  }
  return res.json();
}
// /api/blogs-categories/list
export default async function Blogs() {
  const blogs = await getBlogs({ page: 1 })
  const categories = await getBlogsCategories()
  
  return (
    <>
      <BlogsPage blogs={blogs?.data} categories={categories} />
    </>
  )
}
