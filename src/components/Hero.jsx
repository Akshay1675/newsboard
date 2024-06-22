import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-20">
        <div className="font-bold text-2xl md:text-6xl text-center border-b-8 border-solid border-b-[#f52828]">
        <Link to={"/"}> <h1 className="mb-6 md:hidden font-extrabold text-2xl cursor-pointer">NEWSBOARD</h1> </Link>
            <h1>GET INFORMED</h1>
            <h1 className="pb-2">GET INSPIRED</h1>
        </div>
        <div className="mt-10 mb-2">
        <button className="py-4 px-8 bg-[#f52828] font-semibold text-white rounded-lg ">Sign up</button>
        </div>
    </div>
  )
}

export default Hero