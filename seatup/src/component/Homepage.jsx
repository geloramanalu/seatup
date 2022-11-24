import homepageBtnBackground1 from "../img/homepage_btn1.png"
import homepageBtnBackground2 from "../img/homepage_btn2.png"

const HomepageButton = ({ image, label }) => {
  return (
    <button className="mt-10 rounded-3xl border-4 border-[#A7332F] w-full">
      <img src={image} className="w-full"></img>
      <div className="py-2 m-3 rounded-3xl bg-merah text-white text-2xl">
        {label}
      </div>
    </button>
  )
}

const Homepage = () => {
  return (
    <div className="bg-[url(./img/homepage_background.png)] bg-cover h-full -mt-3">
      <div className="mt-3 p-5 w-full lg:w-1/2">
        <div className="text-center text-2xl font-bold">
          Halo, mari kita lihat menu kita hari ini!
          <button className="py-7 mt-5 rounded-2xl bg-merah text-white text-5xl w-full">
            Menu Hari Ini
          </button>
          <HomepageButton label="Promo dan Penjualan Terlaris" image={homepageBtnBackground1}></HomepageButton>
          <HomepageButton label="Cek Ketersediaan Kursi" image={homepageBtnBackground2}></HomepageButton>
        </div>
      </div>
    </div>
  )
}

export default Homepage;