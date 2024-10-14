import NewsIdPage from '@/components/page/news-id'
import PagesIdPage from '@/components/page/page-id';
import { fetchData } from '@/service/get';
import React from 'react'

async function getPage({id,lang}:any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/pages/${id}`,lang);
}

export default async function NewsSinglePage({ params: { id ,locale }}:any) {
  const news = await getPage({id:id,lang:locale})
  return (
    <>
    <PagesIdPage news={news}/>
    </>
  )
}
