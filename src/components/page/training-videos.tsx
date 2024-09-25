import React from 'react'
import Container from '../ui/container'
import CursCard from '../card/curs'

export default function TrainingVideosPage() {
  return (
    <Container  className='py-[160px]' >
    <h3 className="text-4xl font-semibold leading-[38.73px] text-left">Курсы</h3>
    <div className="flex items-center gap-6 mt-8 ">
    <CursCard navlink={'/curs/1'} className={'border border-gray-200'} title="title" date='14 авг, 2024'/>
    <CursCard navlink={'/curs/1'} className={'border border-gray-200'} title="title" date='14 авг, 2024'/>
    <CursCard navlink={'/curs/1'} className={'border border-gray-200'} title="title" date='14 авг, 2024'/>
    </div>
</Container>
  )
}
