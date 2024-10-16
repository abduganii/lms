"use client"
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Container from "@/components/ui/container";
import img1 from '@/public/Frame1000001344.png'
import Image from "next/image";
import { useState } from 'react';
import { LoadingIcons } from '../icon';
import { toast } from 'react-toastify';

type FormData = {
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactSections() {
    const { register,reset, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [loading,setLoading] = useState(false)
    const onSubmit = async (data: FormData) => {
        setLoading(true)
      try {
        console.log(data)
         await axios.post(process.env.NEXT_PUBLIC_URLS + '/feedback', data)
         .then(data=>{
            toast.success('Form submitted successfully!');
            reset()
         })
         .catch(()=>{
            toast.error('Failed to submit form');
         })
         .finally(()=> setLoading(false))
     
      } catch (error) {
        console.error('Error sending date:', error);
      }
    };
    return (
            <Container className='mb-[120px]' >
                <div className='flex items-center flex-wrap lg:flex-nowrap bg-[#F4F6FB] dark:bg-[#001E45]  rounded-3xl overflow-hidden '>
                    <Image className="w-full lg:max-w-[564px] max-h-[523px]" src={img1} width={564} height={523} alt="img"/>
                    <form  onSubmit={handleSubmit(onSubmit)} className="w-full inline-block p-4 md:pl-[72px] md:pr-[46px]">
                        <h3 className="text-4xl font-semibold leading-[38.73px] text-center mb-[32px]">Связаться с нами</h3>
                        <input  {...register('name', { required: 'Name is required' })} type="text" className="w-full dark:bg-[#001E45] dark:border dark:border-[#00132D] px-[16px] py-[14px] rounded-xl text-sm font-normal leading-6 text-left mb-4" placeholder="ФИО"/> 
                        <div className="flex gap-4 mb-4">
                            <input  {...register('phone', { required: 'Phone is required' })} type="text" className="w-full dark:bg-[#001E45] dark:border dark:border-[#00132D] px-[16px] py-[14px] rounded-xl text-sm font-normal leading-6 text-left" placeholder="Телефон"/> 
                            <input  {...register('email', { required: 'Email is required' })} type="email" className="w-full dark:bg-[#001E45] dark:border dark:border-[#00132D] px-[16px] py-[14px] rounded-xl text-sm font-normal leading-6 text-left" placeholder="Почта"/> 
                        </div>
                        <input  {...register('subject', { required: 'Subject is required' })} type="text" className="w-full dark:bg-[#001E45] dark:border dark:border-[#00132D] px-[16px] py-[14px] rounded-xl text-sm font-normal leading-6 text-left mb-4" placeholder="Тема"/> 
                        <input  {...register('message', { required: 'Message is required' })} type="text" className="w-full dark:bg-[#001E45] dark:border dark:border-[#00132D] px-[16px] py-[14px] rounded-xl text-sm font-normal leading-6 text-left mb-12" placeholder="Описание"/>

                        <button disabled={loading} className="flex items-center justify-center  p-[13px] bg-[#13399A] text-white rounded-xl w-full  md:max-w-[240px]">
                            
                            {
                                loading && <LoadingIcons/>
                            }
                            Отправить</button> 
                    </form>
                </div>
            </Container>  
        );
  }
  