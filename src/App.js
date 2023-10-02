import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/main/Navbar";
import HomePage from "./components/pages/home/HomePage";
import Footer from "./components/main/footer/Footer";
// import AboutUs from "./components/pages/about/AboutPage";
import NoPage from "./components/pages/error/Oops";
// import AbroadCountry from "./components/pages/studyAbroad/AbroadCountry";
// import Sidebar from "./components/main/Sidebar";
import Collapse from "./components/main/Accordion";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            {/* <Route path="about-us" element={<AboutUs />} />
            <Route
              path="study-abroad/:countrySlug"
              element={<AbroadCountry />}
            /> */}
            <Route path="about-us" element={<Collapse />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
