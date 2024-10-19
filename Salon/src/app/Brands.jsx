import Image from "next/image";

export default function Brands() {
  return (
    <section className="flex justify-between px-40 py-24 bg-smoke-3">
      <Image
        src={"/svgs/brand logo 1.svg"}
        alt="Brand Logo 1"
        width="105"
        height="100"
      />
      <Image
        src={"/svgs/brand logo 2.svg"}
        alt="Brand Logo 2"
        width="105"
        height="100"
      />
      <Image
        src={"/svgs/brand logo 3.svg"}
        alt="Brand Logo 3"
        width="105"
        height="100"
      />
      <Image
        src={"/svgs/brand logo 4.svg"}
        alt="Brand Logo 4"
        width="105"
        height="100"
      />
      <Image
        src={"/svgs/brand logo 5.svg"}
        alt="Brand Logo 5"
        width="105"
        height="100"
      />
      <Image
        src={"/svgs/brand logo 6.svg"}
        alt="Brand Logo 6"
        width="105"
        height="100"
      />
      <Image
        src={"/svgs/brand logo 7.svg"}
        alt="Brand Logo 7"
        width="105"
        height="100"
      />
    </section>
  );
}
