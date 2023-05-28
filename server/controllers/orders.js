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

export const getOrderById = async (req, res) => {
  const id = req.body.id;

  try {
    const order = await OrderModel.findOne({ id });

    if (!order) {
      return res.json({});
    }

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getOrderByEmail = async (req, res) => {
  const email = req.body.email;
  try {
    const order = await OrderModel.findOne({ email });

    if (!order) {
      return res.json({ message: `Order with ${email} id doesn't exist` });
    }

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getOrderByPhone = async (req, res) => {
  const phone = req.body.phone;
  try {
    const order = await OrderModel.findOne({ phone });

    if (!order) {
      return res.json({ message: `Order with ${phone} phone doesn't exist` });
    }

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
