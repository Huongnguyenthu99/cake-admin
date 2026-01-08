import { ColumnsType } from "ant-design-vue/es/table";

import { ProductStock } from "@/api/product/model";

export const columns: ColumnsType<ProductStock> = [
  {
    title: "Ngày đặt",
    dataIndex: "ngayDat",
    key: "ngayDat",
    customRender: ({ record }) => {
      if (record.children?.length) {
        return {
          children: `Ngày ${record.ngayDat}`,
        };
      }
      return null;
    },
  },
  {
    title: "Loại bánh",
    dataIndex: "loaiBanh",
    key: "loaiBanh",
  },
  {
    title: "SL đặt",
    dataIndex: "slDat",
    key: "slDat",
    align: "right",
  },
  {
    title: "SL đã giao",
    dataIndex: "slDaGiao",
    key: "slDaGiao",
    align: "right",
  },
  {
    title: "SL cần giao",
    dataIndex: "slCanGiao",
    key: "slCanGiao",
    align: "right",
  },
  {
    title: "SL đã làm",
    dataIndex: "slDaLam",
    key: "slDaLam",
    align: "right",
  },
  {
    title: "Tồn kho",
    dataIndex: "tonKho",
    key: "tonKho",
    align: "right",
  },
];
