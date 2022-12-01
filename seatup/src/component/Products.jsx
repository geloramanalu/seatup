import React from 'react'
import SearchImg from "../img/search-icon.png"
import Makanan1 from "../img/products/menu-pic-1.png"
import Makanan2 from "../img/products/menu-pic-2.png"
import Makanan3 from "../img/products/menu-pic-3.png"
import Makanan4 from "../img/products/menu-pic-4.png"
import Makanan5 from "../img/products/menu-pic-5.png"
import Makanan6 from "../img/products/menu-pic-6.png"
import "react-lazy-load-image-component/src/effects/blur.css";
import { Dialog, Menu } from "@headlessui/react";
import { useState } from "react";
import { dataMenu } from '../data/dataMenu';

// function that constructs menu card
const MenuCard = ({image, name, price, desc}) =>{
    return(
        <button className="rounded-3xl transition ease-in-out duration-500 filter transform hover:scale-110 z-60">
            <div className="relative h-96 w-auto">
                <div className="flex justify-end">
                    <div className="absolute w-9 h-9 md:w-12 md:h-12 -mt-5 -mx-5 md:-mt-6 md:-mx-6 xl:w-16 xl:h-16 rounded-full flex justify-center items-center text-center font-bold text-2xl p-2 shadow-xl bg-kuning hover:brightness-110 z-10">+</div>
                </div>
                
                <img src={image} className="absolute z-0 w-auto h-full object-cover rounded-lg"/>

                <div className="relative h-full w-full flex flex-col justify-end p-5 sm:pl-8 md:p-8 text-white bg-gradient-to-t from-black rounded-lg">
                    <div className='flex flex-col justify-end h-full w-full text-left'>
                        <div className="relative font-montserrat font-bold text-md leading-5 md:text-2xl flex justify-start tracking-wide">{name}</div>
                        <div className="relative font-semibold text-sm md:text-md flex justify-start brightness-90">{price}</div>
                        <div className="relative font-light text-xs md:text-sm flex justify-start brightness-75">{desc}</div>
                        
                        
                    </div>
                </div>

            </div>

        </button>
    )

}

export default function Products() {
    // const [isTampil, setIsTampil] = useState(false);
    // const [fotoTampil, setFotoTampil] = useState();

    // function closeFoto() {
    //     setIsTampil(false);
    //     setFotoTampil();
    // }

    // function openFoto(foto) {
    //     setFotoTampil(foto);
    //     setIsTampil(true);
    //     console.log(isTampil, fotoTampil);
    // }
  
    return (
    <div>
        {/* header */}
        <div className="flex flex-col overflow-hidden h-100 w-full">
            <div className="bg-products-header bg-cover h-1/4 w-screen sm:h-3/5 lg:h-5/6">
                
                <div className="flex relative justify-center h-10 rounded-full bg-white drop-shadow-xl w-3/5 mt-28 mx-auto mb-5 py-auto sm:mt-64 sm:h-14 lg:h-16 lg:mt-72 lg:w-3/4">

                    <form action="#" className="w-full relative flex flex-wrap">
                        
                        <label className="block text-gray-400">
                        
                            <span className="absolute pt-1 px-2 w-5/6 md:pt-3 lg:pt-4 lg:px-6">
                                <img src={SearchImg} className="scale-50 lg:scale-100" alt="search-icon"/>
                            </span>
                        
                            <input 
                                type="text"
                                name="search"
                                id="search"
                                className="pr-96 bg-transparent absolute text-gray-400 justify-center h-10 ml-10 focus:outline-none text-xs font-regular sm:text-sm md:h-14 md:text-semibold lg:h-16 lg:text-lg lg:ml-20"
                                placeholder="Lagi mau makan apa?">
                            </input>

                        </label>

                    </form>

                </div>


            </div>

            {/* contents */}
            <div className="flex flex-col lg:flex-row mb-16">

                <div className='relative flex-col px-10 sm:px-20 lg:pl-32 pt-16 lg:w-3/4 h-100'> 
                    <div className='font-bold text-2xl pb-5'>Kategori</div>

                    <div className='font-semibold flex flex-col flex-1 lg:flex-row gap-2 justify-between pb-12'>
                    
                        <select className='bg-merah text-white rounded-xl pl-6 py-3 pr-56'>
                            <option>Makanan</option>
                            <option>Minuman</option>
                            <option>Cemilan</option>    
                            <option>Semua</option>    
                        </select>

                        <select className='bg-kuning2 text-slate-400 rounded-xl pl-6 py-3 pr-20'>
                            <option>Sortir Berdasarkan: Paling Laris</option>
                            <option>Sortir Berdasarkan: Harga</option>
                        </select>
                        

                    </div>

                    <div className='grid grid-cols-3 md:gap-10 gap-7'>

                        <MenuCard image={Makanan1} name="Nasi Kuning" price="Rp10.000,00" desc="Nasi kuning ini enak sekali dilengkapi dengan lauk yang lezat." />
                        <MenuCard image={Makanan2} name="Olive Fried Chicken" price="Rp12.000,00" desc="Siapa sih yang tidak tahu dengan makanan ini?" />
                        <MenuCard image={Makanan3} name="Ayam Goreng" price="Rp15.000,00" desc="Menu yang satu ini disajikan dengan tekstur yang lembut dan bumbu gurih." />
                        <MenuCard image={Makanan4} name="Bakso" price="Rp10.000,00" desc="Bakso dengan kuah yang gurih dan daging yang berserat." />
                        <MenuCard image={Makanan5} name="Mie Goreng" price="Rp11.000,00" desc="Mie goreng yang lembut ini siap disantap untuk menghilangkan rasa laparmu." />
                        <MenuCard image={Makanan6} name="Nasi Goreng" price="Rp14.000,00" desc="Makanan yang satu ini disajikan hangat dengan banyak santapan." />
                            
                    </div>
                    {/*recap pesanan*/}
                    <div className="bg-slate-400 m-10">

                    </div>

                </div>
                
            </div>
            
        </div>
    </div>
  )
}

