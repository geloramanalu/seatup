const Profil = ({text, backdrop}) => {
    return (
        <div className="profil-container flex flex-col lg:flex-row justify-center lg:justify-evenly pt-4 lg:pt-24 lg:pl-16 flex-wrap lg:flex-nowrap">
            <div className="menu-profil-container flex flex-col items-center lg:items-start">
                <h1 className="text-black 2xl:text-4xl text-2xl text font-extrabold">Hello, Ronggo!</h1>
                <p className="text-gray-500 w-8/12 text-center text-md lg:text-left">Bergabung Sejak, 21 Oktober 2022</p>
                <div className="menu-profil flex flex-col pt-4 text-black">
                    <ul className="bg-kuning hidden lg:flex lg:flex-col text-lg bg-opacity-25 p-4 divide-y text-center lg:text-left divide-kuning border-opacity-50 rounded-md lg:w-52 xl:w-72 w-screen">
                        <li className="pt-1"><a href="/">Profil</a></li>
                        <li className="pt-3"><a href="/">Daftar Pesanan</a></li>
                        <li className="pt-3"><a href="/">Riwayat</a></li>
                        <li className="pt-3"><a href="/">Saldo</a></li>
                        <li className="pt-3"><a href="/">Pengaturan</a></li>
                    </ul>
                </div>
            </div>
            <div className="personal-data mt-4 bg-merah text-abu flex flex-col lg:flex-row lg:mx-6 lg:mb-6 rounded-t-2xl lg:rounded-2xl sm:flex-wrap lg:flex-nowrap w-screen justify-evenly lg:items-start items-center">
                <div className="foto flex flex-col pt-8 lg:pt-16 lg:pl-6 items-center">
                    <div className="shape box-content h-52 w-52 xl:h-64 xl:w-64 lg:px-8 lg:py-8 mb-8 bg-abu text-center"></div>
                    <button type="submit" className="bg-kuning font-2xl font-extrabold px-20 py-4 text-black rounded-full">Unggah Foto</button>
                    <p className="text-abu opacity-75 font-bold my-8 text-sm w-72">
                        Ukuran file: maksimum 10.000.000 bytes (10 Megabytes). 
                        Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</p>
                </div>
                <div className="flex flex-col mx-4 lg:mx-8 lg:w-7/12 mb-8 md:justify-center lg:flex-col sm:flex-row flex-wrap xl:flex-nowrap">
                    <div className="biodata lg:pt-16 pt-4 flex md:mx-4 flex-col text-md lg:text-lg w-5/12 lg:w-auto">
                        <h1 className="text-abu font-extrabold text-md text-xl 2xl:text-4xl ">Biodata Diri</h1>
                        <div className="flex justify-between xl:text-xl 2xl:text-2xl text-md pt-3 pb-1 flex-col xl:flex-row">
                            <h3 className="flex-1 font-bold ">Nama</h3>
                            <h3 className="flex-[1.5_1.5_10%] ">Ronggo Tsani Musyafa <span className="text-kuning xl:text-lg 2xl:text-xl text-md"><a href="/">Ubah</a></span></h3>
                        </div>
                        <div className="flex justify-between xl:text-xl 2xl:text-2xl text-md py-1 flex-col xl:flex-row">
                            <h3 className="flex-1 font-bold ">Tanggal Lahir</h3>
                            <h3 className="flex-[1.5_1.5_10%]">18 November 2003</h3>
                        </div>
                        <div className="flex justify-between xl:text-xl 2xl:text-2xl text-md py-1 flex-col xl:flex-row">
                            <h3 className="flex-1 font-bold ">Jenis Kelamin</h3>
                            <h3 className="flex-[1.5_1.5_10%]">Pria <span className="text-kuning xl:text-lg 2xl:text-xl text-md"><a href="/">Ubah</a></span></h3>
                        </div>
                    </div>
                    <div className="kontak flex lg:pt-8 pt-4 flex-col md:mx-4 text-md lg:text-lg w-5/12 lg:w-auto">
                        <h1 className="text-abu font-extrabold text-md text-xl 2xl:text-4xl">Kontak</h1>
                        <div className="kontak flex justify-between pt-3 pb-1 xl:text-xl 2xl:text-2xl text-md flex-wrap flex-col xl:flex-row">
                            <h3 className="flex-1 font-bold ">Email</h3>
                            <h3 className="flex-[1.5_1.5_10%] font-normal ">musyafart@gmail.com 
                                <span className="text-kuning bg-kuning bg-opacity-25 rounded-full xl:text-lg 2xl:text-xl text-md px-2 py-1 ml-2 ">Terverifikasi</span> 
                                <span className="text-kuning ml-2  xl:text-lg 2xl:text-xl text-md"><a href="/">Ubah</a></span>
                            </h3>
                        </div>
                        <div className="kontak flex justify-between py-1 flex-wrap xl:text-xl 2xl:text-2xl text-md flex-col xl:flex-row">
                            <h3 className="flex-1 font-bold">Nomor HP</h3>
                            <h3 className="flex-[1.5_1.5_10%] font-normal">085775184434 
                                <span className="text-kuning bg-kuning bg-opacity-25 rounded-full px-2 py-1 ml-2 xl:text-lg 2xl:text-xl text-md ">Terverifikasi</span> 
                                <span className="text-kuning ml-2 xl:text-lg 2xl:text-xl text-md "><a href="/">Ubah</a></span>
                            </h3>
                        </div>
                    </div>
                <div className="flex flex-col justify-center my-16 w-full xl:w-4/12 lg:font-bold sm:font-medium">
                    <button type="submit" className="bg-kuning text-black rounded-full lg:px-8 py-2 items-center">Ubah Kata Sandi</button>
                    <button type="submit" className="bg-kuning text-black rounded-full lg:px-6 py-2 mt-4">Pin SeatUP</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Profil;