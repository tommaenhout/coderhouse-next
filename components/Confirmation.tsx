"use client";

import { useCartContext } from "./context/CartContext";
import List from "./List";
import ConfirmationListItem from "./ConfirmationListItem";
import StyledLink from "./Buttons/StyledLink";

const Confirmation = () => {
  const { cart } = useCartContext();

  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-4">
          Thank You for Your Purchase!
        </h1>
        <p className="mb-4">Your purchase has been successfully completed.</p>
        <h2 className="text-xl font-semibold mt-6 mb-4">Your Orders</h2>
        <div className="space-y-4">
          <List
            className="space-y-4"
            items={cart}
            sourceName="product"
            ItemComponent={ConfirmationListItem}
          />
        </div>
        <div className="flex justify-end mt-6">
          <div>
            <StyledLink href="/">Back to Home</StyledLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
