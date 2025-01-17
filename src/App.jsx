import { CgProfile } from "react-icons/cg";
import Card from "./ui/Card";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { IoMdPlayCircle } from "react-icons/io";
import { BsLayoutTextWindowReverse } from "react-icons/bs";

const cardDetails = [
  {
    icon: <IoCloudDownloadOutline />,
    text: "FREE STORAGE",
  },
  {
    icon: <CgProfile />,
    text: "USER MODE",
  },
  {
    icon: <IoMdPlayCircle />,
    text: "REPLY READY",
  },
  {
    icon: <BsLayoutTextWindowReverse />,
    text: "EASY LAYOUT",
  },
];

function App() {
  return (
    <>
      <div className="relative mb-36 rounded-b-[200px] bg-blue-500 px-40 pb-60 pt-12 text-white">
        <nav className="flex items-center justify-between text-white">
          <div className="font-bold">
            <img src="../public/logo.png" />
          </div>

          <div className="flex items-center gap-10 text-sm font-light">
            <p className="rounded-3xl bg-blue-400 px-6 py-2">Home</p>
            <p>Our Shop</p>
            <p>Product Details</p>
            <p>Contact Us </p>
            <p className="rounded-3xl bg-red-400 px-6 py-2">SIGN IN</p>
          </div>
        </nav>

        <section className="mt-36">
          <div className="grid-cols-mycustom grid gap-40">
            <div className="mt-12">
              <p>WELCOME TO LUGX</p>
              <p className="mt-6 text-5xl font-extrabold">
                BEST GAMING SITE EVER
              </p>
              <p className="mt-12 text-sm font-light">
                LUGX Gaming is free Bootstrap 5 HTML CSS website template for
                your gaming websites. You can download and use this layout for
                commercial purposes. Please tell your friends about TemplateMo.
              </p>
              <div className="relative mt-12">
                <input
                  placeholder="Type Something"
                  className="h-11 w-[400px] rounded-3xl bg-white px-6 py-6 font-light placeholder:text-gray-400"
                />
                <button className="absolute right-48 h-12 rounded-3xl bg-red-400 px-6">
                  SIGN IN
                </button>
              </div>
            </div>
            <div className="relative">
              <img src="../public/banner-image.jpg" className="rounded-3xl" />

              <p className="absolute bottom-0 left-0 inline-block -translate-x-1/2 translate-y-1/2 rounded-full bg-red-400 px-2 py-6 text-2xl font-bold">
                -40%
              </p>
              <p className="absolute right-4 top-4 inline-block rounded-full bg-blue-500 px-4 py-1 text-2xl font-bold">
                $22
              </p>
            </div>
          </div>
        </section>
        <div className="absolute bottom-0 z-50 translate-y-1/2 space-x-6">
          {cardDetails.map((el) => (
            <Card icon={el.icon} text={el.text} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
