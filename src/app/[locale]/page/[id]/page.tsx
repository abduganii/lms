import NewsIdPage from '@/components/page/news-id'
import PagesIdPage from '@/components/page/page-id';
import { fetchData } from '@/service/get';
import React from 'react'

async function getPage({id}:any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/pages/${id}`);
}

export default async function NewsSinglePage({ params: { id }}:any) {
  const news = await getPage({id:id})
  return (
    <>
    <PagesIdPage news={news}/>
    </>
  )
}
