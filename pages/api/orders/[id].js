import { getAllOrders } from '../../../lib/ordersDataBaseHelpers';

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const orders = await getAllOrders();
      const orderId = req.query.id;
      const orderFound = orders.find(order => order.orderId === orderId);
      if (!orderFound) {
        res.status(400).json({ message: 'Not found order' })
      } else {
        res.status(200).json(orderFound)
      }
    } catch (err) {
      res.status(400).json({ message: 'Error getting detail order' })
    }
  }
}
