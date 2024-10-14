import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { CustomerReviews, Footer, Hero, MoreInfonWebs, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections";
import Nav from "./components/Nav";
import MenuSection from "./sections/MenuSection";
import MoreInfoBranding from "./sections/MoreInfoBranding";
import WebComerciantes from "./sections/WebComerciantes";

const App = () => {
  return (
    <Router>
      <main className="relative">
        <Nav />
        <Routes>
          <Route path="/" element={
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
              <section className="padding-x sm:py-32 py-16 w-full bg-pale-black">
                <Subscribe />
              </section>
              <section className="padding-x padding-t pb-8 bg-pale-black">
                <Footer />
              </section>
            </>
          } />
            <Route
  path="/MoreInfoWebs"
  element={
    <div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <MoreInfonWebs />
    </div>
  }
/>

<Route
  path="/MoreInfoBranding"
  element={
    <div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <MoreInfoBranding />
    </div>
  }
/>

        </Routes>
      </main>
    </Router>
  );
};

export default App;
