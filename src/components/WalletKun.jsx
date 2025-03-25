import { useNavigate } from "react-router-dom";
import Magnet from "./Magnet/Magnet";
import { useState } from "react";

const FloatingButton = () => {
  const navigate = useNavigate();
  const style = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    boxShadow: "0px 16px 24px rgba(0,0,0,0.1)",
  };
  const buttonStyle = {
    position: "fixed",
    top: "30%",
    right: "20px",
    cursor: "pointer",

    zIndex: 1000,
  };

  const tooltipStyle = {
    position: "absolute",
    top: "-40px",
    right: "50%",
    transform: "translateX(50%)",
    backgroundColor: "rgba(255, 204, 36, 0.82)",
    color: "white",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    boxShadow: "0px 4px 8px rgba(255, 204, 36, 0.32)",
    opacity: 0,
    transition: "opacity 0.3s",
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={buttonStyle} onClick={() => navigate("/donate")}>
      <Magnet>
        <div
          style={style}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && (
            <div style={{ ...tooltipStyle, opacity: 1 }}>抖內享好康!</div>
          )}

          <img
            src="common/walletkun.png"
            alt="Floating Icon"
            style={{ width: "60px", height: "60px" }}
          />
        </div>
      </Magnet>
    </div>
  );
};

export default FloatingButton;
