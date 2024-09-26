import React from 'react'
import Container from '../ui/container'
import NewsCard from '../card/news'

export default function BlogsPage({blogs}:any) {
  return (
    <Container  className='py-[160px]' >
    <h3 className="text-4xl font-semibold leading-[38.73px] text-left">Blogs</h3>
    <div className="flex items-center flex-wrap gap-6 mt-8 ">
      {
          blogs?.length && blogs?.map((e:any,key:number)=>(
           <NewsCard image={e?.author} className={key >= 0 && key < 2 ? "colm1" : 'colm2'} key={e?.id} navlink={`/blogs/${e?.slug}`} 
            title={e?.name} date={e?.created_at}/>

          ))
      }
      
    </div>
</Container>
  )
}
