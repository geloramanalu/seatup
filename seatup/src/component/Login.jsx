import email from "../img/login_em.png"
import password from "../img/login_password.png"
import passOn from "../img/login_pass.svg"
import passOff from "../img/login_pass_no.svg"
import { useState } from 'react'

const Login = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className="bg-[url(./img/login_bg.png)] bg-cover h-screen -mt-3">
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <div className="flex-col  gap-y-8 box-content rounded-xl px-20 py-10 flex justify-center items-center bg-brokenwhite drop-shadow-lg">
          <h1 className="text-black font-extrabold text-3xl ">Selamat Datang Kembali! </h1>
          <h1>Masuk untuk melanjutkan pesanan.</h1>
          <div>
            <form action="#" className="w-full">
              <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <img src={email}></img>
                </span>
                <input type="email" name="email" id="email" className="rounded-full  bg-broken2white text-gray-900 h-12 w-full pl-10 pr-36 p-2.5 focus:outline-none " placeholder="Email" required=""></input>
              </label>
            </form>
          </div>
          <div>
            <form action="#" className="w-full">
              <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <img src={password}></img>
                </span>
                <input type={(open === false) ? 'password' : 'text'} name="password" id="password" className="rounded-full px-4 py-2 bg-broken2white text-gray-900 h-12 w-full pl-10 pr-36 p-2.5 focus:outline-none " placeholder="Kata Sandi" required=""></input>
                <div className="absolute inset-y-0 right-4  flex items-center text-sm leading-5">
                  <div>
                    {
                      (open === false) ? <img src={passOff} onClick={toggle} /> :
                        <img src={passOn} onClick={toggle} />
                    }
                  </div>
                </div>
              </label>
            </form>
          </div>
          <div className="flex justify-between w-full" >
            <div class="flex items-center ">
              <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"></input>
              <label for="default-checkbox" class="ml-2 font-medium text-gray-900">Ingat Saya</label>
            </div>
            <a className="font-bold text-merah" href="#"> Lupa Kata Sandi?</a>
          </div>
          <div class="relative flex  items-center">
            <div class="flex-grow border-b-4 border-gray-200"></div>
            <span class="flex-shrink mx-4 ">atau masuk dengan</span>
            <div class="flex-grow border-b04 border-gray-200"></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login