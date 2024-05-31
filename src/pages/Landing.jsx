import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Cta from "../components/Cta";
import Features from "../components/Features";
import Partners from "../components/Partners";
import ProductsSection from "../components/ProductsSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <>
      <main className="bg-gray-50 ">
        {/* <div className="relative">
          <div
            className="absolute top-0 right-0 w-[250] h-96 z-auto "
            style={{
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="%23FBBF24"><path d="M58.3128 9.19409C97.5782 -5.66006 168.233 -4.25231 187.908 33.4877C210.453 78.6128 116.414 172.462 63.9694 180.398C21.5845 185.936 -9.12827 111.231 5.89097 83.0886C27.6548 35.8727 18.0479 23.0425 58.3128 9.19409Z"/></svg>')`,
              backgroundPosition: "top right",
              backgroundSize: "cover",
            }}
          ></div>
        </div> */}
        <section>
          <Navbar />
        </section>
        <section>
          <Hero />
        </section>
        <section>
          <Cta />
        </section>
        <section>
          <ProductsSection />
        </section>
        <section>
          <Features />
        </section>
        <section>
          <Partners />
        </section>
        <section>
          <Contact />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Landing;
