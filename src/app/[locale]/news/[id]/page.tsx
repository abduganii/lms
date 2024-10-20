import NewsIdPage from '@/components/page/news-id'
import { fetchData } from '@/service/get';
import React from 'react'

async function getNews({id,lang}:any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/posts/${id}`,lang);
}

export default async function NewsSinglePage({ params: { id ,locale }}:any) {
  const news = await getNews({id:id,lang:locale})

  return (
    <>
    <NewsIdPage news={news}/>
    </>
  )
}
