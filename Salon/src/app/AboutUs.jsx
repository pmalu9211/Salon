import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="container flex flex-col items-center gap-10 mx-auto">
      <Image
        src={"/img/about us bg.png"}
        alt="About Us bg"
        height="100"
        width="1920"
        className="absolute left-0 w-screen -z-10 "
      />
      <div className="container flex px-40 py-32">
        <div className="relative flex">
          <div className="bg-body h-[423px] w-[417px] ">
            <Image
              src="https://themeholy.com/html/rasm/demo/assets/img/normal/about_1.jpg"
              alt="pic"
              height="423"
              width="417"
            />
          </div>
          <div className="bg-body h-[360px] w-[275px] z-10 relative top-32 -left-24">
            <Image
              src="https://themeholy.com/html/rasm/demo/assets/img/normal/about_2.jpg"
              alt="pic"
              height="360"
              width="275"
            />
          </div>
          <Image
            src={"/img/about flower.png"}
            alt="About us flower"
            height="1000"
            width="250"
            className="absolute z-10 -bottom-1 -left-28"
          />
        </div>
        <div className="flex flex-col -ml-10 gap-7">
          <div className="">
            <div className="flex gap-2 mb-2">
              <h3 className="text-xl font-bold text-theme-1 font-display">
                About Us
              </h3>
              <Image
                src={"/svgs/arrow right.svg"}
                alt="Arrow Right"
                height="200"
                width="125"
              />
            </div>
            <h1 className="text-5xl font-bold font-display">
              Discover The Ultimate Spa Massage Experience
            </h1>
          </div>
          <p className="text-gray-500">
            Discover a world of tranquility, luxury, and personalized care as
            you embark on a journey of self-care and renewal. Visit us today and
            let us transport you to a realm of beauty and serenity.
          </p>
          <div className="flex gap-5">
            <button className="flex items-center gap-3 px-5 py-5 text-xl font-semibold bg-white grow font-display">
              <Image
                src={"/svgs/flower.svg"}
                alt="flower"
                height="25"
                width="25"
              />
              Personal Program
            </button>
            <button className="flex items-center gap-3 px-5 py-5 text-xl font-semibold bg-white grow font-display">
              <Image
                src={"/svgs/flower.svg"}
                alt="flower"
                height="25"
                width="25"
              />
              Expert Nutritionist
            </button>
          </div>
          <p className="text-gray-500">
            We also offer private rooms for more intimate treatments and
            couples&apos; packages for a romantic escape.
          </p>
          <button className="self-start py-4 font-sans text-white px-7 bg-theme-1 hover:bg-theme-2">
            DISCOVER MORE →
          </button>
        </div>
      </div>
    </section>
  );
}
