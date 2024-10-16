import BlogsIdPage from '@/components/page/blogs-id'
import { fetchData } from '@/service/get';
import React from 'react'

async function getBlogs({id,lang}:any) {
  
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/blogs/${id}`,lang);
}
async function getBlogsVidoe({id,lang}:any) {
  
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/blogs/${id}/videos`,lang);
}
export default async function BlogsSinglePage({ params: { id ,locale}}:any) {
  const blogs = await getBlogs({id:id,lang:locale})
  const vidoe = await getBlogsVidoe({id:id,lang:locale})

  return (
    <>
    <BlogsIdPage blogs={blogs} vidoe={vidoe}/>
    </>
  )
}
