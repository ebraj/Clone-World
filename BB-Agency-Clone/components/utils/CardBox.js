import Image from "next/image";

function CardBox({ details }) {
  const { imgSrc, alt, content, height, width } = details;
  return (
    <div className="space-y-16">
      {/* Logo */}
      <div className="w-4/12">
        <Image
          src={imgSrc}
          layout="responsive"
          alt={alt}
          width={width}
          height={height}
        />
      </div>

      {/* description */}
      <p className="text-xl">{content}</p>
    </div>
  );
}

export default CardBox;
