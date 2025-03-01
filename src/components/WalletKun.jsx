import { useNavigate } from "react-router-dom";


const FloatingButton = ({  }) => {
  const navigate = useNavigate(); 
    const buttonStyle = {
      position: "fixed",
      top: "30%",
      right: "20px",
      width: "50px",
      height: "50px",
      // backgroundColor: "rgba(0, 0, 0, 0.7)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
      zIndex: 1000,
    };
  
    return (
      <div style={buttonStyle} onClick={() => navigate("/donate")}>
        <img src="common/walletkun.png" alt="Floating Icon" style={{ width: "30px", height: "30px" }} />
      </div>
    );
  };
  
  export default FloatingButton;
  