'use client'
import React from 'react'
import Container from './container'
import { Navbar } from '@/muck/data'
import { FacebookIcons, InstagramIcons, TelegramIcons, YouTobeIcons } from '../icon'
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/public/Logo.svg";
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const {t} = useTranslation()
  return (
    <footer className="py-[16px] md:py-[50px] bg-gray-100 dark:bg-[#001E45] dark:text-[#FFFFFF]">
    <Container>
        <div className="flex items-start gap-[30px] flex-wrap sm:flex-nowrap pb-4 border-gray-300 border-b">

          <Link href={"/"} className="flex md:hidden items-center ml-[-15px] mb-[10px]">
                <Image alt="img" height={39} width={62} src={logo} />
                <h3 className="text-sm font-medium leading-5 text-left w-full max-w-[237px]">
                  {t('header_logo')}
                </h3>
          </Link>
            {
                Navbar?.map(e=>(
                    <div key={e?.id} className='w-full'>
                        <h4 className='text-lg font-normal leading-[21.78px] text-left mb-4'>{t(e?.label)}</h4>
                        {
                            e?.children?.map(el=>(
                                <Link href={el.link} className='text-[#6E7C87] inline-block w-full mb-2 text-sm font-normal leading-6 text-left' key={el.id}>{t(el.label)}</Link>
                            ))
                        }
                    </div>
                ))
            }
            <div className='w-full flex items-center gap-4'>
              <a target="_blank" href='https://t.me/huquqiyaxborot'>
                <TelegramIcons color={`#5B6871`} iconsColor={'#5B6871'}/>
              </a>
              <a target="_blank" href='https://t.me/antikorbot'>
                <TelegramIcons color={`#5B6871`} iconsColor={'#5B6871'}/>
              </a>
              <a target="_blank" href='https://www.instagram.com/adliyanews/'>
                <InstagramIcons color={`#5B6871`} iconsColor={'#5B6871'}/>
              </a>
              <a target="_blank" href='https://www.facebook.com/minjustuz/'>
                <FacebookIcons color={`#5B6871`} iconsColor={'#5B6871'}/>
              </a>
              <a target="_blank" href='https://www.facebook.com/groups/588441011280149'>
                <FacebookIcons color={`#5B6871`} iconsColor={'#5B6871'}/>
              </a>
              <a target="_blank" href='https://www.youtube.com/c/adliya'>
                <YouTobeIcons color={`#5B6871`} iconsColor={'#5B6871'}/>
              </a>
            </div>
        </div>
        <div className='flex items-center justify-between pt-5'>
            <p className='text-sm font-normal leading-6 text-[#667085] '> {t('footer_text')}</p>
            <Link href={"/"} className="hidden md:flex items-center ">
              <Image alt="img" height={64} width={97} src={logo} />
              <h3 className="text-sm font-medium leading-5 text-left w-full max-w-[237px]">
              {t('header_logo')}
              </h3>
          </Link>
        </div>
    </Container>
    </footer>
  )
}
