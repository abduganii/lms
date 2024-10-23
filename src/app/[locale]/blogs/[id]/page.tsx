import BlogsIdPage from '@/components/page/blogs-id'
import { fetchData } from '@/service/get';
import { Metadata } from 'next';
import React from 'react'

async function getBlogs({id,lang}:any) {
  
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/blogs/${id}`,lang);
}
async function getBlogsVidoe({id,lang}:any) {
  
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/blogs/${id}/videos`,lang);
}
export async function generateMetadata({ params: {id, locale } }: any): Promise<Metadata> {
  const res = await getBlogs({id:id,lang:locale})

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
export default async function BlogsSinglePage({ params: { id ,locale}}:any) {
  const blogs = await getBlogs({id:id,lang:locale})
  const vidoe = await getBlogsVidoe({id:id,lang:locale})

  return (
    <>
    <BlogsIdPage blogs={blogs} vidoe={vidoe}/>
    </>
  )
}
