import { getProductionsService } from "../services/production.service.js";
console.log("controller loaded");
export const getProductions = async (req, res) => {
  try {
    const data = await getProductionsService(req.query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};