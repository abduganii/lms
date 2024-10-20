
"use client"
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from 'react'
import Container from '../ui/container'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import _ from 'lodash'
import SelectLocal from '../ui/select';
import NewsCard from '../card/news';

interface Blog {
  id: number;
  name: string;
  slug: string;
  short_description:string;
  image: string;
  created_at: string;
}

interface Category {
  id: number;
  title: string;
}

interface BlogsPageProps {
  blogs: any;
  categories: Category[];
}

export default function BlogsPage({ blogs, categories }: BlogsPageProps) {
  const {t} = useTranslation()
  const [blogsArr, setBlogs] = useState<any>(); 
  const [categoryArr,setcategoryArr] = useState<any>([])
  const params = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const paramsValue = new URLSearchParams(params);

  const handlePage  = (p:any) => {
    if(p <= blogs?.last_page){
      paramsValue.set('page', p  );
      replace(`${pathname}?${paramsValue.toString()}`);
    }
  };

  const handlecategory = (p: any) => {
    setcategoryArr(p)
    if (p.id == 0) {
      replace(`${pathname}`);
    } else {
      paramsValue.set('category', p?.id  );
     replace(`${pathname}?${paramsValue.toString()}`);
      
    }
  };

  useEffect(()=>{
    replace(`${pathname}`);
  },[])
  useEffect(()=>{
    setBlogs(blogs?.data)
  },[blogs])
  return (
    <Container className='py-[120px] md:py-[160px]'>
      <h3 className="text-4xl font-semibold leading-[38.73px] text-left">{t('blogs')}</h3>
      <SelectLocal 
        value={categoryArr} 
        setValue={handlecategory} 
        text={t('all_categories')} 
        optionskey={'title'} 
        options={[{id:0,title:t('all_categories')}, ...categories]} 
      />
      <div className="flex items-center flex-wrap gap-6 mt-8">
        {blogsArr?.length ? blogsArr.map((blog: Blog, key: number) => (
          <NewsCard 
            image={blog.image} 
            className={key < 2 ? "colm1" : 'colm2'} 
            key={blog.id} 
            disc={blog.short_description}
            navlink={`/blogs/${blog.slug}`} 
            title={blog.name} 
            date={blog.created_at}
          />
        )) : <p>No blogs available</p>}
      </div>
    

      { blogs?.last_page > 1 ?  <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: blogs?.last_page }, (_, index) => index + 1).map((p) => (
          <button
            key={p}
            onClick={() => handlePage(Number(p))}
            className={`px-4 py-2 rounded-lg border ${
              p === blogs?.current_page
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-blue-500 border-gray-300"
            } hover:bg-blue-100`}
          >
            {p}
          </button>
        ))}
      </div>:""}
    </Container>
  );
}
