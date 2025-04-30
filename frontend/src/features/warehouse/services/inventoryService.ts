import { InventoryItem } from '../types/inventoryTypes';

const staticInventoryData: InventoryItem[] = [
  {
    id: 1,
    productName: 'Wireless Mouse',
    sku: 'WM-12345',
    inStock: 150,
    available: 150,
    status: 'Good',
  },
  {
    id: 2,
    productName: 'Bluetooth Headphones',
    sku: 'BH-67890',
    inStock: 25,
    available: 15,
    status: 'Low',
  },
  {
    id: 3,
    productName: 'Laptop Stand',
    sku: 'LS-11223',
    inStock: 80,
    available: 70,
    status: 'Good',
  },
  {
    id: 4,
    productName: 'USB-C Charging Cable',
    sku: 'CC-44556',
    inStock: 30,
    available: 10,
    status: 'Low',
  },
  {
    id: 5,
    productName: 'Ergonomic Keyboard',
    sku: 'EK-78901',
    inStock: 200,
    available: 180,
    status: 'Good',
  },
];


export async function fetchInventoryItems(): Promise<InventoryItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(staticInventoryData), 1000); // Simulate a delay for testing
  });
}
