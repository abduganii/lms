"use client"
import { useEffect } from "react";
import ArticlesSections from "../sections/articles";
import BlogsSections from "../sections/blogs";
import ContactSections from "../sections/contact";
import CursSections from "../sections/curs";
import EducationSections from "../sections/education";
import GraduatesSections from "../sections/graduates";
import HeroSections from "../sections/hero";
import NewsSections from "../sections/news";
import PagesSections from "../sections/page";
import PartnersSections from "../sections/partners";
import ReviewSections from "../sections/review";
import SubscribeSections from "../sections/subscribe";
import { fetchData } from "@/service/get";

interface HomePageinterface {
  graduated: any[],
  partners: any[],
  courses:any[],
  posts:any[],
  pages:any[],
  articles:any[],
}

export default function HomePage({graduated,partners,courses,posts,pages,articles}:HomePageinterface) {
  // useEffect(()=>{
  //    fetchData(`${process.env.NEXT_PUBLIC_URL}/posts`).then((data)=>console.log(data))
  // },[])
  return (
  <div className="pt-[120px] md:pt-[216px]">
    <HeroSections/>
    <PartnersSections partners={partners}/>
    <GraduatesSections graduated={graduated}/>
    <ArticlesSections articles={articles}/>
    <CursSections courses={courses}/>
    <NewsSections posts={posts}/>
    <PagesSections pages={pages}/>
    {/* <EducationSections/> */}
    <SubscribeSections/>
    <ReviewSections/>
    <ContactSections/>
    {/* <BlogsSections/> */}
  </div>
  );
}
