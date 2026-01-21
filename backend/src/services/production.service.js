import knexInstance from "../db.js";

export const getProductionsService = async (query) => {
  const { status, categoryId, page = 1, limit = 10 } = query;

  const qb = await knexInstance("Production")
    .select({
      id: "id",
      createdAt: "created_at",
    })
    .modify((q) => {
      if (status) q.where("status", status);
      if (categoryId) q.where("category_id", categoryId);
    })
    .limit(limit)
    .offset((page - 1) * limit);

  return qb;
};

export const getLoaiBanh = async () => {
  return await knexInstance("ProductType")
    .select({
      id: "id",
      loai: "loai",
      donGia: "don_gia",
    })
    .modify((q) => q.where("trang_thai", 1));
};
