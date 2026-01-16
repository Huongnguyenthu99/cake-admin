import { getProductionsService, getLoaiBanh } from "../services/production.service.js";

export const getProductions = async (req, res) => {
  try {
    const data = await getProductionsService(req.query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getListLoaiBanh = async (_req, res) => {
  try {
    const data = await getLoaiBanh();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
