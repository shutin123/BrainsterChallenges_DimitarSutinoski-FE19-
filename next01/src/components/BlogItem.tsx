import React from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ Import Next.js Image

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

const BlogItem: React.FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.id}`} className="p-b-63 d-block">
      <span className="hov-img0 how-pos5-parent">
        <Image
          src={blog.img || "/default-image.jpg"}
          alt={blog.title}
          width={800}
          height={600}
        />
      </span>

      <div className="p-t-32">
        <h4 className="p-b-15">
          <span className="ltext-108 cl2 hov-cl1 trans-04">{blog.title}</span>
        </h4>
        <p className="stext-117 cl6">{blog.excerpt}</p>{" "}
        <div className="flex-w flex-sb-m p-t-18">
          <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
            {blog.author && (
              <span>
                <span className="cl4">By</span> {blog.author}
                <span className="cl12 m-l-4 m-r-6">|</span>
              </span>
            )}
            {blog.category && <span>{blog.category}</span>}
          </span>

          <span className="stext-101 cl2 trans-04 m-tb-10">
            Continue Reading
            <i className="fa fa-long-arrow-right m-l-9"></i>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
