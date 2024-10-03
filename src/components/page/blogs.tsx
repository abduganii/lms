'use client'
import React, { useState, useEffect } from 'react';
import Container from '../ui/container';
import NewsCard from '../card/news';
import SelectLocal from '../ui/select';

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

export default function BlogsPage({ blogs: initialBlogs, categories }: BlogsPageProps) {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs?.data||[]); 
  const [value, setValue] = useState<Category | null>(null);
  const [page,setPage ] = useState(1)
  async function getBlogsByCategory(param: any) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/blogs?category_id=${param.categoryId}`);
    if (res.ok) {
      const data = await res.json();
      setBlogs(data?.data|| []); 
    } else {
      console.error('Failed to fetch blogs');
    }
  }
    async function getBlogsByPage(param: any) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/blogs?page=${param.page}${param.categoryId?`&category_id=${param.categoryId}`:""}`);
    if (res.ok) {
      const data = await res.json();
      setBlogs([...blogs,...data?.data] || []); 
    } else {
      console.error('Failed to fetch blogs');
    }
  }

  useEffect(() => {
      getBlogsByCategory({categoryId:value?value.id :null,page: page||1} );
  }, [value]);

  useEffect(() => {
    getBlogsByPage({categoryId:value?value.id :null,page: page||1} );
}, [page]);
  return (
    <Container className='py-[120px] md:py-[160px]'>
      <h3 className="text-4xl font-semibold leading-[38.73px] text-left">Blogs</h3>
      <SelectLocal 
        value={value} 
        setValue={setValue} 
        text={"Все категории"} 
        optionskey={'title'} 
        options={categories} 
      />
      <div className="flex items-center flex-wrap gap-6 mt-8">
        {blogs?.length ? blogs.map((blog: Blog, key: number) => (
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
      { page < initialBlogs?.last_page? <div onClick={()=>setPage(state=>state +1)} className='w-full px-4 py-3 text-white text-center rounded mt-9 cursor-pointer bg-[#13399A]'>
      load more
      </div>:""}
    </Container>
  );
}
