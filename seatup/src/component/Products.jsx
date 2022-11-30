import React from 'react'
import SearchImg from "../img/search-icon.png"
import Makanan from "../img/products/menu-pic-1.png"
import "react-lazy-load-image-component/src/effects/blur.css";
import { Dialog, Menu } from "@headlessui/react";
import { useState } from "react";
import { dataMenu } from '../data/dataMenu';

const MenuCard = ({image, name, price, desc}) =>{
    return(
        <button className="rounded-3xl">
            <div className="relative h-40 w-auto bg-slate-400 rounded-lg">
                <div className="inset-y-0">
                    <div className="relative w-12 h-12 xl:w-16 xl:h-16 mx-3 mr-3 rounded-full flex justify-center items-center text-center font-bold text-2xl p-2 shadow-xl bg-kuning hover:bg-opacity-75 z-10">+</div>
                </div>
                
                <img src={image} className="z-0 w-100 h-100 w-auto"/>
                <h1 className="absolute z-30">{name}</h1>
                <h2 className="absolute z-30">{price}</h2>
                <p className="absolute">{desc}</p>
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
        <div className="flex flex-col overflow-hidden h-screen w-full">
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
            <div className="flex flex-col lg:flex-row">

                <div className='relative flex-col px-10 sm:px-20 lg:pl-32 pt-16 lg:w-3/4 h-screen'> 
                    <div className='font-bold text-2xl pb-5'>Kategori</div>

                    <div className='font-semibold flex flex-col flex-1 lg:flex-row gap-2 justify-between pb-5'>
                    
                        <select className='bg-merah text-white rounded-xl pl-6 py-3 pr-56'>
                            <option>Makanan</option>
                            <option>Minuman</option>
                            <option>Cemilan</option>    
                        </select>

                        <select className='bg-kuning2 text-slate-400 rounded-xl pl-6 py-3 pr-20'>
                            <option>Sortir Berdasarkan: Harga</option>
                            <option>Sortir Berdasarkan: Paling Laris</option>
                        </select>
                        

                    </div>

                    <div className='justify-center align-center text-center grid grid-cols-3 md:gap-10 gap-2'>
                        <div className='bg-slate-200 rounded'>x</div>
                        <div className='bg-slate-200 rounded'>x</div>
                        <div className='bg-slate-200 rounded'>x</div>
                        <div className='bg-slate-200 rounded'>x</div>
                        {/* <MenuCard image={Makanan} name="Judul" price="Rp20.000,00" desc="ifdawfu;asdfhsaifulasfndioslukfjnaislfukj" /> */}
                        
                    </div>
                    
                </div>            
            </div>
            
        </div>
    </div>
  )
}

