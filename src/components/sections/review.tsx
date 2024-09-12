import Image from "next/image";
import Container from "../ui/container";
import  person from '@/public/person.png'
export default function ReviewSections() {
    return (   
        <Container className='my-[120px]'>
            <div className="flex items-center justify-between mb-[32px]">
                <h3 className="text-4xl font-semibold leading-[38.73px] text-left">Новости</h3>
            </div>
            <div className="flex gap-6">
                <div className="w-full rounded-lg  bg-[#F1F1F1] p-6">
                    <p className="text-base font-semibold leading-7 text-left mb-6">Раскройте сложности правосудия с помощью этого всеобъемлющего курса. Мы углубимся в фундаментальные принципы справедливости, равенства и верховенства закона, изучив, как эти концепции применяются в реальных...</p>
                    <div className="flex items-center gap-4">
                        <Image className="rounded-full" src={person} width={48} height={48} alt="img"/>
                        <div className="w-full"> 
                            <h4 className="text-sm font-semibold leading-6 text-left">Усмонов Алишер</h4>
                            <p className="text-[#5B6871] text-sm font-normal leading-6 text-lef">CEO and Co-Founder of BR Company</p>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-lg  bg-[#F1F1F1] p-6">
                    <p className="text-base font-semibold leading-7 text-left mb-6">Раскройте сложности правосудия с помощью этого всеобъемлющего курса. Мы углубимся в фундаментальные принципы справедливости, равенства и верховенства закона, изучив, как эти концепции применяются в реальных...</p>
                    <div className="flex items-center gap-4">
                        <Image className="rounded-full" src={person} width={48} height={48} alt="img"/>
                        <div className="w-full"> 
                            <h4 className="text-sm font-semibold leading-6 text-left">Усмонов Алишер</h4>
                            <p className="text-[#5B6871] text-sm font-normal leading-6 text-lef">CEO and Co-Founder of BR Company</p>
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-lg  bg-[#F1F1F1] p-6">
                    <p className="text-base font-semibold leading-7 text-left mb-6">Раскройте сложности правосудия с помощью этого всеобъемлющего курса. Мы углубимся в фундаментальные принципы справедливости, равенства и верховенства закона, изучив, как эти концепции применяются в реальных...</p>
                    <div className="flex items-center gap-4">
                        <Image className="rounded-full" src={person} width={48} height={48} alt="img"/>
                        <div className="w-full"> 
                            <h4 className="text-sm font-semibold leading-6 text-left">Усмонов Алишер</h4>
                            <p className="text-[#5B6871] text-sm font-normal leading-6 text-lef">CEO and Co-Founder of BR Company</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
