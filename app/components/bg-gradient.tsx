const BgGradients = () => {
  return (
    <div
      style={{
        // backgroundImage: `url(/images/noise.gif)`,
        // backgroundPosition: "center center",
        // backgroundRepeat: "repeat",
        pointerEvents: "none",
        background:
          "linear-gradient(-45deg, #fccb05, #f08d49, #ec4899, #6366f1)",
        backgroundSize: "400% 400%",
        animation: "moveGradient 15s ease infinite",
        zIndex: 200,
      }}
      className="w-full h-full  fixed top-0  opacity-[0.1]  "
    ></div>
  );
};

export default BgGradients;
