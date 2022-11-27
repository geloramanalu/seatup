import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faGreaterThan} from "@fortawesome/free-solid-svg-icons";
import { seatupData } from "./data";

const Checkout = () => {
    const[counter, setCounter] = useState(0);
    const[price, setPrice] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        if(counter <= 0){
            setCounter(0);
        }else{
            setCounter(counter - 1);
        }
    }

    const RincianPembayaran = () => {
        return (
            <>
                <div className="xl:mx-7">
                    <div className="flex justify-between my-2">
                        <h2 className="text-sm xl:text-lg">Nomor Order</h2>
                        <h2 className="text-sm xl:text-lg">A109928817762S</h2>
                    </div>
                    <div className="flex justify-between my-2">
                        <h2 className="text-sm xl:text-lg">Harga</h2>
                        <h2 className="text-sm xl:text-lg">Rp23.0000,00</h2>
                    </div>
                    <div className="flex justify-between my-2">
                        <h2 className="text-sm xl:text-lg">Biaya Layanan & Lainnya</h2>
                        <h2 className="text-sm xl:text-lg">Rp1.000,00</h2>
                    </div>
                    <div className="flex justify-between my-2">
                        <h2 className="text-sm xl:text-lg">Kursi Reguler</h2>
                        <h2 className="text-sm xl:text-lg">A1</h2>
                    </div>
                    <div className="flex justify-between xl:mt-2 xl:pb-6 border-b-kuning border-b-2 border-opacity-60 pb-3">
                        <h2 className="text-sm xl:text-lg">PPN 11%</h2>
                    </div>
                    <div className="flex justify-end xl:mt-2 xl:mb-6 pt-2">
                        <h2 className="text-sm xl:text-lg">Rp26.640,00</h2>
                    </div>
                </div>
            </>
        )
    }

    const CircularButton = ({text, onClick}) => {
        return (
            <>
                <button className="relative w-12 h-12 xl:w-16 xl:h-16 mx-3 mr-3 rounded-full flex justify-center items-center text-center p-5 shadow-xl bg-kuning hover:bg-opacity-75" onClick={onClick}>{text}</button>
            </>
        )
    }
    

    return (
        <div className="checkout-container flex flex-col justify-center mx-6 my-24 xl:mx-12 xl:my-20">
            <div className="order flex flex-col lg:w-8/12 w-full mb-3 ">
                <h1 className="text-3xl xl:text-5xl font-extrabold  border-b-4 xl:mb-5 xl:pl-10 px-2 pb-2 border-opacity-20 border-black">Checkout</h1>
                <div className="customer text-md xl:text-2xl font-semibold opacity-75 xl:mb-16 xl:pl-10 lg:text-start text-center">
                    <h2>Ronggo Tsani Musyafa</h2>
                    <h2>085775184434</h2>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row"> 
                <div className="bg-merah text-abu font-extrabold p-10 rounded-3xl flex flex-col lg:flex-row lg:justify-evenly lg:w-8/12 w-full">
                    <div className="flex-col flex-1 flex items-center lg:items-start">
                        <h1 className="text-lg xl:text-4xl mb-4 xl:mb-9 ">Ayam Rizky</h1>   
                        <p className=" text-sm xl:text-lg xl:w-4/5 mb-5 xl:mb-8 font-medium text-center xl:text-start ">Lorem ipsum dolor sit amet consectetur. 
                        Leo pulvinar vivamus purus nec in ullamcorper et sit. Odio ut et condimentum nisl ut felis et. 
                        Amet viverra convallis iaculis id laoreet morbi eget massa quam. Dui mauris aliquet posuere semper tellus. 
                        Condimentum tortor senectus bibendum vitae. Convallis diam arcu risus amet vel.
                        </p>
                        <h2 className="xl:mb-8 text-md xl:text-lg mb-4">Rp23.000,00</h2>
                        <button className="bg-kuning text-black px-6 py-2 flex content-center justify-evenly xl:mb-16 rounded-3xl items-center mb-3 shadow-xl hover:bg-opacity-75">
                            <FontAwesomeIcon icon={faPencil} className={"pr-3"}/>
                            Edit
                        </button>
                    </div>
                    <div className="flex flex-col flex-1 items-center xl:my-3 justify-center">
                        <div className="shape box-content h-44 w-44 xl:h-64 xl:w-64 lg:px-8 lg:py-8 mb-8 bg-abu text-center"></div>
                        <div className=" flex flex-row text-black w-full lg:w-4/6 justify-evenly">
                            <CircularButton text={"-"} onClick={decrement}/>
                            <h1 className="text-xl xl:text-2xl self-center text-abu px-3">{counter}</h1>
                            <CircularButton text={"+"} onClick={increment}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:w-4/12 w-full mt-6 ">
                    <div className="pembayaran bg-merah xl:mx-7 rounded-2xl px-4 mx-3 h-max text-abu xl:mb-2 justify-center py-3">
                        <h1 className="text-xl xl:text-3xl font-extrabold xl:mx-7 xl:my-6 pb-3 border-b-kuning border-opacity-60 border-b-2 xl:pb-2">Total Pembayaran</h1>
                        <RincianPembayaran />
                        
                    </div>
                    <div className="bottom-0 sticky lg:relative bg-merah rounded-2xl xl:mx-7 px-4 mx-3 mt-4 flex-col flex text-abu font-bold divide-y divide-kuning">
                        <button className="text-md xl:text-xl text-start p-2 mx-1 xl:p-4 xl:mx-2 flex items-center justify-between  hover:text-gray-400">Tunai <FontAwesomeIcon icon={faGreaterThan} /></button>
                        <button className="text-md xl:text-xl text-start p-2 mx-1 xl:p-4 xl:mx-2 flex items-center justify-between hover:text-gray-400 mb-2">Terapkan Promo <FontAwesomeIcon icon={faGreaterThan} /></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Checkout;