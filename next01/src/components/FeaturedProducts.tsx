"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProductItem from "./ProductItem";

interface Product {
  id: string;
  price: string;
  title: string;
  gender: string;
  img: string;
  description: string;
}

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

 
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:5001/products/?_limit=4");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleProductClick = (productId: string) => {
   
    router.push(`/product/${productId}`);
  };

  return (
    <section className="sec-product bg0 p-t-100 p-b-50">
      <div className="container">
        <div className="p-b-32">
          <h3 className="ltext-105 cl5 txt-center respon1">Store Overview</h3>
        </div>

        <div className="tab01">
          <div className="tab-content p-t-50">
            <div
              className="tab-pane fade show active"
              id="best-seller"
              role="tabpanel"
            >
              <div className="wrap-slick2">
                <div className="d-flex">
                  {products.map((product) => (
                    <ProductItem
                      key={product.id}
                      product={product} 
                      onClick={() => handleProductClick(product.id)} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
