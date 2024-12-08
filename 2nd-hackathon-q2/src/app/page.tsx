// import Image from "next/image";
import FooterPage from "./components/Footer";
import HeaderPage from "./components/NavBar";
import Sharesetup from "./components/Sharesetup";
import InspirationProducts from "./components/Inspirationproducts";
import OurProductsPage from "./components/Ourproducts";
import BrowserangePage from "./components/Browserange";
import BannerPage from "./components/Banner";


export default function Home() {
  return (
    <div className=" bg-white main">
      <HeaderPage />
      <BannerPage />
      <BrowserangePage />
      <OurProductsPage />
      <InspirationProducts />
      <Sharesetup />
      <FooterPage />
    </div>
  );
}
