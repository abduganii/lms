import BlogsPage from "@/components/page/blogs";

async function getBlogs({page}:any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/blogs?page=${page}`);
  if (!res.ok) {
    return console.log("errr");
  }
  return res.json();
}
export default async function Blogs() {
  const blogs = await getBlogs({ page: 1 })
  
  console.log(blogs)
  return (
    <>
    <BlogsPage blogs={blogs?.data}/>
    </>
  )
}
