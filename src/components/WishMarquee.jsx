import Marquee from "react-fast-marquee";
import PropTypes from 'prop-types';

const WishMarquee = ({ wishList }) => {
  return (
    <div className="wish-marquee">
      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover
        className="wish-marquee-list"
      >
        {wishList.map(({ icon, text }, index) => (
          <div key={index} className="wish-slide">
            <span className="wish-marquee-material material-symbols-outlined">
              {icon}
            </span>
            {text}
          </div>
        ))}
      </Marquee>
    </div>
  );
};
WishMarquee.propTypes = {
  wishList: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default WishMarquee;
