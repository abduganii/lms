import ResourcesById from '@/components/page/resources-id'
import { fetchData } from '@/service/get';
import React from 'react'
async function getArticles({id,lang}:any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/articles/${id}`,lang);
}

export default async function ResourcesId({ searchParams: { id ,locale }}:any) {
  const articles = await getArticles({id:id,lang:locale})

  return (
    <><ResourcesById articles={articles}/></>
  )
}
