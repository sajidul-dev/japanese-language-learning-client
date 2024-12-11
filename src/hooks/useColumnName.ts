export interface ProductOrder {
  created_at: string;
  name: string;
  order_no: number;
  product_code: string;
  product_name: string;
  product_price: string;
  purchase_quantity: number;
  user_phone: string;
}

export const useColumnName = (obj: {}) => {
  if (!obj) return [];
  const columns = Object.keys(obj).map((key) => ({
    key,
    label: key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase()),
  }));

  return columns;
};
