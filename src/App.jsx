import React from "react";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  SpecialOffer,
  SpecialServices,
  Subscribe,
  SuperQuality,
} from "./components";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <main className="relative">
        <Nav></Nav>
        <section className="xl:padding-1 wide:padding-r padding-b">
          <Hero></Hero>
        </section>
        <section className="padding">
          <PopularProducts></PopularProducts>
        </section>
        <section className="padding">
          <SuperQuality></SuperQuality>
        </section>
        <section className="padding-x py-10">
          <SpecialOffer></SpecialOffer>
        </section>
        <section className="padding">
          <SpecialServices></SpecialServices>
        </section>
        <section className="padding bg-pale-blue ">
          <CustomerReviews></CustomerReviews>
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe></Subscribe>
        </section>
        <section className="padding bg-black padding-x padding-t pb-8">
          <Footer></Footer>
        </section>
      </main>
    </>
  );
};

export default App;
