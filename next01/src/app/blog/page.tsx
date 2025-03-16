"use client";

import { useEffect, useState, useCallback } from "react";
import BlogItem from "@/components/BlogItem";
import PageTitle from "@/components/PageTitle";

interface Blog {
  id: string;
  title: string;
  content: string;
  category: string;
  image?: string;
  author?: string;
  date?: string;
  excerpt?: string;
  img?: string;
}

const API_URL = "http://localhost:5001/blogs";

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    try {
      let url = API_URL;
      if (search && category) {
        url += `?category_like=${category}&q=${search}`;
      } else if (search) {
        url += `?q=${search}`;
      } else if (category) {
        url += `?category_like=${category}`;
      }

      const res = await fetch(url);
      const data: Blog[] = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
    setLoading(false);
  }, [search, category]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <>
      <PageTitle title="Blog" />
      <section className="bg0 p-t-62 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-80">
              <div className="p-r-45 p-r-0-lg">
                {blogs.length === 0 && !loading ? (
                  <p>There are no results.</p>
                ) : (
                  blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)
                )}
              </div>
            </div>

            <div className="col-md-4 col-lg-3 p-b-80">
              <div className="side-menu">
                <form className="bor17 of-hidden pos-relative">
                  <input
                    className="stext-103 cl2 plh4 size-116 p-l-28 p-r-55"
                    type="text"
                    name="search"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button className="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04">
                    <i className="zmdi zmdi-search"></i>
                  </button>
                </form>

                <div className="p-t-55">
                  <h4 className="mtext-112 cl2 p-b-33">Categories</h4>
                  <ul>
                    <li className="bor18">
                      <button
                        onClick={() => setCategory("fashion")}
                        className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                      >
                        Fashion
                      </button>
                    </li>
                    <li className="bor18">
                      <button
                        onClick={() => setCategory("beauty")}
                        className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                      >
                        Beauty
                      </button>
                    </li>
                    <li className="bor18">
                      <button
                        onClick={() => setCategory("streetstyle")}
                        className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                      >
                        Street Style
                      </button>
                    </li>
                    <li className="bor18">
                      <button
                        onClick={() => setCategory("lifestyle")}
                        className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                      >
                        Life Style
                      </button>
                    </li>
                    <li className="bor18">
                      <button
                        onClick={() => setCategory("diy")}
                        className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                      >
                        DIY & Crafts
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
