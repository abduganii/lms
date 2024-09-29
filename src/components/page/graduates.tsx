import React from 'react'
import Container from '../ui/container'
import GraduatesCard from '../card/graduates'


export default function GraduatesPage() {
  return (
    <Container  className='py-[120px] md:py-[160px]' >
    <h3 className="text-4xl font-semibold leading-[38.73px] text-left">Выпускники</h3>
    <div className="flex items-center gap-6 mt-8 ">
        <GraduatesCard navlink={`/graduates`}  title='Усмонов Алишер' text='Co-Founder of BR Company'/>
        <GraduatesCard navlink={`/graduates`} title='Усмонов Алишер' text='Co-Founder of BR Company'/>
        <GraduatesCard navlink={`/graduates`} title='Усмонов Алишер' text='Co-Founder of BR Company'/>
        <GraduatesCard navlink={`/graduates`} title='Усмонов Алишер' text='Co-Founder of BR Company'/>
    </div>
</Container>
  )
}
