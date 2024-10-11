import { DrawerItem } from "@/types";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { VscRequestChanges } from "react-icons/vsc";
import { FaKey } from "react-icons/fa";

// export const drawerItems = () => {
//   const roleMenus: DrawerItem[] = [];

//   const defaultMenus = [
//     {
//       title: "Dashboard",
//       path: `dashboard`,
//       icon: MdDashboard,
//     },
//     {
//       title: "Profile",
//       path: `profile`,
//       icon: CgProfile,
//     },
//     {
//       title: "My Blood Request",
//       path: `my-blood-request`,
//       icon: VscRequestChanges,
//     },
//     {
//       title: "Password",
//       path: `password`,
//       icon: FaKey,
//     },
//   ];

//   // switch (role) {
//   //    case USER_ROLE.SUPER_ADMIN:
//   //       roleMenus.push(
//   //          {
//   //             title: 'Dashboard',
//   //             path: `${role}`,
//   //             icon: DashboardIcon,
//   //          },
//   //          {
//   //             title: 'Manage Users',
//   //             path: `${role}/manage-users`,
//   //             icon: GroupIcon,
//   //          }
//   //       );
//   //       break;

//   //    case USER_ROLE.ADMIN:
//   //       roleMenus.push(
//   //          {
//   //             title: 'Dashboard',
//   //             path: `${role}`,
//   //             icon: DashboardIcon,
//   //          },
//   //          {
//   //             title: 'Specialties',
//   //             path: `${role}/specialties`,
//   //             icon: TryIcon,
//   //          },
//   //          {
//   //             title: 'Doctors',
//   //             path: `${role}/doctors`,
//   //             icon: MedicalInformationIcon,
//   //          },
//   //          {
//   //             title: 'Schedules',
//   //             path: `${role}/schedules`,
//   //             icon: CalendarMonthIcon,
//   //          },
//   //          {
//   //             title: 'Appointments',
//   //             path: `${role}/appointments`,
//   //             icon: BookOnlineIcon,
//   //          },
//   //          {
//   //             title: 'Reviews',
//   //             path: `${role}/reviews`,
//   //             icon: ReviewsIcon,
//   //          }
//   //       );
//   //       break;

//   //    case USER_ROLE.DOCTOR:
//   //       roleMenus.push(
//   //          {
//   //             title: 'Dashboard',
//   //             path: `${role}`,
//   //             icon: DashboardIcon,
//   //          },
//   //          {
//   //             title: 'Schedules',
//   //             path: `${role}/schedules`,
//   //             icon: CalendarMonthIcon,
//   //          },
//   //          {
//   //             title: 'Appointments',
//   //             path: `${role}/appointment`,
//   //             icon: BookOnlineIcon,
//   //          }
//   //       );
//   //       break;

//   //    case USER_ROLE.PATIENT:
//   //       roleMenus.push(
//   //          {
//   //             title: 'Appointments',
//   //             path: `${role}/appointments`,
//   //             icon: BookOnlineIcon,
//   //          },
//   //          {
//   //             title: 'Prescriptions',
//   //             path: `${role}/prescriptions`,
//   //             icon: ReceiptLongIcon,
//   //          },
//   //          {
//   //             title: 'Payment History',
//   //             path: `${role}/payment-history`,
//   //             icon: AttachMoneyIcon,
//   //          }
//   //       );
//   //       break;

//   //    default:
//   //       break;
//   // }

//   return [/* ...roleMenus, */ ...defaultMenus];
// };

export const defaultMenus = [
  {
    title: "Dashboard",
    path: `/dashboard`,
    icon: MdDashboard,
  },
  {
    title: "Profile",
    path: `/profile`,
    icon: CgProfile,
  },
  {
    title: "My Blood Request",
    path: `/my-blood-request`,
    icon: VscRequestChanges,
  },
  {
    title: "Chance Password",
    path: `/chance-password`,
    icon: FaKey,
  },
];
