import Image from "next/image";

export default function Gallery() {
  return (
    <section className="container flex flex-col gap-10 px-40 mx-auto">
      <Image
        src={"/img/gallery bg.png"}
        alt="About Us bg"
        height="100"
        width="1920"
        className="absolute left-0 w-screen -z-10 "
      />
      <div className="">
        <div className="flex gap-5">
          <h3 className="text-xl font-bold text-theme-1 font-display">
            Our Gallery
          </h3>
          <Image
            src={"/svgs/arrow right.svg"}
            alt="Arrow Right"
            height="200"
            width="125"
          />
        </div>
        <div className="flex justify-between">
          <h1 className="text-5xl font-bold font-display">
            Latest Projects Gallery
          </h1>
          <div className="flex gap-2">
            <button className="px-5 text-white border-[1px] bg-theme-1 border-theme-1">
              All
            </button>
            <button className="px-5 border-[1px] text-theme-1 hover:text-white hover:bg-theme-1 border-theme-1">
              Massage
            </button>
            <button className="px-5 border-[1px] text-theme-1 hover:text-white hover:bg-theme-1 border-theme-1">
              Waxing
            </button>
            <button className="px-5 border-[1px] text-theme-1 hover:text-white hover:bg-theme-1 border-theme-1">
              Relaxing
            </button>
            <button className="px-5 border-[1px] text-theme-1 hover:text-white hover:bg-theme-1 border-theme-1">
              Skin Care
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <Image
          src="https://themeholy.com/html/rasm/demo/assets/img/gallery/gallery_1_1.jpg"
          alt="pic"
          height="755"
          width="491"
          className="grow hover:brightness-75"
        />
        <div className="flex flex-col gap-5">
          <Image
            src="https://themeholy.com/html/rasm/demo/assets/img/gallery/gallery_1_2.jpg"
            alt="pic"
            height="400"
            width="699"
            className="grow hover:brightness-75"
          />
          <div className="flex gap-5">
            <Image
              src="https://themeholy.com/html/rasm/demo/assets/img/gallery/gallery_1_3.jpg"
              alt="pic"
              height="325"
              width="387"
              className="grow hover:brightness-75"
            />
            <Image
              src="https://themeholy.com/html/rasm/demo/assets/img/gallery/gallery_1_4.jpg"
              alt="pic"
              height="325"
              width="282"
              className="grow hover:brightness-75"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
