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
      <header className=" ml-auto border-4 w-auto h-auto flex gap-10">
        
        <nav className="ml-80 p-2 flex gap-4 items-center w-full">
          <img
            className="size-10"
            src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          />
          <div className="">
            <form action="/search" className="">
              {/* Ícono SVG posicionado absolutamente */}
              <button><Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6  text-blue-400" /></button>
              {/* Input con suficiente padding a la izquierda */}
              <input
                type="text"
                name="search"
                className="pl-12 border rounded h-8 w-80 "
                placeholder="Search..."
              />
            </form>
          </div>
          <div className=" ml-80 flex gap-10">
            <button className="">Login</button>
            <button className="">Create account</button>
          </div>
        </nav>
      </header>




    </>
  )
}




