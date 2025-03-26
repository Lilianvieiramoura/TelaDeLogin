export default function Form() {
  return (
    <body>
      <div className="bg-black w-screen h-screen flex justify-center items-center">
        <section className="w-1/2 h-[600px] bg-pink-200 rounded-3xl flex text-black">
          <section id="form" className="basis-5/12 flex flex-col items-center">
            <h1 className="font-poppins text-3xl my-12 font-bold">Faça seu login
            </h1>
            <form action="" className="flex flex-col gap-8 font-poppins font-bold">
              <label className="group h-16">

                Email

                <div className="transition-opacity ease-in opacity-0 group-focus-within:opacity-100 h-10 w-full bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-lg blur-md">
                </div>

                <div className="relative -top-10 bg-none focus-within:bg-gradient-to-tr from-[#191c2f] via-[#C850C0] via-46% to-[#FFCC70] p-[1px] rounded-lg">

                  <input type="email" className="h-10 bg-pink-300 rounded-lg p-2 outline-none appearance-none w-full" />
                </div>
              </label>

              <label className="group h-16">
                Senha

                <div className="transition-opacity ease-in opacity-0 group-focus-within:opacity-100 h-10 w-full bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] rounded-lg blur-md">
                </div>

                <div className="relative -top-10 bg-none focus-within:bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] p-[1px] rounded-lg">

                  <input
                    type="password"
                    className="h-10 bg-pink-300 rounded-lg p-2 outline-none appearance-none w-full"
                  />
                </div>
              </label>

              <a
                className="text-right text-sm underline cursor-pointer">Esqueci minha senha
              </a>

              <button
                type="submit"
                className="bg-gradient-to-tr from-[#4158D0] via-[#C850C0] via-46% to-[#FFCC70] text-white font-bold h-10 rounded-lg cursor-pointer"
              >Entrar</button>
              <a className="text-center text-sm underline cursor-pointer">Ainda não tenho uma conta </a>
            </form>
          </section>

          <section
            id="picture"
            class="w-0 lg:w-7/12 bg-[url('./img/bg2.jpg')] bg-cover rounded-r-3xl shadow-[inset_400px_30px_400px_-100px_theme('colors.pink.300')]">
          </section>
        </section>
      </div>
    </body>
  )
}