import WarehouseInventory from '@/components/warehouse/WarehouseInventory'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Warehouse | Inventory",
};

const WarehouseInventoryPage = () => {
  return (
    <WarehouseInventory />
  )
}

export default WarehouseInventoryPage