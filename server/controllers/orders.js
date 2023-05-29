import OrderModel from "../models/Order.js";

export const createOrder = async (req, res) => {
  const order = req.body;

  const newOrder = new OrderModel({
    ...order,
    createdAt: new Date().toISOString(),
  });

  try {
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    await OrderModel.findByIdAndRemove(id);
    res.json({ message: "order deleted" });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updateProductAmount = async (req, res) => {
  const { id } = req.params;

  const { name, newAmount } = req.body;

  try {
    const order = await OrderModel.findById(id);

    const index = order.orderedItems.findIndex(
      (item) => item.productName === name
    );

    order.orderedItems[index].productQuantity = newAmount;

    const updatedOrder = await OrderModel.findByIdAndUpdate(id, order, {
      new: true,
    });

    res.json({ message: "amount updated", updatedOrder });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getOrderByKey = async (req, res) => {
  const searchWord = req.body.searchWord;

  try {
    const orderId = await OrderModel.findOne({ id: searchWord });

    if (orderId) {
      return res.status(201).json(orderId);
    }

    const orderEmail = await OrderModel.findOne({ email: searchWord });

    if (orderEmail) {
      return res.status(201).json(orderEmail);
    }

    const orderPhone = await OrderModel.findOne({ phone: Number(searchWord) });

    if (orderPhone) {
      return res.status(201).json(orderPhone);
    }
  } catch (err) {
    res.status(500).json({ message: `No order found by ${searchWord}` });
  }
};
