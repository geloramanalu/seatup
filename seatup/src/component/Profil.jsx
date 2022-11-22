const Profil = ({text, backdrop}) => {
    return (
        <div className="profil-container flex flex-col lg:flex-row justify-center lg:justify-evenly pt-4 lg:pt-24 lg:pl-16 flex-wrap lg:flex-nowrap">
            <div className="menu-profil-container flex flex-col items-center lg:items-start lg:items-start ">
                <h1 className="text-black text-2xl font-extrabold">Hello, Ronggo!</h1>
                <p className="text-gray-500 w-8/12 text-center lg:text-left">Bergabung Sejak, 21 Oktober 2022</p>
                <div className="menu-profil flex flex-col pt-4 text-black">
                    <ul className="bg-kuning bg-opacity-25 p-4 divide-y text-center lg:text-left divide-kuning border-opacity-50 rounded-md lg:w-72 w-screen">
                        <li className="pt-1"><a href="/">Profil</a></li>
                        <li className="pt-3"><a href="/">Daftar Pesanan</a></li>
                        <li className="pt-3"><a href="/">Riwayat</a></li>
                        <li className="pt-3"><a href="/">Saldo</a></li>
                        <li className="pt-3"><a href="/">Pengaturan</a></li>
                    </ul>
                </div>
            </div>
            <div className="personal-data bg-merah text-abu flex flex-col lg:flex-row lg:mx-6 rounded-lg lg:justify-around sm:flex-wrap lg:flex-nowrap w-full justfiy-center">
                <div className="foto flex flex-col pt-16 lg:pl-8 justify-center items-center">
                    <div className="shape box-content h-64 w-64 lg:px-8 lg:py-8 mb-8 bg-abu text-center"></div>
                    <button type="submit" className="bg-kuning font-2xl font-extrabold px-20 py-4 text-black rounded-full">Unggah Foto</button>
                    <p className="text-abu opacity-75 font-bold my-8 text-sm w-72">
                        Ukuran file: maksimum 10.000.000 bytes (10 Megabytes). 
                        Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</p>
                </div>
                <div className="flex flex-col mx-8 w-auto lg:w-7/12 mb-8 flex-wrap lg:flex-nowrap">
                    <div className="biodata lg:pt-16 pt-4 flex flex-col text-md lg:text-lg">
                        <h1 className="text-abu font-extrabold text-xl lg:text-2xl">Biodata Diri</h1>
                        <div className="flex justify-between pt-3 pb-1 flex-col lg:flex-row">
                            <h3 className="flex-1 font-medium">Nama</h3>
                            <h3 className="flex-1 ">Ronggo Tsani Musyafa <span className="text-kuning">Ubah</span></h3>
                        </div>
                        <div className="flex justify-between py-1 flex-col lg:flex-row">
                            <h3 className="flex-1 font-medium">Tanggal Lahir</h3>
                            <h3 className="flex-1">18 November 2003</h3>
                        </div>
                        <div className="flex justify-between py-1 flex-col lg:flex-row">
                            <h3 className="flex-1 font-medium">Jenis Kelamin</h3>
                            <h3 className="flex-1">Pria <span className="text-kuning">Ubah</span></h3>
                        </div>
                    </div>
                    <div className="kontak flex lg:pt-8 pt-4 flex-col text-md lg:text-lg">
                        <h1 className="text-abu font-extrabold text-xl lg:text-2xl">Kontak</h1>
                        <div className="biodata flex justify-between pt-3 pb-1 flex-wrap flex-col lg:flex-row">
                            <h3 className="flex-1 font-medium">Email</h3>
                            <h3 className="flex-1">musyafart@gmail.com 
                                <span className="text-kuning bg-kuning bg-opacity-25 rounded-full px-4 py-1 ml-2">Terverifikasi</span> 
                                <span className="text-kuning ml-2">Ubah</span>
                            </h3>
                        </div>
                        <div className="biodata flex justify-between py-1 flex-wrap flex-col lg:flex-row">
                            <h3 className="flex-1 font-medium">Nomor HP</h3>
                            <h3 className="flex-1">085775184434 
                                <span className="text-kuning bg-kuning bg-opacity-25 rounded-full px-4 py-1 ml-2">Terverifikasi</span> 
                                <span className="text-kuning ml-2">Ubah</span>
                            </h3>
                        </div>
                    </div>
                <div className="flex flex-col justify-start my-20 lg:w-4/12 font-bold">
                    <button type="submit" className="bg-kuning text-black rounded-full px-8 py-2 items-center">Ubah Kata Sandi</button>
                    <button type="submit" className="bg-kuning text-black rounded-full px-6 py-2 mt-4">Pin SeatUP</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Profil;