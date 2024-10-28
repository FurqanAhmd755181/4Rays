import React from "react";
import FourRays from "../../../assets/FourRays.png";
import Mobile from "../../../assets/Mobile.png";
import arrowRight from "../../../assets/ArrowRight.svg"

const BillingCart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Canon EOS 1500D DSLR Camera Body+ 18-55 mm",
      quantity: 1,
      price: 50,
      imageUrl: FourRays,
    },
    {
      id: 2,
      name: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone",
      quantity: 2,
      price: 150,
      imageUrl: FourRays,
    },
  ];

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="w-full max-w-xs p-4 bg-white ">
      <div className="w-full max-w-xs p-4 bg-white border border-red-500 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <div className="divide-y border-t">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center py-2">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-12 h-12 object-cover rounded mr-4"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-700">
                  {item.name}
                </h3>
                <div className="flex flex-row">
                  <p className="text-xs text-gray-500">{item.quantity} x</p>
                  <p className="text-xs text-red-500 font-bold px-1">
                    ${item.price}
                  </p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-red-500">
                &times;
              </button>
            </div>
          ))}
        </div>
        <div className="pt-4 mt-4 border-t">
          <div className="flex justify-between items-center text-lg">
            <span className="text-gray-500">Sub-Total:</span>
            <span className="font-bold">${totalAmount.toFixed(2)} USD</span>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <button className="flex items-center justify-center w-full py-2 px-4 bg-red-500 text-white font-medium rounded-full hover:bg-white hover:text-red-500 border border-red-500">
            PLACE ORDER
            <img src={arrowRight} alt="arrow" className="ml-1" />
          </button>
        </div>
      </div>

      <div className="mt-8 h-[443px]">
        <img src={Mobile} alt="Mobile" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default BillingCart;
