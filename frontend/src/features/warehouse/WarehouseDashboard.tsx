"use client";

import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { InventoryTable } from "@/features/warehouse/components/InventoryTable";

export default function WarehouseDashboardPage() {
  const donutData = {
    labels: ["Utilized", "Available"],
    datasets: [
      {
        data: [72, 28],
        backgroundColor: ["#f97316", "#e5e7eb"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="p-8 space-y-8">
      <div
        className="p-6 rounded-md flex gap-6"
        style={{ background: "linear-gradient(to right, #ea580c, #fb923c)" }}
      >
        <div className="bg-white/50 py-2 px-3 text-white flex flex-center items-center rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-2xl text-white font-semibold">
            Warehouse Management System (WMS) Module
          </h1>
          <p className="text-white">
            Integrated with Nexus Supply Chain Orchestrator
          </p>
        </div>
      </div>
      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6">
        <KpiCard title="Total SKUs" value="1,245" icon="📦" />
        <KpiCard title="Picking Accuracy" value="99.2%" icon="📈" />
        <KpiCard title="Avg. Fulfillment Time" value="35 min" icon="⏰" />
        <KpiCard title="Low Stock Alerts" value="12" icon="⚠️" />
      </div>

      <div className="flex gap-6">
        {/* Inventory Management Table */}
        <div className="bg-white p-10 rounded-xl shadow flex-2">
          <h2 className="text-xl font-semibold mb-1">Inventory Management</h2>
          <p className="mb-5 text-gray-500">
            Current stock levels and allocation
          </p>
          <InventoryTable />
        </div>

        {/* Warehouse Space Utilization */}
        <div className="bg-white p-6 rounded-xl shadow flex flex-center flex-col flex-1">
          <h2 className="text-xl font-semibold mb-2">
            Warehouse Space Utilization
          </h2>
          <p className="mb-4 text-gray-500">Current storage capacity</p>
          <div>
            <Doughnut data={donutData} />
          </div>
          <div className="flex-1">
            <ZoneUsage name="Zone A (Fast Moving)" percent={85} />
            <ZoneUsage name="Zone B (Medium Moving)" percent={62} />
            <ZoneUsage name="Zone C (Slow Moving)" percent={48} />
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white p-10 rounded-xl shadow flex-2">
        <h2 className="text-xl font-semibold mb-1">Warehouse Operations</h2>
        <p className="mb-5 text-gray-500">Real-time activity monitoring</p>

        <div className="grid grid-cols-3 gap-6">
          <div className="rounded-md border-1 border-gray-200 p-4 flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-3">Active Picking</h3>
            <div className="flex justify-between">
              <p className="font-semibold text-2xl">16</p>
              <div className=" flex items-center bg-blue-500/10 bg-opactiy-50 text-xs font-medium px-3 mb-0 rounded-md text-blue-800">
                In Progress
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">Avg. Time:</p>
              <p className="text-sm text-gray-500">12 min</p>
            </div>
          </div>
          <div className="rounded-md border-1 border-gray-200 p-4 flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-3">Packing Station</h3>
            <div className="flex justify-between">
              <p className="font-semibold text-2xl">8</p>
              <div className=" flex items-center bg-blue-500/10 bg-opactiy-50 text-xs font-medium px-3 mb-0 rounded-md text-blue-800">
                Active
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">Efficiency:</p>
              <p className="text-sm text-gray-500">94%</p>
            </div>
          </div>
          <div className="rounded-md  border-1 border-gray-200 p-4 flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-3">Shipping Queue</h3>
            <div className="flex justify-between">
              <p className="font-semibold text-2xl">24</p>
              <div className=" flex items-center bg-blue-500/10 text-xs font-medium px-3 mb-0 rounded-md text-blue-800">
                Waiting
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">Est. Completion:</p>
              <p className="text-sm text-gray-500">1h 20 min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KpiCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: string;
}) {
  return (
    <div className="bg-white px-6 py-10 rounded-xl shadow flex items-center space-x-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <p className="text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

function ZoneUsage({ name, percent }: { name: string; percent: number }) {
  return (
    <div className="mb-4">
      <p className="text-gray-600">{name}</p>
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
