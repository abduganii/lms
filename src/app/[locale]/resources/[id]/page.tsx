import ResourcesById from '@/components/page/resources-id'
import { fetchData } from '@/service/get';
import { Metadata } from 'next';
import React from 'react'
async function getArticles({id,lang}:any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/articles/${id}`,lang);
}
export async function generateMetadata({ params: {id, locale } }: any): Promise<Metadata> {
  const res = await getArticles({id:id,lang:locale})

  const ogTitle = res?.og_title || 'Default Title';
  const ogDescription = res?.og_description || 'Default Description';
  const ogImage = res?.og_image || '/default-image.png';
  const ogUrl = res?.og_url || process.env.NEXT_PUBLIC_URL;

  return {
    title: ogTitle,
    description: ogDescription,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: ogImage,
          alt: ogTitle,
        }
      ],
      url: ogUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    }
  };
}

export default async function ResourcesId({ params:{locale,id}}:any) {
  const articles = await getArticles({id:id,lang:locale})

  return (
    <><ResourcesById articles={articles}/></>
  )
}
