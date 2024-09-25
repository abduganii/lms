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

export default function HomePage() {
  return (
  <div className="pt-[216px]">
    <HeroSections/>
    <PartnersSections/>
    <GraduatesSections/>
    <ArticlesSections/>
    <CursSections/>
    <NewsSections/>
    {/* <EducationSections/> */}
    <SubscribeSections/>
    <ReviewSections/>
    <ContactSections/>
    {/* <BlogsSections/> */}
  </div>
  );
}
