export interface InventoryItem {
    id: number;
    productName: string;
    sku: string;
    inStock: number;
    available: number;
    status: 'Good' | 'Low';
  }
  