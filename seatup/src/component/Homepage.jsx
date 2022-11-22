import homepageBtnBackground1 from "../img/homepage_btn1.png"
import homepageBtnBackground2 from "../img/homepage_btn2.png"

const HomepageButton = ({ image, label }) => {
  return (
    <div className="mt-5 rounded-3xl border-4 border-[#A7332F]">
      <img src={image} className="w-full"></img>
      <div className="py-2 m-3 rounded-3xl bg-seatup-red text-white text-2xl">
        {label}
      </div>
    </div>
  )
}

const Homepage = () => {
  return (
    <div className="bg-[url(./img/homepage_background.png)] bg-cover h-full -mt-3">
      <div className="mt-3 p-5 flex flex-wrap">
        <div className="flex-1">
          <div className="text-center text-2xl font-bold">
            Halo, mari kita lihat menu kita hari ini!
            <div className="py-7 mt-5 rounded-2xl bg-seatup-red text-white text-5xl">
              Menu Hari Ini
            </div>
            <HomepageButton label="Promo dan Penjualan Terlaris" image={homepageBtnBackground1}></HomepageButton>
            <HomepageButton label="Cek Ketersediaan Kursi" image={homepageBtnBackground2}></HomepageButton>
          </div>
        </div>
        <div className="flex-grow"></div>
      </div>
    </div>
  )
}

export default Homepage;