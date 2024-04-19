import React from "react";

const Links = () => {
  return (
    <>
      <div className="bg-[#4A508E] w-full flex justify-center items-center flex-col p-8">
        <div>
          <h1 className="text-4xl font-signature font-extrabold text-white">
            Your audience wants links
          </h1>
        </div>
        <div className="pt-6">
          <p className="text-xl font-signature  text-white">
            Make it easy for them by linking products to every post and video
          </p>
        </div>
        <div className="pt-6">
          <img src="/images/highlight.png" alt="" />
        </div>
        <div className="pt-6">
          <button className="bg-white px-6 rounded-2xl font-bold font-signature py-4">
            Try for free
          </button>
        </div>
      </div>
    </>
  );
};

export default Links;
