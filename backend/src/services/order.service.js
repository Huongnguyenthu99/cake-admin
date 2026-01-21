import knexInstance from "../db.js";

export const createOrderService = async (query) => {
  const { ten, sdt, diaChi, ngayLay, ghiChu, orderItems } = query;

  return await knexInstance.transaction(async (trx) => {
    // 1. Insert Order
    const [order] = await trx("Order")
      .insert({
        ten,
        sdt,
        ngay_lay: ngayLay,
        dia_chi: diaChi,
        ghi_chu: ghiChu,
        trang_thai: 1,
      })
      .returning("id");

    const orderId = order.id;
    // 2. Insert OrderDetail
    const orderDetails = orderItems.map((item) => ({
      order_id: orderId,
      product_type_id: item.productTypeId,
      so_luong: item.soLuong,
      don_gia: item.donGia,
      ghi_chu: item.ghiChu,
    }));

    await trx("OrderDetail").insert(orderDetails);

    return { orderId };
  });
};

export const getListOrderService = async (query) => {
  const qb = await knexInstance({ o: "Order" })
    .leftJoin({ od: "OrderDetail" }, "o.id", "od.order_id")
    .select({
      id: "o.id",
      ten: "o.ten",
      sdt: "o.sdt",
      trangThai: "o.trang_thai",
      diaChi: "o.dia_chi",
      ghiChu: "o.ghi_chu",
      ngayLay: "o.ngay_lay",
    })
    .sum({ tongSoLuong: "od.so_luong" })
    .groupBy(
      "o.id",
      "o.ten",
      "o.sdt",
      "o.trang_thai",
      "o.dia_chi",
      "o.ghi_chu",
      "o.ngay_lay"
    );
  return qb;
};

export const getOrderByIdService = async (query) => {
  return await knexInstance({ o: "Order" }).select({
    id: "o.id",
    ten: "o.ten",
    sdt: "o.sdt",
    trangThai: "o.trang_thai",
    diaChi: "o.dia_chi",
    ghiChu: "o.ghi_chu",
    ngayLay: "o.ngay_lay",
  });

  // const orderDetails = knexInstance({ od: "OrderDetail" })
  //   .leftJoin({ pt: "ProductType" }, "od.product_type_id", "pt.id")
  //   .select({
  //     id: "od.id",
  //     soLuong: "od.so_luong",
  //     ghiChu: "od.ghi_chu",
  //     productTypeId: "product_type_id",
  //     loai: ""
  //   });
};
