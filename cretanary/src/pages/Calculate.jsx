import React, { useState } from "react";

const Calculate = () => {
  const [followers, setFollowers] = useState(0);
  const [products, setProducts] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [yearlyIncome, setYearlyIncome] = useState(0);

  const handleFollowersChange = (e) => {
    setFollowers(parseInt(e.target.value));
  };

  const handleProductsChange = (e) => {
    setProducts(parseInt(e.target.value));
  };

  const handleCalculate = () => {
    const monthly = followers * products;
    setMonthlyIncome(monthly);
    setYearlyIncome(monthly * 12);
  };

  return (
    <>
      <div className="bg-[#f8f9fb] p-8 flex flex-col items-center justify-center">
        <div className="pt-6">
          <h1 className="font-signature font-bold text-3xl text-center">
            ESTIMATE EARNING POTENTIAL
          </h1>
        </div>
        <div className="flex  justify-center">
          <div className="md:w-[866px]  p-4 rounded flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col w-2/3 mr-8">
              <label htmlFor="influencerType" className="mb-2 pt-6 pb-2">
                <p className="pt-6 font-signature text-xl">
                  What kind of influencer are you
                </p>
              </label>
              <select
                id="influencerType"
                className="p-2 border border-gray-300 rounded-xl focus:outline-none"
              >
                <option value="">Select influencer type</option>
                <option value="micro">Micro-Influencer</option>
                <option value="macro">Macro-Influencer</option>
                <option value="celebrity">Celebrity-Influencer</option>
              </select>
              <p className="pt-6 font-signature text-xl pb-6">
                How many followers do you have?
              </p>
              <input
                type="range"
                min="0"
                max="1000"
                value={followers}
                onChange={handleFollowersChange}
                className="w-full"
              />
              <p className="pt-2 font-signature text-xl text-center">
                Followers: {followers}
              </p>
              <p className="pt-6 font-signature text-xl pb-6">
                How many products do you list monthly?
              </p>
              <input
                type="range"
                min="0"
                max="200"
                value={products}
                onChange={handleProductsChange}
                className="w-full"
              />
              <p className="pt-2 font-signature text-xl text-center">
                Products: {products}
              </p>
            </div>
            <div className="flex flex-col w-1/3 pt-2">
              <div className="flex items-center justify-center md:flex-col">
                <p className="text-2xl font-signature font-semibold md:pt-20">
                  Monthly Income
                </p>
                <p className="text-[#4A508E] text-4xl font-signature font-semibold">
                  ₹ {monthlyIncome}
                </p>
              </div>
              <div className="flex items-center justify-center md:flex-col md:pt-24">
                <p className="text-2xl font-signature font-semibold md:pt-16">
                  Yearly Earning
                </p>
                <p className="text-[#4A508E] text-4xl font-signature font-semibold ">
                  ₹ {yearlyIncome}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 ">
          <button
            className="bg-[#4a508e] px-6 rounded-2xl text-white py-4 font-signature font-bold"
            onClick={handleCalculate}
          >
            Calculate
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculate;
