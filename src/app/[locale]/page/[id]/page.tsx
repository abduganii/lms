import NewsIdPage from '@/components/page/news-id'
import PagesIdPage from '@/components/page/page-id';
import { fetchData } from '@/service/get';
import { Metadata } from 'next';
import React from 'react'

async function getPage({id,lang}:any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/pages/${id}`,lang);
}
export async function generateMetadata({ params: {id, locale } }: any): Promise<Metadata> {
  const res = await getPage({id:id,lang:locale})

  const ogTitle = res?.og_title || 'Default Title';
  const ogDescription = res?.og_description || 'Default Description';
  const ogImage = res?.og_image || '/default-image.png';
  const ogUrl = res?.og_url || process.env.NEXT_PUBLIC_URL;
  const keywords = res?.keywords || 'default, keywords';

  return {
    title: ogTitle,
    description: ogDescription,
    keywords: keywords.split(',').map((keyword: string) => keyword.trim()),
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: ogImage,
          alt: ogUrl,
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

export default async function NewsSinglePage({ params: { id ,locale }}:any) {
  const news = await getPage({id:id,lang:locale})
  return (
    <>
    <PagesIdPage news={news}/>
    </>
  )
}
