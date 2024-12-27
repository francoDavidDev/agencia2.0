import { HashRouter as Router, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";

// Importaciones normales para componentes esenciales
import Loading from "./components/Loading";
import Header from "./components/Header";

// Lazy load de las secciones y componentes
const CustomerReviews = lazy(() => import("./sections/CustomerReviews"));
const Footer = lazy(() => import("./sections/Footer"));
const Hero = lazy(() => import("./sections/Hero"));
const PopularProducts = lazy(() => import("./sections/PopularProducts"));
const Services = lazy(() => import("./sections/Services"));
const SpecialOffer = lazy(() => import("./sections/SpecialOffer"));
const Subscribe = lazy(() => import("./sections/Subscribe"));
const SuperQuality = lazy(() => import("./sections/SuperQuality"));
const MenuSection = lazy(() => import("./sections/MenuSection"));
const MoreInfoBranding = lazy(() => import("./sections/MoreInfoBranding"));
const WebComerciantes = lazy(() => import("./sections/WebComerciantes"));
const MoreInfoMenus = lazy(() => import("./sections/MoreInfoMenus"));
const MoreInfonWebs = lazy(() => import("./sections/MoreInfonWebs"));

const App = () => {
  return (
    <Router>
      <main className="relative">
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section className="xl:padding-1 wide:padding-r padding-b bg-pale-black">
                    <Hero />
                  </section>
                  <section className="padding bg-pale-black">
                    <PopularProducts />
                  </section>
                  <section className="padding bg-pale-black">
                    <WebComerciantes />
                  </section>
                  <section className="padding-x py-10 bg-pale-black">
                    <Services />
                  </section>
                  <section className="padding bg-pale-black">
                    <SuperQuality />
                  </section>
                  <section className="padding bg-pale-black">
                    <SpecialOffer />
                  </section>
                  <section className="padding bg-pale-black">
                    <MenuSection />
                  </section>
                  <section className="bg-pale-blue padding bg-pale-black">
                    <CustomerReviews />
                  </section>
                  {/* Sección newsletter comentada */}
                  {/* <section className="padding-x sm:py-32 py-16 w-full bg-pale-black">
                    <Subscribe />
                  </section> */}
                </>
              }
            />
            <Route path="/MoreInfoWebs" element={<MoreInfonWebs />} />
            <Route path="/MoreInfoBranding" element={<MoreInfoBranding />} />
            <Route path="/MoreInfoMenus" element={<MoreInfoMenus />} />
          </Routes>
          <section className="padding-x padding-t pb-8 bg-pale-black">
            <Footer />
          </section>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;
