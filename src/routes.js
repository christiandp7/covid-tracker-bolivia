//import Dashboard from "views/Dashboard.js";
import Bolivia from "views/Bolivia.js";
import Sudamerica from "views/Sudamerica.js";
import Vacunas from "views/Vacunas.js"
//import Icons from "views/Icons.js";
//import Map from "views/Map.js";
//import Notifications from "views/Notifications.js";
//import Rtl from "views/Rtl.js";
//import TableList from "views/TableList.js";
//import Typography from "views/Typography.js";
//import UserProfile from "views/UserProfile.js";



var routes = [
  /*{
    path: "/",
    name: "Dashboard",
    //rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },*/
  {
    path: "/",
    name: "Bolivia",
    icon: "tim-icons icon-chart-bar-32",
    customIcon: "BO",
    component: Bolivia,
    layout: "/admin"
  },
  {
    path: "/sudamerica",
    name: "Sudamérica",
    icon: "tim-icons icon-chart-pie-36",
    customIcon: "SU",
    component: Sudamerica,
    layout: "/admin"
  },
  {
    path: "/vacunas",
    name: "Vacunas",
    icon: "tim-icons icon-chart-pie-36",
    customIcon: "VA",
    component: Vacunas,
    layout: "/admin"
  },
 /*{
    path: "/icons",
    name: "Icons",
    //rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/map",
    name: "Map",
    //rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    //rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    //rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Table List",
    //rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    //rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin"
  }*/
];
export default routes;
