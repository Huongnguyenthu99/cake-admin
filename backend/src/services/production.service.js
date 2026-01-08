import knexInstance from "../db.js";

export const getProductionsService = async (query) => {
  const {
    status,
    categoryId,
    page = 1,
    limit = 10,
  } = query;

  const qb = knexInstance("Production")
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