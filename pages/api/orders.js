import { getAllOrders, writeAllOrders } from '../../lib/ordersDataBaseHelpers';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  if(req.method === "POST") {
    const { products, orderInfo } = req.body;
    const allOrders = await getAllOrders();
    const newOrderId = uuidv4();
    const newOrders = [...allOrders, { orderId:newOrderId, orderInfo, products }];
    try {
      await writeAllOrders(newOrders);
      res.status(200).json({ message: 'Successfully', orderId: newOrderId })
    } catch (err) {
      res.status(400).json({ message: 'Update orders failed' })
    }
  }
  if(req.method === "GET") {
    console.log('Request = ', req);
    const allOrders = await getAllOrders();
    res.status(200).json(allOrders)
  }
}
