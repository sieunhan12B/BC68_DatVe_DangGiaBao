import React from "react";
import DatVe from "./DatVe";
import "./rapPhim.scss";
import HienThiGhe from "./HienThiGhe";

const RapPhim = () => {
  return (
    <div className="rap_phim min-h-screen grid grid-cols-3 gap-4 ">
      <DatVe />
      <HienThiGhe />
    </div>
  );
};

export default RapPhim;
