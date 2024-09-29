import React from 'react'
import Container from '../ui/container'
import CursCard from '../card/curs'

export default function TrainingVideosPage({curs}:any) {
  return (
    <Container  className='py-[120px] md:py-[160px]' >
    <h3 className="text-4xl font-semibold leading-[38.73px] text-left">Курсы</h3>
    <div className="flex  flex-wrap gap-6 mt-8 ">
    {
      curs?.length && curs?.map((e:any)=>(
          <CursCard className='colm2' image={e?.img} key={e?.id} navlink={`/curs/${e?.id}`} title={e?.name} date={e?.created_at}/>
      ))
  }
                   
    </div>
</Container>
  )
}
