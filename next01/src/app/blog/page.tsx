"use client";
import React, { useEffect, useState } from "react";
import BlogItem from "../../components/BlogItem";
import PageTitle from "../../components/PageTitle";
import Head from "next/head";

interface Blog {
  id: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  img: string;
  title: string;
}

const BlogPage: React.FC = () => {
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    fetch("http://localhost:5001/blogs/1")
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .catch((error) => console.error("Error fetching blog:", error));
  }, []);

  return (
    <>
      <Head>
        <title>Store - Blog</title>
        <meta name="description" content="Blog page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle />

      <section className="bg0 p-t-62 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-80">
              <div className="p-r-45 p-r-0-lg">
                {blog ? <BlogItem blog={blog} /> : <p>Loading...</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
