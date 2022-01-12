import fs from 'fs';
import path from 'path';

const dataJsonFile = path.join(process.cwd(), 'database/products.json');

export const getAllProducts = () => new Promise((resolve, reject) => {
  fs.readFile(dataJsonFile, 'utf8', function (err, data) {
    try {
      let products = [];
      if (err) {
        reject(new Error('Fetching products failed'))
      }
      products = JSON.parse(data);
      resolve(products);
    } catch (err) {
      reject(err)
    }
  });
})
