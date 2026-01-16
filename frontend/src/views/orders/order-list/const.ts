import { Order } from "@/api/order/model";
import { ColumnsType } from "ant-design-vue/es/table";

export const columns: ColumnsType<Order> = [
  {
    title: "Ngày lấy hàng",
    dataIndex: "ngayLay",
    key: "ngayLay",
  },
  {
    title: "Họ tên",
    dataIndex: "ten",
    key: "ten",
  },
  {
    title: "SĐT",
    dataIndex: "sdt",
    key: "sdt",
  },
  {
    title: "Địa chỉ",
    dataIndex: "diaChi",
    key: "diaChi",
  },
  {
    title: "Ghi chú",
    dataIndex: "ghiChu",
    key: "ghiChu",
  },
  {
    title: "Trạng thái",
    dataIndex: "trangThai",
    key: "trangThai",
  },
  {
    title: "Số lượng",
    dataIndex: "tongSoLuong",
    key: "soLuong",
    align: "right",
  },
  {
    title: "Thao tác",
    dataIndex: "action",
    key: "action",
  },
];
