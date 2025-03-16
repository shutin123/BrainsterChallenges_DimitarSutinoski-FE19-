"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
import PageTitle from "@/components/PageTitle";
import RelatedProducts from "@/components/RelatedProducts";

interface Product {
  id: string;
  title: string;
  img: string;
  price: string;
  description: string;
}

const ShopDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const res = await fetch(`http://localhost:5001/products/${id}`);
          if (!res.ok) {
            throw new Error("Product not found");
          }
          const data: Product = await res.json();
          setProduct(data);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <Head>
        <title>{`Store - ${product.title}`}</title>
        <meta name="description" content={product.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle title={product.title} />

      <section className="sec-product-detail bg0 p-t-65 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-7 p-b-30">
              <div className="p-r-30 p-lr-0-lg">
                <div className="wrap-slick3 flex-sb flex-w">
                  <div className="slick3 gallery-lb">
                    <div className="item-slick3">
                      <div className="wrap-pic-w pos-relative">
                        {product.img && (
                          <img src={product.img} alt={product.title} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-5 p-b-30">
              <div className="p-r-50 p-t-5 p-lr-0-lg">
                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                  {product.title}
                </h4>
                <span className="mtext-106 cl2">{product.price}</span>
                <p className="stext-102 cl3 p-t-23">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts currentProductId={product.id} />
    </>
  );
};

export default ShopDetail;
