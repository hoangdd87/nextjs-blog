import fs from 'fs';
import path from 'path';

const dataJsonFile = path.join(process.cwd(), 'database/orders.json');

export const getAllOrders = () => new Promise((resolve, reject) => {
  fs.readFile(dataJsonFile, 'utf8', function (err, data) {
    try {
      let orders = [];
      if (err) {
        reject(new Error('Fetching orders failed'))
      }
      orders = JSON.parse(data);
      resolve(orders);
    } catch (err) {
      reject(err)
    }
  });
});

export const writeAllOrders = (orders) => new Promise((resolve, reject) => {
  fs.writeFile(dataJsonFile, JSON.stringify(orders), function (err) {
    if (err) throw reject(err);
    resolve();
  });
});
