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
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/blogs?category_id=${param.categoryId}`);
        if (res.ok) {
          const data = await res.json();
          setBlogs(data?.data|| []); 
        } else {
          console.error('Failed to fetch blogs');
        }
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }
    async function getBlogsByPage(param: any) {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/blogs?page=${param.page}${param.categoryId?`&category_id=${param.categoryId}`:""}`);
        if (res.ok) {
          const data = await res.json();
          setBlogs(data?.data)
        } else {
          console.error('Failed to fetch blogs');
        }
      } catch (error) {
        console.error("Error:", error);
        return null;
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
    

      { initialBlogs?.last_page > 1 ?  <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: initialBlogs?.last_page }, (_, index) => index + 1).map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`px-4 py-2 rounded-lg border ${
              p === initialBlogs?.current_page
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
