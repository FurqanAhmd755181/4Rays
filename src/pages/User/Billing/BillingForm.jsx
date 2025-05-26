import React, { useState } from "react";

function BillingForm() {
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg ">
      {/* Billing Information */}
      <div className="w-full mb-5">
        <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name"
            className="border p-3 rounded-[60px] w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            className="border p-3 rounded-[60px] w-full"
          />
          <input
            type="text"
            placeholder="Company Name (Optional)"
            className="border p-3 rounded-[60px] md:col-span-2 w-full"
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-3 rounded-[60px] md:col-span-2 w-full"
          />
          <select className="border p-3 rounded-[60px] w-full">
            <option>Country</option>
          </select>
          <select className="border p-3 rounded-[60px] w-full">
            <option>Region/State</option>
          </select>
          <input
            type="text"
            placeholder="City"
            className="border p-3 rounded-[60px] w-full"
          />
          <input
            type="text"
            placeholder="Zip Code"
            className="border p-3 rounded-[60px] w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-[60px] w-full"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border p-3 rounded-[60px] w-full"
          />
        </div>
      </div>

      {/* Payment Option */}
      <div className="border rounded-lg p-4">
        <h2 className="text-lg font-semibold mt-6 mb-4">Payment Option</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5 border rounded-lg h-[144px] ">
          {["American Express", "Paypal", "Amazon Pay", "Debit/Credit Card"].map((option) => (
            <label key={option} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="payment"
                className="mr-2"
                checked={paymentMethod === option}
                onChange={() => setPaymentMethod(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>

        {/* Card Information */}
        {paymentMethod === "Debit/Credit Card" && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full md:col-span-2">
              <h2>Name on Card</h2>
              <input
                type="text"
                placeholder="Name on Card"
                className="border p-3 rounded-[60px] w-full"
              />
            </div>
            <div className="md:col-span-2 w-full">
              <h2>Card Number</h2>
              <input
                type="text"
                placeholder="Card Number"
                className="border p-3 rounded-[60px] w-full"
              />
            </div>
            <div>
              <h2>Expire Date</h2>
              <input
                type="text"
                placeholder="Expire Date (DD/YY)"
                className="border p-3 rounded-[60px] w-full"
              />
            </div>
            <div>
              <h2>CVC</h2>
              <input
                type="text"
                placeholder="CVC"
                className="border p-3 rounded-[60px] w-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* Additional Information */}
      <h2 className="text-lg font-semibold mt-6 mb-4">Additional Information</h2>
      <textarea
        placeholder="Order Notes (Optional)"
        className="border p-3 rounded-md w-full h-24"
      ></textarea>
    </div>
  );
}

export default BillingForm;
