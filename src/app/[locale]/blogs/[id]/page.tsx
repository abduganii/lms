import BlogsIdPage from '@/components/page/blogs-id'
import React from 'react'

async function getBlogs({id}:any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/blogs/${id}`);
  if (!res.ok) {
    return console.log("errr");
  }
  return res.json();
}
export default async function BlogsSinglePage({ params: { id }}:any) {
  const blogs = await getBlogs({id:id})

  return (
    <>
    <BlogsIdPage blogs={blogs}/>
    </>
  )
}
