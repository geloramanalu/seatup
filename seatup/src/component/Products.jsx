import React from 'react'
import SearchImg from "../img/search-icon.png"

export default function Products() {
  return (
    <div>
        <div className="flex flex-col overflow-hidden h-screen w-full">
            <div className="bg-products-header bg-cover h-1/4 w-screen sm:h-3/5 lg:h-5/6">
                
                <div className="flex relative justify-center h-10 rounded-full bg-white drop-shadow-xl w-3/5 mt-28 mx-auto py-auto sm:mt-64 sm:h-14 lg:h-16 lg:mt-72 lg:w-3/4">

                    <form action="#" className="w-full relative flex flex-wrap">
                        
                        <label className="block text-gray-400">
                        
                            <span className="absolute pt-1 px-3 w-5/6 md:pt-3 lg:pt-4 lg:px-6">
                                <img src={SearchImg} className="scale-50 lg:scale-100" alt="search-icon"/>
                            </span>
                        
                            <input 
                                type="text"
                                name="search"
                                id="search"
                                className="bg-transparent absolute text-gray-400 justify-center h-10 ml-12 focus:outline-none text-xs font-semibold sm:text-sm md:h-14 lg:h-16 lg:text-lg lg:ml-20"
                                placeholder="Lagi mau makan apa?">
                            </input>

                        </label>

                    </form>

                </div>


            </div>
            
            <div className="bg-slate-300 h-full">
                test 2
            </div>
        </div>
    </div>
  )
}

