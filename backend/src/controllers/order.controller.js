import { createOrderService, getListOrderService } from "../services/order.service.js";

export const createOrder = async (req, res) => {
  try {
    const data = await createOrderService(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getListOrder = async (req, res) => {
  try {
    const data = await getListOrderService(req.params);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getOrderById = async (req, res) => {
   try {
    const data = await getOrderByIdService(req.params);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


