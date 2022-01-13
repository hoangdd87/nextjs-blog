import { getAllOrders, writeAllOrders } from '../../lib/ordersDataBaseHelpers';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  if(req.method === "POST") {
    console.log('req.body = ', req.body);
    const { products, orderInfo } = req.body;
    console.log('productst = ', products, orderInfo);
    const allOrders = await getAllOrders();
    console.log('allOrders = ', allOrders);
    const newOrderId = uuidv4();
    const newOrders = [...allOrders, { orderId:newOrderId, orderInfo, products }];
    console.log('newOrders = ', newOrders);
    try {
      await writeAllOrders(newOrders);
      res.status(200).json({ message: 'Successfully', orderId: newOrderId })
    } catch (err) {
      res.status(400).json({ message: 'Update orders failed' })
    }
    
  }
  if(req.method === "GET") {
    res.status(200).json({ text: 'Hello' })
  }
}
