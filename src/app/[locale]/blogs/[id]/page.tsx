import BlogsIdPage from '@/components/page/blogs-id'
import { fetchData } from '@/service/get';
import React from 'react'

async function getBlogs({id}:any) {
  
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/blogs/${id}`);
}
export default async function BlogsSinglePage({ params: { id }}:any) {
  const blogs = await getBlogs({id:id})

  return (
    <>
    <BlogsIdPage blogs={blogs}/>
    </>
  )
}
