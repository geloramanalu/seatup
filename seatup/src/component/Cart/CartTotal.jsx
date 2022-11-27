import { useContext } from "react";
import { CartData } from "./Cart";
import { PriceDisplay } from "./PriceDisplay";

export const CartTotal = () => {
  const { items } = useContext(CartData);
  const total = items.reduce(
    (partialSum, item) => partialSum + item.price * item.quantity,
    0
  );
  return (
    <div className="flex flex-col items-end gap-2">
      <div className="text-xl text-merah">
        Total:
        <span className="pl-1 font-bold">
          <PriceDisplay value={total} />
        </span>
      </div>
      <button className="bg-kuning text-black font-bold p-2 w-56 rounded-full drop-shadow-xl">
        Pesan Sekarang
      </button>
    </div>
  );
};
