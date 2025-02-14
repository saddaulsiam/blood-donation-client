import { TUser } from "./user";

export type TRequest = {
  id: string;
  donorId: string;
  name: string;
  phoneNumber: string;
  dateOfDonation: string;
  hospitalName: string;
  city: string;
  status: string;
  isComplete: boolean;
  message: string;
  donor?: TUser;
  requester?: TUser;
};
