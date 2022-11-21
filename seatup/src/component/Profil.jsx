const Profil = ({text, backdrop}) => {
    return (
        <div className="profil-container flex flex-row justify-evenly pt-24 pl-16">
            <div className="menu-profil-container flex flex-col">
                <h1 className="text-black text-2xl font-extrabold">Hello, Ronggo!</h1>
                <p className="text-gray-500 w-7/12">Bergabung Sejak, 21 Oktober 2022</p>
                <div className="menu-profil flex flex-col pt-4 text-black">
                    <ul className="bg-kuning bg-opacity-25 p-4 divide-y divide-kuning border-opacity-50 rounded-md">
                        <li className="pt-1"><a href="/">Profil</a></li>
                        <li className="pt-3"><a href="/">Daftar Pesanan</a></li>
                        <li className="pt-3"><a href="/">Riwayat</a></li>
                        <li className="pt-3"><a href="/">Saldo</a></li>
                        <li className="pt-3"><a href="/">Pengaturan</a></li>
                    </ul>
                </div>
            </div>
            <div className="personal-data bg-merah text-abu flex flex-row mx-6 mb-8 rounded-lg justify-around sm:flex-wrap lg:flex-nowrap w-screen">
                <div className="foto flex flex-col pt-16 pl-8">
                    <div className="shape box-content h-64 w-64 lg:px-8 lg:py-8 mb-8 bg-abu md:px-2"></div>
                    <button type="submit" className="bg-kuning font-2xl font-extrabold px-20 py-4 text-black rounded-full">Unggah Foto</button>
                    <p className="text-abu opacity-75 font-bold my-8 text-sm w-72">
                        Ukuran file: maksimum 10.000.000 bytes (10 Megabytes). 
                        Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</p>
                </div>
                <div className="flex flex-col ml-8 w-7/12 mb-8">
                    <table className="table-auto w-full">
                        <h1 className="text-abu text-2xl font-extrabold pt-16">Biodata Diri</h1>
                        <tbody className="text-sm">
                            <tr>
                                <td class="pr-2 whitespace-nowrap">
                                    <div class="flex flex-start">
                                        <div class="font-medium text-gray-800">Nama</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">Ronggo Tsani Musyafa
                                    <span><a href="/"  className="text-kuning font-medium px-4">Ubah</a></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="pr-2 whitespace-nowrap">
                                    <div class="flex flex-start">
                                        <div class="font-medium text-gray-800">Tanggal Lahir</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">18 November 2003</div>
                                </td>
                            </tr>
                            <tr>
                                <td class="pr-2 whitespace-nowrap">
                                    <div class="flex flex-start">
                                        <div class="font-medium text-gray-800">Jenis Kelamin</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">Pria
                                    <span><a href="/"  className="text-kuning font-medium px-4">Ubah</a></span>
                                    </div>
                                </td>
                            </tr>    
                        <h1 className="text-abu text-2xl font-extrabold pt-4">Kontak</h1>
                            <tr className="space-x-3">
                                <td class="pr-2 whitespace-nowrap">
                                    <div class="flex flex-start">
                                        <div class="font-medium text-gray-800">Email</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">musyafart@gmail.com
                                            <span className="bg-kuning bg-opacity-25 px-3 py-1 rounded-full font-bold ml-2 text-kuning">Terverifikasi</span>
                                            <span><a href="/"  className="text-kuning font-medium px-4">Ubah</a></span>
                                        </div>
                                        
                                </td>
                            </tr>
                            <tr>
                                <td class="pr-2 whitespace-nowrap">
                                    <div class="flex flex-start">
                                        <div class="font-medium text-gray-800">Nomor HP</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left flex flex-row items-center sm:flex-wrap">
                                            <h1 className="items-center">+6285775184434</h1>
                                            <span className="bg-kuning bg-opacity-25 px-3 py-1 rounded-full font-bold ml-2 text-kuning">Terverifikasi</span>
                                            <span><a href="/"  className="text-kuning font-medium px-4">Ubah</a></span>
                                        </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                <div className="flex flex-col justify-start my-24 lg:w-2/6 sm:w-auto font-bold">
                    <button type="submit" className="bg-kuning text-black rounded-full px-8 py-2">Ubah Kata Sandi</button>
                    <button type="submit" className="bg-kuning text-black rounded-full px-6 py-2 mt-4">Pin SeatUP</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Profil;