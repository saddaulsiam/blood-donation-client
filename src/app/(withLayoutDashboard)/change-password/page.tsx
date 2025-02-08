"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import { AlertCircle, CheckCircle, Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ChangePassword = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [changePassword] = useChangePasswordMutation();

  // Real-time validation
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== newPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");

    try {
      const res = await changePassword({ oldPassword, newPassword }).unwrap();
      if (res.success) {
        toast.success(res.message || "Password changed successfully!");

        // Reset the form fields after success
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="container mx-auto max-w-xl rounded-lg bg-gradient-to-br from-white to-gray-50 p-8 shadow-md">
      <h2 className="pb-6 text-2xl font-bold text-gray-800">Change Password</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Old Password */}
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-12 focus:border-gray-300 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0"
            type={showOldPassword ? "text" : "password"}
            placeholder="Old Password"
            value={oldPassword}
            required
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowOldPassword(!showOldPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showOldPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* New Password */}
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            type={showNewPassword ? "text" : "password"}
            placeholder="New Password"
            value={newPassword}
            required
            onChange={(e) => setNewPassword(e.target.value)}
            className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-12 focus:border-gray-300 focus:ring-2 focus:ring-gray-200"
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showNewPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Confirm New Password */}
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm New Password"
            value={confirmPassword}
            required
            onChange={handleConfirmPasswordChange}
            className={`h-12 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-12 focus:border-gray-300 focus:ring-2 focus:ring-gray-200 ${
              confirmPassword && error
                ? "border-red-500 ring-red-300"
                : confirmPassword && !error
                  ? "border-green-500 ring-green-300"
                  : "border-gray-200"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showConfirmPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Real-time Password Match Feedback */}
        {confirmPassword && (
          <div
            className={`flex items-center space-x-2 ${error ? "text-red-600" : "text-green-600"}`}
          >
            {error ? (
              <AlertCircle className="h-5 w-5" />
            ) : (
              <CheckCircle className="h-5 w-5" />
            )}
            <p className="text-sm">{error ? error : "Passwords match!"}</p>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="h-12 w-full rounded-lg bg-primary text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary-dark"
        >
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
