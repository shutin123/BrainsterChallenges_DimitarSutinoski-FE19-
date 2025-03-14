"use client";
import React, { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import Head from "next/head";

interface AboutData {
  title: string;
  first_content: string;
  second_content: string;
  third_content: string;
  first_image: string;
  second_image: string;
  fourth_content: string;
  fifth_content: string;
  author: string;
}

const About: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);

  useEffect(() => {
    fetch("http://localhost:5001/about_page")
      .then((response) => response.json())
      .then((data) => setAboutData(data))
      .catch((error) =>
        console.error("Error fetching About page data:", error)
      );
  }, []);

  if (!aboutData) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>Store - About</title>
        <meta name="description" content="About our store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle title={aboutData.title} />

      <section className="bg0 p-t-75 p-b-120">
        <div className="container">
          <div className="row p-b-148">
            <div className="col-md-7 col-lg-8">
              <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                <h3 className="mtext-111 cl2 p-b-16">{aboutData.title}</h3>
                <p className="stext-113 cl6 p-b-26">
                  {aboutData.first_content}
                </p>
                <p className="stext-113 cl6 p-b-26">
                  {aboutData.second_content}
                </p>
                <p className="stext-113 cl6 p-b-26">
                  {aboutData.third_content}
                </p>
              </div>
            </div>

            <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
              <div className="how-bor1">
                <div className="hov-img0">
                  <img src={aboutData.first_image} alt="First" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="order-md-2 col-md-7 col-lg-8 p-b-30">
              <div className="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
                <h3 className="mtext-111 cl2 p-b-16">About Our Story</h3>
                <p className="stext-113 cl6 p-b-26">
                  {aboutData.fourth_content}
                </p>

                <div className="bor16 p-l-29 p-b-9 m-t-22">
                  <p className="stext-114 cl6 p-r-40 p-b-11">
                    {aboutData.fifth_content}
                  </p>
                  <span className="stext-111 cl8">{aboutData.author}</span>
                </div>
              </div>
            </div>

            <div className="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
              <div className="how-bor2">
                <div className="hov-img0">
                  <img src={aboutData.second_image} alt="Second" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
