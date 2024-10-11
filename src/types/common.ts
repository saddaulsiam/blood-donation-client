import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: unknown;
  child?: DrawerItem[];
}

export type ResponseSuccessType = {
  data: any;
  meta?: TMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type TUserProfile = {
  id: string;
  age: number;
  bio: string;
  photo: string;
  lastDonationDate: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
};

export type TUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  gender: "Male" | "Female";
  bloodType:
    | "A_POSITIVE"
    | "A_NEGATIVE"
    | "B_POSITIVE"
    | "B_NEGATIVE"
    | "AB_POSITIVE"
    | "AB_NEGATIVE"
    | "O_POSITIVE"
    | "O_NEGATIVE";
  location: string;
  availability: boolean;
  createdAt: string;
  updatedAt: string;
  profile: TUserProfile;
};

export const Gender = ["MALE", "FEMALE"];

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};
