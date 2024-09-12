import Container from "@/components/ui/container";
import Image from "next/image";
import CursCard from "../card/curs";


export default function CursSections() {
    return (
        <div className="py-[88px] bg-[#F5F5F5]">
            <Container  >
                <h3 className="text-4xl font-semibold leading-[38.73px] text-left">Курсы</h3>
                <div className="flex items-center gap-6 mt-8 ">
                    <CursCard title="title" date='14 авг, 2024'/>
                    <CursCard title="title" date='14 авг, 2024'/>
                    <CursCard title="title" date='14 авг, 2024'/>
                    <CursCard title="title" date='14 авг, 2024'/>
                </div>
            </Container>  
        </div>
        );
  }
  