import ContactSections from "../sections/contact";
import CursSections from "../sections/curs";
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
    <CursSections/>
    <NewsSections/>
    <ContactSections/>
    <ReviewSections/>
    <SubscribeSections/>
  </div>
  );
}
