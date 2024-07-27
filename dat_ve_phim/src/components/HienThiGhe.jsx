import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { themVaoMangDanhSachGhe } from "../redux/chairSlice";

const HienThiGhe = () => {
  let tong = 0;
  const { arrGheBanChon, tongTien } = useSelector((state) => state.chairSlice);
  console.log(arrGheBanChon);
  let dispatch = useDispatch();
  return (
    <div className=" hien_thi_ghe  mt-5 text-left  ">
      <h2 className=" text-3xl tracking-wide text-yellow-500 uppercase">
        Danh sách ghế đang đặt
      </h2>
      <div className="option_ghe">
        <div className="option_ghe_content">
          <button className="gheDuocChon my-2"></button> <span>Ghế đã đặt</span>
        </div>
        <div className="option_ghe_content">
          <button className="gheDangChon my-2"></button>{" "}
          <span>Ghế đang chọn</span>
        </div>
        <div className="option_ghe_content">
          <button className="gheChuaDat text-white my-2"></button>{" "}
          <span>Ghế chưa đặt</span>
        </div>
      </div>
      <div className="relative overflow-x-auto border rounded-lg">
        <table className="w-full  text-left rtl:text-right text-white text-xl ">
          <thead className=" uppercase tracking-wide   ">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-s-lg">
                Số ghế
              </th>
              <th scope="col" className="px-6 py-3">
                Giá
              </th>
              <th scope="col" className="px-6 py-3 rounded-e-lg">
                Hủy
              </th>
            </tr>
          </thead>
          {arrGheBanChon.map((item, index) => {
            tong += item.gia;
            return (
              <tbody className="text-yellow-500">
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap "
                  >
                    {item.soGhe}
                  </th>
                  <td className="px-6 py-4">{item.gia}</td>
                  <td className="px-6 py-4 ">
                    <button
                      className="text-red-500"
                      onClick={() => {
                        dispatch(themVaoMangDanhSachGhe(item));
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}

          <tfoot>
            <tr className="  ">
              <th scope="row" className="px-6 py-3 text-base">
                Total
              </th>
              <td className="px-6 py-3 text-yellow-500">{tong}</td>
              <td className="px-6 py-3"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default HienThiGhe;
