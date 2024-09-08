import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Home/Homepage"
import AboutPage from "./pages/AboutUs/AboutPage";
import DistributerPage from "./pages/DistributersDesk/DistributerPage";
import BrandsPage from "./pages/Brands/BrandsPage";
import CareersPage from "./pages/Careers/CareersPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/brands" element={<BrandsPage />}/>
        <Route path="/distributor" element={<DistributerPage/>}/>
        <Route path="/careers" element={<CareersPage />}/>
      </Routes>
    </BrowserRouter>
  )
}