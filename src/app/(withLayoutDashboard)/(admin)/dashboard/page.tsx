"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Status } from "@/contants/common";
import withAuth from "@/hooks/withAuth";
import { useGetRequestsQuery } from "@/redux/features/request/requestApi";
import { TRequest } from "@/types/request";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  History,
  Users,
  XCircle,
  CheckCircle,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const { data: requests } = useGetRequestsQuery({});

  const data = {
    total: requests?.data?.length || 0,
    canceled:
      requests?.data?.filter(
        (request: TRequest) => request.status === Status.CANCEL,
      ).length +
        requests?.data?.filter(
          (request: TRequest) => request.status === Status.REJECTED,
        ).length || 0,

    pending:
      requests?.data?.filter(
        (request: TRequest) => request.status === Status.PENDING,
      ).length || 0,
    approved:
      requests?.data?.filter(
        (request: TRequest) => request.status === Status.APPROVED,
      ).length || 0,
    completed:
      requests?.data?.filter(
        (request: TRequest) => request.status === Status.SUCCESSFUL,
      ).length || 0,
  };

  const chartData = [
    { name: "Total", value: data.total },
    { name: "Canceled", value: data.canceled },
    { name: "Pending", value: data.pending },
    { name: "Approved", value: data.approved },
    { name: "Completed", value: data.completed },
  ];

  return (
    <div className="h-auto space-y-6 bg-gray-50 p-6">
      <motion.h1
        className="mb-6 text-3xl font-bold text-primary"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, Admin!
      </motion.h1>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          {
            label: "Total Donation Requests",
            value: data.total,
            icon: HeartHandshake,
            color: "text-primary",
          },
          {
            label: "Cancel Requests",
            value: data.canceled,
            icon: XCircle,
            color: "text-primary",
          },
          {
            label: "Pending Requests",
            value: data.pending,
            icon: Users,
            color: "text-blue-500",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-40 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardContent className="flex h-full items-center space-x-4 p-6">
                <item.icon className={`h-12 w-12 ${item.color}`} />
                <div>
                  <p className="text-lg font-semibold text-gray-700">
                    {item.label}
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {item.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Additional Metrics Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {[
          {
            label: "Approved Requests",
            value: data.approved,
            icon: CheckCircle,
            color: "text-green-500",
          },
          {
            label: "Complete Requests",
            value: data.completed,
            icon: History,
            color: "text-purple-500",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (index + 3) * 0.1 }}
          >
            <Card className="h-40 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardContent className="flex h-full items-center space-x-4 p-6">
                <item.icon className={`h-12 w-12 ${item.color}`} />
                <div>
                  <p className="text-lg font-semibold text-gray-700">
                    {item.label}
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {item.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Chart Section */}
      <motion.div
        className="rounded-lg bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Donation Statistics
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" stroke="#888888" />
            <YAxis stroke="#888888" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Bar dataKey="value" fill="#ff4d4d" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default withAuth(Dashboard);
