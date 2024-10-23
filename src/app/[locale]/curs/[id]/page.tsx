import CursPage from "@/components/page/curs";
import { fetchData } from "@/service/get";
import { Metadata } from "next";


async function getCourses({ id ,lang}: any) {
  return fetchData(`${process.env.NEXT_PUBLIC_URL}/courses/${id}`,lang);
}
export async function generateMetadata({ params: {id, locale } }: any): Promise<Metadata> {
  const res = await getCourses({id:id,lang:locale})

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
export default async function Curs({ params: { id ,locale }}:any) {
  const curs = await getCourses({id:id,lang:locale})
  return (
    <>
      <CursPage curs={curs} />
    </>
  )
}
