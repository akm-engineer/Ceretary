import React from "react";

const Welcome = () => {
  return (
    <div className="relative flex flex-col items-center justify-center lg:flex-row">
      <div className="lg:absolute top-0 left-0 w-full h-full">
        <img src="/images/background.png" alt="" className="w-full h-full" />
      </div>
      <div className="relative lg:absolute lg:top-1/3 lg:right-1/3 lg:w-1/2">
        <div className="text-center lg:text-left lg:ml-8">
          <h1 className="text-4xl font-bold font-signature">
            Welcome To India’s First
          </h1>
          <h1 className="text-4xl font-bold font-signature text-[#624b8e]">
            Creator’s Marketplace
          </h1>
        </div>
        <div className="text-center lg:text-left lg:ml-8 pt-8">
          <h3 className="text-xl font-bold font-signature">
            Create your first E-Store @ Zero Cost
          </h3>
        </div>
        <div className="text-center lg:text-left lg:ml-8 pt-8">
          <p className="text-lg font-semibold font-signature max-w-sm">
            Empower your creativity with Createnary. Showcase, sell, and connect
            with a global audience effortlessly, turn your products into
            profits.
          </p>
        </div>
        <div className="text-center lg:text-left lg:ml-8 pt-8">
          <button className="bg-[#4a508e] px-6 rounded-2xl text-white py-4">
            Get Started
          </button>
        </div>
      </div>
      <div className="hidden lg:block absolute top-[124px] right-[20%]">
        <img src="/images/mobile.png" alt="" />
      </div>
    </div>
  );
};

export default Welcome;
