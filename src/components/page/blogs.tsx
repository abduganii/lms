'use client'
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
  const [blogsArr, setBlogs] = useState<any>(); 
  const [categoryArr,setcategoryArr] = useState<any>([])
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const handlePage  = (p:any) => {
    if(p <= blogs?.last_page){
      params.set('page', p  );
      replace(`${pathname}?${params.toString()}`);
    }
  };

  const handlecategory = (p: any) => {
    setcategoryArr(p)
      params.set('category', p?.id  );
      replace(`${pathname}?${params.toString()}`);
  };

  useEffect(()=>{
    replace(`${pathname}`);
  },[])
  useEffect(()=>{
    setBlogs(blogs?.data)
  },[blogs])
  return (
    <Container className='py-[120px] md:py-[160px]'>
      <h3 className="text-4xl font-semibold leading-[38.73px] text-left">Blogs</h3>
      <SelectLocal 
        value={categoryArr} 
        setValue={handlecategory} 
        text={"Все категории"} 
        optionskey={'title'} 
        options={categories} 
      />
      <div className="flex items-center flex-wrap gap-6 mt-8">
        {blogsArr?.length ? blogsArr.map((blog: Blog, key: number) => (
          <NewsCard 
            image={blog.image} 
            className={key < 2 ? "colm1" : 'colm2'} 
            key={blog.id} 
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
