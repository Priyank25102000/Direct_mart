import { Injectable, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

home: Product[] =[
  new Product(
       1,
      'Shirt',
      'shirt',
       300,
      '/assets/images/img4.jpg'),
  new Product(
       2,
       'Titan Watch',
       'Series-3',
       5900,
       '/assets/images/watch-1.jpeg'),
  new Product(
       3,
      'Nike Shoe',
      'model-45re',
       3500,
      '/assets/images/sh3.jpg'),
  new Product(
       4,
      'Fosil-Watch',
      'Series-4', 
       9999,
      '/assets/images/watch-2.jpeg'),
  new Product(
        4,
       'Ladies Heels',
       'Zara Product', 
        400,
       '/assets/images/shoes10.jpeg'),
  new Product(
        4,
       'Baby-Suite',
       'Tomato Brand', 
        499,
       '/assets/images/img8.jpg'),
  new Product(
        4,
       'Ladies Kurti',
       'Biba', 
        700,
       '/assets/images/img2.jpg'),
  new Product(
        4,
       'Jacket',
       "jacket", 
        799,
       '/assets/images/men-1.jpg'),    
 ]


products1: Product[] =[
  new Product(
      1,
     'T-Shidfhrt',
     'Denimhg T-shirt',
      300,
     '/assets/images/111.jpg'),
  new Product(
      2,
      'Titan Wfhatch',
      'Series-3',
      20000,
      '/assets/images/bag2.jpeg'),
  new Product(3,
     'Nike Shdfgoe',
     'model-45re',
      3000,
     '/assets/images/shoes2.jpg'),
  new Product(
      4,
     ' Watch',
     'Series-3', 
      5000,
     '/assets/images/watch5.jpeg'),
  new Product(
       4,
      'Realme Watch',
      'Series-3', 
       5000,
      '/assets/images/men-2.jpg'),
  new Product(
       4,
      'Realme Watch',
      'Series-3', 
       5000,
      '/assets/images/img5.jpg'),
  new Product(
       4,
      'Realme Watch',
      'Series-3', 
       5000,
      '/assets/images/shoes12.jpeg'),
  new Product(
       4,
      'Realme Watch',
      'Series-3', 
       5000,
      '/assets/images/watch10.jpeg'),    
  new Product(
        4,
       'Realme Watch',
       'Series-3', 
        5000,
       '/assets/images/322.jpg'), 
]

products2: Product[] =[
  new Product(
      1,
     'Shirt',
     'shirt',
      300,
     '/assets/images/img4.jpg'),
  new Product(
      2,
      'Titan Watch',
      'Series-3',
      5900,
      '/assets/images/watch-1.jpeg'),
  new Product(
      3,
     'Nike Shoe',
     'model-45re',
      3500,
     '/assets/images/sh3.jpg'),
  new Product(
      4,
     'Fosil-Watch',
     'Series-4', 
      9999,
     '/assets/images/watch-2.jpeg'),
  new Product(
       4,
      'Ladies Heels',
      'Zara Product', 
       400,
      '/assets/images/shoes10.jpeg'),
  new Product(
       4,
      'Baby-Suite',
      'Tomato Brand', 
       499,
      '/assets/images/img8.jpg'),
  new Product(
       4,
      'Ladies Kurti',
      'Biba', 
       700,
      '/assets/images/img2.jpg'),
  new Product(
       4,
      'Jacket',
      "jacket", 
       799,
      '/assets/images/men-1.jpg'),   
  new Product(
        4,
       'T-Shirt',
       "T-Shirt", 
        459,
       '/assets/images/444.jpg'),  
]

products3: Product[] =[
  new Product(
      1,
     'Kurti',
     'Denimhg T-shirt',
      399,
     '/assets/images/img1.jpg'),
  new Product(
      2,
      'Apple Watch',
      'Series-3',
      20000,
      '/assets/images/watch4.jpg'),
  new Product(3,
     'Blue Shirt',
     'model-45re',
      600,
     '/assets/images/222.jpg'),
  new Product(
      4,
     ' Ladies Hand-Bag',
     'Series-3', 
      5000,
     '/assets/images/bag3.jpeg'),
  new Product(
       4,
      'Men Shoe',
      'Model-435', 
       599,
      '/assets/images/shoes4.jpeg'),
  new Product(
       4,
      'Ladie Watch',
      'Series-3', 
       490,
      '/assets/images/watch6.jpeg'),
  new Product(
       4,
      'Rado Watch',
      'Series-3', 
       5000,
      '/assets/images/watch-3.png'),
  new Product(
       4,
      'Ladies Top',
      'Series-3', 
       5000,
      '/assets/images/img3.jpg'),    
  new Product(
        4,
       'Ladies hand-bAG',
       'Series-3', 
        5000,
       '/assets/images/bag11.jpeg'), 
]

watches : Product[] = [

  new Product(
    1,
   'Watch-1',
   'Denimhg T-shirt',
    399,
   '/assets/images/watch1.jpg'),
  new Product(
    2,
    'Watch-2',
    'Series-3',
    20000,
    '/assets/images/watch4.jpg'),
  new Product(3,
   'Watch-3',
   'model-45re',
    600,
   '/assets/images/watch5.jpeg'),
  new Product(
     4,
    'Watch-4',
    'Model-435', 
     599,
    '/assets/images/watch7.jpeg'),
  new Product(
     4,
    'Watch-5',
    'Series-3', 
     490,
    '/assets/images/watch8.jpeg'),
  new Product(
     4,
    'Watch-6',
    'Series-3', 
     5000,
    '/assets/images/watch9.jpeg'),
  new Product(
     4,
    'Watch-7',
    'Series-3', 
     5000,
    '/assets/images/watch10.jpeg'),    
  new Product(
      4,
     'Watch-8',
     'Watch-8', 
      5000,
     '/assets/images/watch11.jpeg'), 
  new Product(
      4,
     'Watch-9',
     'Watch-9', 
      5000,
     '/assets/images/watch-1.jpeg'), 
  new Product(
      4,
     'Watch-10',
     'Watch-10', 
      5000,
     '/assets/images/watch-2.jpeg'), 
  new Product(
      4,
     'Watch-11',
     'Watch-11', 
      5000,
     '/assets/images/watch-3.png'),
  new Product(
      4,
     'Watch-12',
     'Series-3', 
      5000,
     '/assets/images/watch14.jpg'),  
  new Product(
      4,
     'Watch-13',
     'Series-3', 
      5000,
     '/assets/images/watch16.jpg'),  
  new Product(
      4,
     'Watch-14',
     'Series-3', 
      5000,
     '/assets/images/watch15.jpeg'),  
  new Product(
      4,
     'Watch-15',
     'Series-3', 
      5000,
     '/assets/images/watch17.jpg'),  
  new Product(
      4,
     'Watch-16',
     'Series-3', 
      5000,
     '/assets/images/watch6.jpeg'),
]


bags: Product[] =[
  new Product(
      1,
     'Shirt',
     'shirt',
      300,
     '/assets/images/bag1.jpeg'),
  new Product(
      2,
      'Titan Watch',
      'Series-3',
      5900,
      '/assets/images/bag2.jpeg'),
  new Product(
      3,
     'Nike Shoe',
     'model-45re',
      3500,
     '/assets/images/bag3.jpeg'),
  new Product(
      4,
     'Fosil-Watch',
     'Series-4', 
      9999,
     '/assets/images/bag4.jpeg'),
  new Product(
       4,
      'Ladies Heels',
      'Zara Product', 
       400,
      '/assets/images/bag5.jpeg'),
  new Product(
       4,
      'Baby-Suite',
      'Tomato Brand', 
       499,
      '/assets/images/bag6.jpeg'),
  new Product(
       4,
      'Ladies Kurti',
      'Biba', 
       700,
      '/assets/images/bag7.jpeg'),
  new Product(
       4,
      'Jacket',
      "jacket", 
       799,
      '/assets/images/bag8.jpeg'),   
  new Product(
        4,
       'T-Shirt',
       "T-Shirt", 
        459,
       '/assets/images/bag9.jpeg'),  
  new Product(
        4,
       'T-Shirt',
       "T-Shirt", 
        459,
       '/assets/images/bag10.jpeg'),
  new Product(
        4,
       'T-Shirt',
       "T-Shirt", 
        459,
       '/assets/images/bag11.jpeg'),
  new Product(
        4,
       'T-Shirt',
       "T-Shirt", 
        459,
       '/assets/images/bag12.jpeg'),
]


shoes: Product[] =[
  new Product(
      1,
     'Shoe-1',
     'shirt',
      300,
     '/assets/images/shoes2.jpg'),
  new Product(
      2,
      'Shoe-2',
      'Series-3',
      5900,
      '/assets/images/shoes4.jpeg'),
  new Product(
      3,
     'Shoe-3',
     'model-45re',
      3500,
     '/assets/images/sh3.jpg'),
  new Product(
      4,
     'Shoe-4',
     'Series-4', 
      9999,
     '/assets/images/shoes13.jpeg'),
  new Product(
       4,
      'Shoe-5',
      'Zara Product', 
       400,
      '/assets/images/shoes10.jpeg'),
  new Product(
       4,
      'Shoe-6',
      'Tomato Brand', 
       499,
      '/assets/images/shoes15.jpeg'),
  new Product(
       4,
      'Shoe-7',
      'Biba', 
       700,
      '/assets/images/shoes12.jpeg'),
  new Product(
       4,
      'Shoe-8',
      "jacket", 
       799,
      '/assets/images/shoes11.jpeg'),  
  new Product(
        4,
       'Shoe-9',
       "jacket", 
        799,
       '/assets/images/shoes7.jpg'),   
  new Product(
        4,
       'Shoe-10',
       "jacket", 
        799,
       '/assets/images/shoes16.jpg'), 
  new Product(
        4,
       'Shoe-11',
       "jacket", 
        799,
       '/assets/images/shoes17.webp'),   
  new Product(
        4,
       'Shoe-12',
       "jacket", 
        799,
       '/assets/images/shoes9.webp'),    
]



  constructor() { }


getProducts(): Product[]{
  return this.home
}

getProductsForShop1(): Product[]{
  return this.products1
}

getProductsForShop2(): Product[]{
  return this.products2
}

getProductsForShop3(): Product[]{
  return this.products3
}
getWatches() : Product[]{
  return this.watches
}
getbags() : Product[]{
  return this.bags
}
getshoes() : Product[]{
  return this.shoes
}
}