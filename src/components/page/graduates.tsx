"use client"
import React from 'react'
import Container from '../ui/container'
import GraduatesCard from '../card/graduates'
import { useTranslation } from "react-i18next";

export default function GraduatesPage({ graduates }: any) {
  const {t,i18n} = useTranslation()
  return (
    <Container  className='py-[120px] md:py-[160px]' >
      <h3 className="text-4xl font-semibold leading-[38.73px] text-left">{ t('graduates')}</h3>
    <div className="flex items-center gap-6 mt-8 ">
    {
      graduates && graduates?.map((e:any)=>(
        <GraduatesCard key={e?.id} className={"colm2"}  image={e?.photo}  title={`${e?.first_name} ${e?.last_name}`} text={e?.position?.[i18n.language]}/>
      ))
  }
    </div>
</Container>
  )
}
