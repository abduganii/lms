import React from 'react'
import Container from '../ui/container'
import NewsCard from '../card/news'

export default function GraduatesPage() {
  return (
    <Container  className='py-[160px]' >
    <h3 className="text-4xl font-semibold leading-[38.73px] text-left">Выпускники</h3>
    <div className="flex items-center gap-6 mt-8 ">
        <NewsCard navlink={`/graduates`}  title='Усмонов Алишер' date='Co-Founder of BR Company'/>
        <NewsCard navlink={`/graduates`} title='Усмонов Алишер' date='Co-Founder of BR Company'/>
        <NewsCard navlink={`/graduates`} title='Усмонов Алишер' date='Co-Founder of BR Company'/>
        <NewsCard navlink={`/graduates`} title='Усмонов Алишер' date='Co-Founder of BR Company'/>
    </div>
</Container>
  )
}
