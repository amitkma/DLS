import { useQuery } from '@tanstack/react-query';
import { fetchInventoryItems } from '../services/inventoryService';

export function useInventoryData() {
  return useQuery({queryKey: ['inventory'], queryFn: fetchInventoryItems});
}