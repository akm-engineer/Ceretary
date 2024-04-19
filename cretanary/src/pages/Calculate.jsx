import React, { useState } from "react";

// Reusable Input component
const Input = ({ label, value, onChange, type = "range", min, max }) => (
  <div className="flex flex-col">
    <label htmlFor={label} className="font-signature text-xl mb-2">
      {label}
    </label>
    <input
      type={type}
      id={label}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      className="w-full"
    />
    <p className="pt-2 font-signature text-xl text-center">
      {label}: {value}
    </p>
  </div>
);

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
    <div className="bg-[#f8f9fb] p-8 flex flex-col items-center justify-center">
      <div className="pt-6">
        <h1 className="font-signature font-bold text-3xl">
          ESTIMATE EARNING POTENTIAL
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="w-full lg:w-[866px] p-4 rounded flex">
          <div className="flex flex-col lg:w-2/3 mr-8">
            <Input
              label="Followers"
              value={followers}
              onChange={handleFollowersChange}
              min={0}
              max={1000}
            />
            <Input
              label="Products"
              value={products}
              onChange={handleProductsChange}
              min={0}
              max={200}
            />
          </div>
          <div className="flex flex-col lg:w-1/3 pt-2">
            <div className="flex items-center justify-center flex-col">
              <p className="text-2xl font-signature font-semibold pt-20">
                Monthly Income
              </p>
              <p className="text-[#4A508E] text-4xl font-signature font-semibold">
                ₹ {monthlyIncome}
              </p>
            </div>
            <div className="flex items-center justify-center flex-col pt-24">
              <p className="text-2xl font-signature font-semibold pt-16">
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
  );
};

export default Calculate;
