import Marquee from "react-fast-marquee";
import PropTypes from 'prop-types';

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
MarqueePhoto.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MarqueePhoto;
