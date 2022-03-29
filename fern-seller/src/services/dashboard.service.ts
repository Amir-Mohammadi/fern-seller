import api from '../api';
import { IInventory, InventoryModel, IShopInProgressOrder, ShopInProgressOrderModel, StaticInfo } from '../api/models';
import { StatisticsInformationProps } from '../components/statistics-information';
import { Color } from '../constants/color';

export default class DashboardService {
  async getInProgressOrders(): Promise<Array<IShopInProgressOrder>> {
    try {
      const customerOrders = await api.v1.customerOrder.getInProgressOrders();
      return this.customerOrderAdapter(customerOrders.data);
    } catch (error) {
      throw error;
    }
  }

  async getStatisticsInformation(): Promise<Array<StatisticsInformationProps>> {
    try {
      const staticInfo = await api.v1.orderStatistics.getOrderStatistics();
      return this.statisticInformationAdapter(staticInfo.data);
    } catch (error) {
      throw error;
    }
  }

  async getInventories(productId: number): Promise<Array<IInventory>> {
    try {
      const inventories = await api.v1.inventory.getInventories(productId);

      return this.getInventoriesAdapter(inventories.data);
    } catch (error) {
      throw error;
    }
  }
  customerOrderAdapter = (customerOrders: Array<ShopInProgressOrderModel>): Array<IShopInProgressOrder> => {
    const orders: Array<IShopInProgressOrder> = [];

    customerOrders.forEach((item) => {
      orders.push({
        orderItemId: item.order_item_id,
        productName: item.product_name,
        productImageId: item.product_image_id,
        productImageRowVersion: item.product_image_row_version,
        brandName: item.brand_name,
        colorName: item.color_name,
        colorCode: item.color_code,
        productCount: item.product_count,
        customerName: item.customer_name,
        deliveryDate: item.delivery_date,
        address: item.address,
      });
    });

    return orders;
  };

  getInventoriesAdapter = (inventories: Array<InventoryModel>): Array<IInventory> => {
    const inventoryList: Array<IInventory> = [];
    inventories.forEach((item) => {
      inventoryList.push({
        WarehouseId: item.warehouse_id,
        Amount: item.amount,
        ColorId: item.color_id,
        ColorName: item.color_name,
        ProductId: item.product_id,
      });
    });

    return inventoryList;
  };

  statisticInformationAdapter = (staticInfo: StaticInfo): Array<StatisticsInformationProps> => {
    return [
      { text: 'تعداد سفارش های امروز', count: staticInfo.total_order_count, type: Color.success },
      { text: 'تعداد سفارش های لغو شده', count: staticInfo.canceled_order_count, type: Color.danger },
      { text: 'سفارش رد شده', count: staticInfo.rejected_total_order_count, type: Color.light },
      { text: 'سفارش ارسال شده', count: staticInfo.sent_total_order_count, type: Color.primary },
    ];
  };
}
