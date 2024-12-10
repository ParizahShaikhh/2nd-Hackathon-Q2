import React from "react";
import HeaderPage from "../components/NavBar";
import FooterPage from "../components/Footer";

const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeaderPage />
      <div className=" bg-white">
        <img src="/images/bb2.png" alt="Shop Banner" />
      </div>
      <div className="space-x-4">
        <img
          src="/images/logo.svg"
          alt="logo"
          className="hover:text-gray-300"
        />
      </div>
      <div>
        <h1 className="font-poppins font-medium text-5xl">Checkout</h1>
        <h3 className="font-poppins font-medium text-xl">Home</h3>
        <img src="/images/greater.svg" alt="file route" />
        <p className="font-poppins font-light text-xl">Checkout</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="">
          <img src="/images/billingdetails1.svg" alt="billing form" />
        </div>
        <div>
          <img src="/images/carddetails.svg" alt="payment card details" />
        </div>
      </div>
      <div className="bg-[#FAF3EA] grid grid-cols-1 lg:grid-cols-4 p-9">
        <div className="justify-center flex">
          <img src="/images/trophy1.svg" alt="trophy" />
          <div className="pl-3">
            <h1 className="font-poppins font-semibold text-2xl">
              High Quality
            </h1>
            <p className="font-poppins font-medium text-xl text-[#898989] m1-3">
              crafted from top materials
            </p>
          </div>
        </div>
        <div className="justify-center flex">
          <img src="/images/guarantee.svg" alt="Guarantee" />
          <div className="pl-3">
            <h1 className="font-poppins font-semibold text-2xl">
              Warranty Protection
            </h1>
            <p className="font-poppins font-medium text-xl text-[#898989] m1-3">
              Over 2 years
            </p>
          </div>
        </div>
        <div className="justify-center flex">
          <img src="/images/shipping.svg" alt="Shipping" />
          <div className="pl-3">
            <h1 className="font-poppins font-semibold text-2xl">
              Free Shipping
            </h1>
            <p className="font-poppins font-medium text-xl text-[#898989]">
              Order over 150 $
            </p>
          </div>
        </div>
        <div className="justify-center flex">
          <img src="/images/customersupport.svg" alt="Customer Support" />
          <div className="pl-3">
            <h1 className="font-poppins font-semibold text-2xl">
              24 / 7 Support
            </h1>
            <p className="font-poppins font-medium text-xl text-[#898989] m1-3">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default page;
