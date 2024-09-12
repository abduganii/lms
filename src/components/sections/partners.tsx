import Container from "@/components/ui/container";
import Image from "next/image";
import img1 from '@/public/partnor.png'

export default function PartnersSections() {
    return (
        <Container className='mb-[120px]' >
            <h3 className="text-2xl font-semibold leading-[29.05px] text-center">Партнеры</h3>
            <div className="flex items-center gap-6 mt-6 ">
                <Image src={img1} width={211} height={72} alt="img"/>
            </div>
        </Container>  
    );
  }
  