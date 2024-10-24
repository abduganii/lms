import ContactPage from '@/components/page/contact'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({ params: { locale } }: any): Promise<Metadata> {
  return {
    title:  "Министерство юстиции Республики Узбекистан",
    description: "Министерство юстиции Республики Узбекистан",
  }
}
export default function Contact() {
  return (
    <ContactPage/>
  )
}
