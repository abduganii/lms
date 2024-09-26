import NewsIdPage from '@/components/page/news-id'
import React from 'react'


async function getNews({id}:any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/posts/${id}`);
  if (!res.ok) {
    return console.log("errr");
  }
  return res.json();
}

export default async function NewsSinglePage({ params: { id }}:any) {
  const news = await getNews({id:id})
  return (
    <>
    <NewsIdPage news={news}/>
    </>
  )
}
