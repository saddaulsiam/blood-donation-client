"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartHandshake, Users, History, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="space-y-6 p-6">
      <motion.h1
        className="text-3xl font-bold text-red-600"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome, Donor!
      </motion.h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="flex items-center space-x-4 p-4">
            <HeartHandshake className="h-12 w-12 text-red-500" />
            <div>
              <p className="text-lg font-semibold">Total Donations</p>
              <p className="text-2xl font-bold">8</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center space-x-4 p-4">
            <Users className="h-12 w-12 text-blue-500" />
            <div>
              <p className="text-lg font-semibold">Pending Requests</p>
              <p className="text-2xl font-bold">2</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center space-x-4 p-4">
            <History className="h-12 w-12 text-green-500" />
            <div>
              <p className="text-lg font-semibold">Donation History</p>
              <p className="text-2xl font-bold">View All</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex space-x-4">
        <Button className="flex items-center space-x-2 bg-red-600 hover:bg-red-700">
          <PlusCircle className="h-5 w-5" />
          <span>Request Blood</span>
        </Button>
        <Button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700">
          <Users className="h-5 w-5" />
          <span>Find Donors</span>
        </Button>
      </div>
    </div>
  );
}
