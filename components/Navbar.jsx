
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
        <div className="border-4 w-auto h-13" >
            <nav className="p-2 flex ">
                <img className=" size-10" src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" />
                <input className="border-4 border-gray-300" type="text" name="" id="emai" />
            </nav>
        </div>
        </>
    )
}