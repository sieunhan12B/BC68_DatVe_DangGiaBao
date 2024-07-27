import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { themVaoMangDanhSachGhe } from "../redux/chairSlice";
const DatVe = () => {
  const { arrGhe, arrGheBanChon } = useSelector((state) => state.chairSlice);

  let dispatch = useDispatch();
  return (
    <div className="dat_ve text-center  col-span-2 mt-5">
      <h1 className="tracking-wide  uppercase text-3xl   text-yellow-500 ">
        Đặt vé xem phim Đặng Gia Bảo
      </h1>
      <div className="dat_ve_content">
        <h3 className="text-white mt-3">Màn hình</h3>
        <div className="screen mx-auto"></div>
        <div className="list_ghe">
          {arrGhe.map((item, index) => {
            return (
              <div className="flex justify-center ">
                <p className="text-yellow-300 lin leading-loose text-xl mr-10 ">
                  {item.hang}{" "}
                </p>
                {item.danhSachGhe.map((ghe, index) => {
                  let disabled = false;
                  let classNameGheDaDat = "";
                  let classGheDangDat = "";
                  let indexGheDangDat = arrGheBanChon.findIndex(
                    (value, index) => value.soGhe === ghe.soGhe
                  );
                  if (indexGheDangDat != -1) {
                    classGheDangDat = "gheDangChon";
                  }
                  if (ghe.daDat) {
                    classNameGheDaDat = "gheDuocChon";
                    disabled = true;
                  }
                  if (item.hang == "") {
                    return <span className="rowNumber">{index + 1}</span>;
                  }
                  return (
                    <button
                      onClick={() => {
                        dispatch(themVaoMangDanhSachGhe(ghe));
                      }}
                      disabled={disabled}
                      className={`gheChuaDat ${classNameGheDaDat}       ${classGheDangDat} m-2 text-xs`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DatVe;
