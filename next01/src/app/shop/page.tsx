"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Head from "next/head";

interface Product {
  id: number;
  img: string;
  title: string;
  price: number;
  gender: string;
}

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [genderFilter, setGenderFilter] = useState<string>("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const gender = searchParams.get("gender") || "";
    setGenderFilter(gender);
  }, [searchParams]);

  useEffect(() => {
    let url = "http://localhost:5001/products";
    if (genderFilter) {
      url += `?gender=${genderFilter}`;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [genderFilter]);

  return (
    <>
      <Head>
        <title>Store</title>
        <meta name="description" content="Shop Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg0 m-t-23 p-b-140">
        <div className="container">
          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  genderFilter === "" ? "how-active1" : ""
                }`}
                onClick={() => router.push("/shop")}
              >
                All Products
              </button>
              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  genderFilter === "women" ? "how-active1" : ""
                }`}
                onClick={() => router.push("/shop?gender=women")}
              >
                Women
              </button>
              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  genderFilter === "man" ? "how-active1" : ""
                }`}
                onClick={() => router.push("/shop?gender=man")}
              >
                Men
              </button>
            </div>
          </div>

          <div className="row isotope-grid">
            {products.length === 0 ? (
              <p>No products found</p>
            ) : (
              products.map((product) => (
                <div
                  key={product.id}
                  className="col-sm-6 col-md-4 col-lg-3 p-b-35"
                >
                  <div className="block2">
                    <div className="block2-pic hov-img0">
                      <img src={product.img} alt={product.title} />
                      <Link
                        href={`/shop/${product.id}`}
                        className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                      >
                        View Details
                      </Link>
                    </div>

                    <div className="block2-txt flex-w flex-t p-t-14">
                      <div className="block2-txt-child1 flex-col-l">
                        <Link
                          href={`/shop/${product.id}`}
                          className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                        >
                          {product.title}
                        </Link>
                        <span className="stext-105 cl3">{product.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
