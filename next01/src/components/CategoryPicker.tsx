"use client";
import { useState, useEffect } from "react";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryPicker() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const genderFilter = searchParams.get("gender");

  const handleCategoryClick = (gender: string) => {
    router.push(`/shop?gender=${gender}`);
  };

  return (
    <div className="sec-banner bg0">
      <div className="row no-gutters">
        <div className="col-6 m-lr-auto respon4">
          <div className="block1 wrap-pic-w">
            <img src="/images/banner-04.jpg" alt="IMG-BANNER" />
            <button
              className={`block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3 ${
                genderFilter === "women" ? "how-active1" : ""
              }`}
              onClick={() => handleCategoryClick("women")}
            >
              <div className="block1-txt-child1 flex-col-l">
                <span className="block1-name ltext-102 trans-04 p-b-8">
                  Women
                </span>
                <span className="block1-info stext-102 trans-04">
                  Spring 2022
                </span>
              </div>
              <div className="block1-txt-child2 p-b-4 trans-05">
                <div className="block1-link stext-101 cl0 trans-09">
                  Shop Now
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="col-6 m-lr-auto respon4">
          <div className="block1 wrap-pic-w">
            <img src="/images/banner-05.jpg" alt="IMG-BANNER" />
            <button
              className={`block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3 ${
                genderFilter === "man" ? "how-active1" : ""
              }`}
              onClick={() => handleCategoryClick("man")}
            >
              <div className="block1-txt-child1 flex-col-l">
                <span className="block1-name ltext-102 trans-04 p-b-8">
                  Man
                </span>
                <span className="block1-info stext-102 trans-04">
                  Spring 2022
                </span>
              </div>
              <div className="block1-txt-child2 p-b-4 trans-05">
                <div className="block1-link stext-101 cl0 trans-09">
                  Shop Now
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
