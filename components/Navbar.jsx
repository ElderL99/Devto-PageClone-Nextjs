import { Toaster } from "sonner";
import Icon from "@/public/Icon";



export default function Navbar() {
  const links = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/Products",
      text: "Products",
    },
  ];



  return (
    <>
      <header className="  w-full bg-white shadow-md py-2 px-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto  ">
          <div id="img" className="flex items-center  ">
            <button href="/">
              <img
                className="h-10"
                src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt="DEV logo"
              />
            </button>
          </div>
          <div id="search" className=" flex flex-grow mx-4 border rounded-xl   ">
            <form action="" className="w-3/4 flex items-center bg-white   ">
              <button className="p-2">
                <Icon />
              </button>
              <input
                className="bg-white w-full px-4 py-2 rounded-lg focus:outline-none  hover: border border-blue-500"
                type="text"
                id="barra-de-busqueda"
                placeholder="Search..."
              />
            </form>
          </div>
          <div id="buttons" className="flex gap-4">
            <button className=" text-gray-600 hover:text-blue-500 w-auto ">Login</button>
            <button className="   text-blue-800 px-4 py-2 rounded-md hover: border border-blue-800">
              Create account
            </button>
          </div>
        </div>
      </header>

    </>
  )
}




