import Marquee from "react-fast-marquee";

const MarqueePhoto = ({ images }) => {
  return (
    <Marquee gradient={false} speed={100} pauseOnHover>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`sponsor-${index}`}
          style={{ height: "150px", marginRight: "20px", objectFit: "cover" }}
        />
      ))}
    </Marquee>
  );
};

export default MarqueePhoto;
