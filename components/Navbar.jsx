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
      <header className=" border border-gray-300 w-auto ">

        <div className=" flex justify-center items-center ">

          <div className="" id="img">
            <button href="/">
            <img className="h-10" src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"  />
            </button>
            

          </div>

          <div className=" " id="search">
            <form action="">
              <button>
                <Icon />
                </button>
              <input className="bg-gray-400" type="text" name="" id="barra de busqueda" />
            </form>
          </div>
          <div className=" flex gap-8 " id="buttons">
            
              <button>Login</button>
              <button>Create account</button>
            
          </div>























        </div>

      </header>
    </>
  )
}




