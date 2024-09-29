import React from 'react'
import Container from '../ui/container'
import NewsCard from '../card/news'

export default function NewsPage({news}:any) {
  return (
    <Container  className='py-[120px] md:py-[160px]' >
    <h3 className="text-4xl font-semibold leading-[38.73px] text-left">Новости</h3>
    <div className="flex items-center flex-wrap gap-6 mt-8 ">
       {
        news?.length && news?.map((e:any)=>(
          <NewsCard key={e?.id} className={"colm2"}
            navlink={`/news/${e?.slug}`}
            image={e?.image}
            title={e?.title} 
            date={e?.created_at}
          />
        ))
       }
    </div>
</Container>
  )
}
