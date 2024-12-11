import { Table } from "../../../components/Elements/Table";
import { useColumnName } from "../../../hooks/useColumnName";
import { useOrders } from "../api/getPurchaseHistory";

export const PurchaseHistory = () => {
  const ordersQuery = useOrders();
  class ProductOrder {
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

  if (ordersQuery.isLoading) return <p>Loading...</p>;
  if (ordersQuery.error instanceof Error)
    return <p>Error: {ordersQuery.error.message}</p>;
  const data: any = ordersQuery.data || [];

  const newData =
    data &&
    data.map((item: any) => {
      return new ProductOrder(
        item.product_name,
        item.user_name,
        item.purchase_quantity,
        item.product_price,
        item.total_price
      );
    });
  const columns = useColumnName(newData[0]);
  return (
    <div className="flex justify-center items-center w-5/6 mx-auto">
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        {data.length > 0 ? (
          <Table data={newData} columns={columns} />
        ) : (
          <p className="text-center">No Data Found</p>
        )}
      </div>
    </div>
  );
};

PurchaseHistory.displayName = "PurchaseHistory";
