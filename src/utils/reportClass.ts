export class ProductOrder {
  constructor(
    product_name: string,
    customer_name: string,
    quantity: number,
    product_price: number,
    total_price: number
  ) {
    this.product_name = product_name;
    this.customer_name = customer_name;
    this.quantity = quantity;
    this.product_price = product_price;
    this.total_price = total_price;
  }
  product_name: string;
  customer_name: string;
  quantity: number;
  product_price: number;
  total_price: number;
}

export class User {
  constructor(name: string, phone: string) {
    this.name = name;
    this.phone = phone;
  }
  name: string;
  phone: string;
}

export class Product {
  constructor(
    product_name: string,
    product_code: string,
    product_price: number
  ) {
    this.product_name = product_name;
    this.product_code = product_code;
    this.product_price = product_price;
  }
  product_name: string;
  product_code: string;
  product_price: number;
}
export class Order {
  constructor(order_no: number, purchase_quantity: number) {
    this.order_no = order_no;
    this.purchase_quantity = purchase_quantity;
  }
  order_no: number;
  purchase_quantity: number;
}
