import { HashRouter as Router, Route, Routes } from "react-router-dom";
import {
  CustomerReviews,
  Footer,
  Hero,
  MoreInfonWebs,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

import MenuSection from "./sections/MenuSection";
import MoreInfoBranding from "./sections/MoreInfoBranding";
import WebComerciantes from "./sections/WebComerciantes";
import MoreInfoMenus from "./sections/MoreInfoMenus";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <main className="relative">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section className="xl:padding-1 wide:padding-r padding-b bg-pale-black">
                  <Hero />
                </section>
                {/* seccion web */}
                <section className="padding bg-pale-black">
                  <PopularProducts />
                </section>
                {/* seccion web comerciantes */}
                <section className="padding bg-pale-black">
                  <WebComerciantes />
                </section>

                {/* seccion targeta de servicios */}
                <section className="padding-x py-10 bg-pale-black">
                  <Services />
                </section>
                
                {/* seccion comunity manager */}
                <section className="padding bg-pale-black">
                  <SuperQuality />
                </section>

                {/* seccion branding y logos */}
                <section className="padding bg-pale-black">
                  <SpecialOffer />
                </section>
                
                {/* seccion menus */}
                <section className="padding bg-pale-black">
                  <MenuSection />
                </section>
                
                {/* seccion integrantes */}
                <section className="bg-pale-blue padding bg-pale-black">
                  <CustomerReviews />
                </section>
                
                {/* seccion  newsletter */}
               { /*<section className="padding-x sm:py-32 py-16 w-full bg-pale-black">
                  <Subscribe />
                </section>*/}
                
              
              </>
            }
          />
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

          <Route
            path="/MoreInfoMenus"
            element={
              <div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <MoreInfoMenus />
              </div>
            }
          />
        </Routes>
          {/* seccion footer */}
          <section className="padding-x padding-t pb-8 bg-pale-black">
                  <Footer />
                </section>
      </main>
    </Router>
  );
};

export default App;
