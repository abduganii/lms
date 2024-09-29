import ArticlesSections from "../sections/articles";
import BlogsSections from "../sections/blogs";
import ContactSections from "../sections/contact";
import CursSections from "../sections/curs";
import EducationSections from "../sections/education";
import GraduatesSections from "../sections/graduates";
import HeroSections from "../sections/hero";
import NewsSections from "../sections/news";
import PartnersSections from "../sections/partners";
import ReviewSections from "../sections/review";
import SubscribeSections from "../sections/subscribe";

interface HomePageinterface {
  graduated: any[],
  partners: any[],
  courses:any[],
  posts:any[],
}

export default function HomePage({graduated,partners,courses,posts}:HomePageinterface) {
  return (
  <div className="pt-[120px] md:pt-[216px]">
    <HeroSections/>
    <PartnersSections partners={partners}/>
    <GraduatesSections graduated={graduated}/>
    <ArticlesSections/>
    <CursSections courses={courses}/>
    <NewsSections posts={posts}/>
    {/* <EducationSections/> */}
    <SubscribeSections/>
    <ReviewSections/>
    <ContactSections/>
    {/* <BlogsSections/> */}
  </div>
  );
}
