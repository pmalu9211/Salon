import Image from "next/image";

export default function FunFact() {
  return (
    <section className="flex flex-col items-center gap-20 ">
      <div className="container flex items-center justify-between px-44">
        <div className="flex gap-3">
          <Image
            src={`/svgs/experience.svg`}
            alt="Fact Icon 1"
            height="25"
            width="50"
            className=""
          />
          <div className="">
            <h1 className="text-6xl font-bold font-display">26+</h1>
            <p className="text-gray-500">Years of Experience</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Image
            src={`/svgs/products.svg`}
            alt="Fact Icon 1"
            height="25"
            width="50"
            className=""
          />
          <div className="">
            <h1 className="text-6xl font-bold font-display">100%</h1>
            <p className="text-gray-500">Natural Products</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Image
            src={`/svgs/clients.svg`}
            alt="Fact Icon 1"
            height="25"
            width="50"
            className=""
          />
          <div className="">
            <h1 className="text-6xl font-bold font-display">56k+</h1>
            <p className="text-gray-500">Satisfied Clients</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Image
            src={`/svgs/experience.svg`}
            alt="Fact Icon 1"
            height="25"
            width="50"
            className=""
          />
          <div className="">
            <h1 className="text-6xl font-bold font-display">36+</h1>
            <p className="text-gray-500">Specialists Team</p>
          </div>
        </div>
      </div>
      <Image
        src={"/svgs/divider with logo.svg"}
        alt="divider with logo"
        height="25"
        width="1200"
        className=""
      />
    </section>
  );
}
