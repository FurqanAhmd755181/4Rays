import FourRays from "../../assets/FourRays.png";
import arrowRight from "../../assets/arrowRight.png";
import LandingPage from "./LandingPage/LandingPage";

export const Cart = () => {
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
    <div className="relative">
      <LandingPage className="z-0 relative" />
      <div className="flex pr-40 z-20 absolute top-0 right-0">
        <div className="max-w-xs ml-auto w-full p-4 border border-customRed bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-4">
            Shopping Cart ({cartItems.length.toString().padStart(2, "0")})
          </h2>
          <div className="divide-y divide-gray-200 border-t">
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
                    <p className="text-xs text-customRed font-bold px-1">
                      ${item.price}
                    </p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-customRed">
                  &times;
                </button>
              </div>
            ))}
          </div>
          <div className="pt-4 mt-4 border-t border-gray-200">
            <div className="flex justify-between items-center text-lg">
              <span className="text-gray-500">Sub-Total:</span>
              <span className="font-bold">${totalAmount.toFixed(2)} USD</span>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <button className="flex items-center justify-center w-full py-2 px-4 bg-customRed border border-customRed outline-customRed text-white font-medium rounded-full hover:bg-white hover:text-customRed hover:ouline-customRed">
              CHECKOUT NOW
              <img src={arrowRight} alt="arrow" className="ml-1" />
            </button>
            <button className="w-full py-2 px-4 border-2 border-customRed text-customRed outline-customRed font-medium rounded-full hover:bg-customRed hover:text-white">
              VIEW CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
