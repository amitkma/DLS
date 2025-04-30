import { useInventoryData } from '../hooks/useInventoryData';
import StatusBadge from './StatusBadge';

export function InventoryTable() {
  const { data, isLoading } = useInventoryData();

  if (isLoading) return <p>Loading...</p>;

  return (
    <table className="min-w-full text-sm">
      <thead>
        <tr className="border-b-2 border-gray-300">
          <th className='text-left'>Product</th><th  className='text-left'>SKU</th><th  className='text-right'>In Stock</th><th  className='text-right'>Available</th><th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr key={item.id} className="border-b-1 border-gray-200">
            <td className='py-2'>{item.productName}</td>
            <td className='py-2 text-gray-600'>{item.sku}</td>
            <td className='py-2 text-right px-2 text-gray-600'>{item.inStock}</td>
            <td className='py-2 text-right px-2 text-gray-600'>{item.available}</td>
            <td className='py-2 text-center'><StatusBadge status={item.status} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
