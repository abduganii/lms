import { FacebookIcons, InstagramIcons, TelegramIcons,YouTobeIcons } from "../icon";
import Container from "../ui/container";

export default function SubscribeSections() {
    return (
            <Container className='my-[120px]'>
                <div className='bg-[#F4F6FB]  rounded-3xl overflow-hidden  p-4 md:p-12'>
                <h3 className="mb-8 text-2xl font-semibold leading-[29.05px]">Подпишитесь на нашу рассылку</h3>
                    <div className="flex flex-wrap lg:flex-nowrap items-center gap-8">
                        <div className="w-full relative lg:max-w-[604px]">
                            <input type="email" className="w-full  h-ful  px-[16px] py-4 rounded-xl text-sm font-normal leading-6 text-left " placeholder="Ваш e-mail"/>
                            <button className="p-[13px] py-4 h-full mt-3 md:mt-0 md:absolute top-0 right-0 bg-[#13399A] text-white rounded-xl w-full md:max-w-[240px]">Подписаться</button> 
                        </div>
                        <div className="flex gap-4">
                            <div className="py-3 md:px-6 px-[12px] rounded-xl bg-white">
                                 <TelegramIcons/>
                            </div>
                            <div className="py-3 md:px-6 px-[12px] rounded-xl bg-white">
                                 <InstagramIcons/>
                            </div>
                            <div className="py-3 md:px-6 px-[12px] rounded-xl bg-white">
                                 <FacebookIcons/>
                            </div>
                            <div className="py-3 md:px-6 px-[12px] rounded-xl bg-white">
                                 <YouTobeIcons/>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>  
        );
  }
  