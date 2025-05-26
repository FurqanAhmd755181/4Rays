import React from "react";
import BillingForm from "./BillingForm";
import BillingCart from "./BillingCart";

const BillingBody = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center space-x-4 p-4">
      <div className="w-full md:w-[70%] max-w-2xl">
        <BillingForm />
      </div>
      <div className="w-full md:w-[30%] max-w-xs">
        <BillingCart />
      </div>
    </div>
  );
};

export default BillingBody;
