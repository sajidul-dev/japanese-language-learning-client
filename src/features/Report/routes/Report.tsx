import { Spinner } from "../../../components/Elements/Spinner/Spinner";
import { useColumnName } from "../../../hooks/useColumnName";
import { Table } from "../../../components/Elements/Table";
import { useData, useInsertDataMutation } from "../api/getReport";
import { useOrders } from "../api/getPurchaseHistory";
import { VscGithubProject } from "react-icons/vsc";
import { Order, Product, ProductOrder, User } from "../../../utils/reportClass";

export const Report = () => {
  let totalQuantity = 0;
  let totalProductPrice = 0;
  let totalPrice = 0;
  const insertDataMutation = useInsertDataMutation();
  const allDataQuery = useData();
  const ordersQuery = useOrders();

  if (allDataQuery.isLoading || insertDataMutation.isLoading)
    return <Spinner />;
  const errorMessage = insertDataMutation.error ?? allDataQuery.error;

  if (errorMessage instanceof Error) {
    return <div>Error: {errorMessage?.message}</div>;
  }

  const allData: any = allDataQuery.data || [];
  const orders: any = ordersQuery.data || [];

  const newData = orders.map((item: any) => {
    totalQuantity = totalQuantity + Number(item.purchase_quantity);
    totalProductPrice = totalProductPrice + Number(item.product_price);
    totalPrice = totalPrice + Number(item.total_price);
    return new ProductOrder(
      item.product_name,
      item.user_name,
      item.purchase_quantity,
      item.product_price,
      item.total_price
    );
  });

  const columns = useColumnName(newData[0]);

  const handleGenerateReport = async () => {
    try {
      await Promise.all(
        allData.forEach((element: any) => {
          const user = new User(element.name, element.user_phone);
          const product = new Product(
            element.product_name,
            element.product_code,
            element.product_price
          );
          const order = new Order(element.order_no, element.purchase_quantity);
          const reqData = {
            data: {
              user: {
                name: user.name,
                phone: user.phone,
              },
              product: {
                product_name: product.product_name,
                product_code: product.product_code,
                product_price: product.product_price,
              },
              order: {
                order_no: order.order_no,
                purchase_quantity: order.purchase_quantity,
              },
            },
          };
          insertDataMutation.mutate(reqData);
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const tFooter = (
    <tr>
      <td className="border border-gray-300 px-4 py-2"></td>
      <td className="border border-gray-300 px-4 py-2 text-right font-semibold">
        Gross Total:{" "}
      </td>
      <td className="border border-gray-300 px-4 py-2 font-semibold">
        {totalQuantity.toFixed(2)}
      </td>
      <td className="border border-gray-300 px-4 py-2 font-semibold">
        {totalProductPrice.toFixed(2)}
      </td>
      <td className="border border-gray-300 px-4 py-2 font-semibold">
        {totalPrice.toFixed(2)}
      </td>
    </tr>
  );

  return (
    <div className="">
      <div className="w-full flex justify-end">
        <button
          onClick={handleGenerateReport}
          type="button"
          className="bg-[#474BAE] flex justify-center items-center gap-4 rounded-lg w-40 h-10 text-white font-bold cursor-pointer px-2"
        >
          <p className="whitespace-nowrap">Generate Report</p>
          <VscGithubProject />
        </button>
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg ">
        {newData.length > 0 ? (
          <Table data={newData} columns={columns} tFooter={tFooter} />
        ) : (
          <p className="text-center">No Data Found</p>
        )}
      </div>
    </div>
  );
};

Report.displayName = "Report";
