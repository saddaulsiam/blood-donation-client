"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserPlus, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Form submission to make user an admin
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required!");
      return;
    }
    setError("");

    try {
      // Simulating a successful admin role assignment
      // Replace with actual API call to make user an admin
      setSuccess(true);
      toast.success("User is now an admin!");
      setEmail("");
    } catch (err) {
      setSuccess(false);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="container mx-auto max-w-xl rounded-lg bg-gradient-to-br from-white to-gray-50 p-8 shadow-md">
      <h2 className="pb-6 text-2xl font-bold text-gray-800">Make Admin</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Input */}
        <div className="relative">
          <UserPlus className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-12 focus:border-gray-300 focus:ring-2 focus:ring-gray-200"
            type="email"
            placeholder="Enter User's Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Real-time validation */}
        {error && (
          <div className="flex items-center space-x-2 text-red-600">
            <AlertCircle className="h-5 w-5" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Success Feedback */}
        {success && (
          <div className="flex items-center space-x-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            <p className="text-sm">User is now an admin!</p>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="h-12 w-full rounded-lg bg-primary text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary-dark"
        >
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
