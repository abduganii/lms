import NewsIdPage from '@/components/page/news-id'
import { fetchData } from '@/service/get';
import React from 'react'

async function getNews({id}:any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/posts/${id}`);
}

export default async function NewsSinglePage({ params: { id }}:any) {
  const news = await getNews({id:id})
  return (
    <>
    <NewsIdPage news={news}/>
    </>
  )
}
