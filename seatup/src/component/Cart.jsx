import React, { useState } from "react";

const cartDummyData = [
  {
    image: require("../img/ayam_rizky.png"),
    name: "Ayam Rizky",
    variant: "Paket 1 (nasi dan dada ayam)",
    price: 23000,
    notes: "Level 10, tidak pakai sayur, bawang, dan seledri.",
    quantity: 1,
  },
  {
    image: require("../img/nasi_goreng.png"),
    name: "Nasi Goreng Berkah",
    variant:
      "Nasi goreng dengan bumbu pilihan dicampur dengan telur yang lezat",
    price: 23000,
    notes: "Sangat pedas",
    quantity: 1,
  },
];

const CircularButton = ({ text, onClick }) => {
  return (
    <div
      className="flex justify-center items-center rounded-full 
                    bg-kuning text-black w-10 h-10 drop-shadow-lg"
      onClick={onClick}
    >
      {text}
    </div>
  );
};

const QuantityInput = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);
  const decrementValue = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  const incrementValue = () => {
    setValue(value + 1);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-10">
      <div
        className="flex items-center justify-evenly rounded-full
      bg-broken2white bg-opacity-20 text-2xl py-2 px-3 gap-4"
      >
        <CircularButton text="-" onClick={decrementValue}></CircularButton>
        <h2 className="w-[2ch] text-center">{value}</h2>
        <CircularButton text="+" onClick={incrementValue}></CircularButton>
      </div>
      Rp46,000.00
    </div>
  );
};

const CartItem = ({ item }) => {
  return (
    <div
      className="flex gap-5 flex-col lg:flex-row bg-merah text-white
                p-7 rounded-lg w-full justify-items-center"
    >
      <div className="rounded-lg self-center flex-shrink-0">
        <img src={item.image} alt=""></img>
      </div>
      <div className="flex flex-col gap-2 pl-10 pr-5 justify-evenly flex-grow">
        <div className="text-2xl font-extrabold">{item.name}</div>
        <div className="">{item.variant}</div>
        <div className="my-3 text-xl text-broken2white">Rp{item.price}</div>
        <div
          contentEditable={true}
          className="p-3 rounded-lg bg-broken2white bg-opacity-20 focus:outline-none"
        >
          {item.notes}
        </div>
      </div>
      <QuantityInput initialValue={item.quantity}></QuantityInput>
    </div>
  );
};

const CartTotal = ({ total }) => {
  return (
    <div className="flex flex-col items-end gap-2">
      <div className="text-xl text-merah">
        Total: <span className="font-bold">Rp{total}</span>
      </div>
      <button className="bg-kuning text-black font-bold p-2 w-56 rounded-full drop-shadow-xl">
        Pesan Sekarang
      </button>
    </div>
  );
};

const Cart = () => {
  const items = cartDummyData.map((item) => <CartItem item={item}></CartItem>);
  return (
    <div className="p-5 mt-2">
      <div className="font-extrabold text-2xl pb-5 border-b-black border-b-[1px]">
        Keranjang
      </div>
      <div className="flex flex-col py-5 w-full justify-between gap-3">
        {items}
      </div>
      <CartTotal total={20000}></CartTotal>
    </div>
  );
};

export default Cart;
