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
  bloodGroup:
    | "A_POSITIVE"
    | "A_NEGATIVE"
    | "B_POSITIVE"
    | "B_NEGATIVE"
    | "AB_POSITIVE"
    | "AB_NEGATIVE"
    | "O_POSITIVE"
    | "O_NEGATIVE";
  city: string;
  address: string;
  availability: boolean;
  profile: TUserProfile;
  role: string;
  status: string;
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
};
