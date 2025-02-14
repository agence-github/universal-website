import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import AboutPage from "./pages/AboutUs/AboutPage";
import DistributerPage from "./pages/DistributersDesk/DistributerPage";
import BrandsPage from "./pages/Brands/BrandsPage";
import CareersPage from "./pages/Careers/CareersPage";
import ContactUsPage from "./pages/ContactUs/ContactUsPage";
import { useEffect, useLayoutEffect, useState } from "react";
import Loader from "./components/Loader";
import SupplyChainpage from "./pages/SupplyChain/SupplyChainpage";
import Freya from "./pages/Freya/Freya";
import Care from "./pages/Care/Care";
import Luv from "./pages/Luv/Luv";
import Skino from "./pages/Skino/Skino";
import MaxSTylingGel from "./pages/MaxStylingGel/MaxSTylingGel";
import Admin from "./pages/Admin";
import MaxCleaning from "./pages/MaxCleaning.jsx/MaxCleaning";


export default function App() {
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <>
      {screenLoading ? (
        <Loader />
      ) : (
        <>
          <BrowserRouter>
            <Wrapper>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/brands" element={<BrandsPage />} />
                <Route path="/distributor" element={<DistributerPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/contact" element={<ContactUsPage />} />
                <Route path="/supply-chain" element={<SupplyChainpage />}/>
                <Route path="/brands/freya" element={<Freya />} />
                <Route path="/brands/care" element={<Care />}/>
                <Route path="/brands/luv" element={<Luv />}/>
                <Route path="/brands/skino" element={<Skino />}/>
                <Route path="/brands/max-styling-gel" element={<MaxSTylingGel />}/>
                <Route path="/brands/max-cleaning" element={<MaxCleaning />}/>
                <Route path="/brands/max-styling-wax" element={<MaxSTylingGel />}/>
                <Route path="/universal-only-admin" element={<Admin />}/>
              </Routes>
            </Wrapper>
          </BrowserRouter>
        </>
      )}
    </>
  );
}
