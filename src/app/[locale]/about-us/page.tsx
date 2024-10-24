import AboutUsPage from "@/components/page/about-us";
import { Metadata } from "next";

export async function generateMetadata({ params: { locale } }: any): Promise<Metadata> {
  return {
    title:  "Министерство юстиции Республики Узбекистан",
    description: "Министерство юстиции Республики Узбекистан",
  }
}
export default function AboutUs() {
  return (
    <><AboutUsPage/></>
  )
}
