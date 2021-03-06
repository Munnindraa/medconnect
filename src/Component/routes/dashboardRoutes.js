import { Patient } from "../patient/Patient";
import { PatientConnectedList } from "../patient/PatientList";
import React from "react";
import { LoginConnectedComponent } from "../LoginComponent";
import { DoctorConnectedList } from "../doctor/DoctorList";
import { Doctor } from "../doctor/Doctor";
import { ReceptionConnectedList } from "../reception/ReceptionList";
import { Reception } from "../reception/Reception";
import { DashboardConnectedComponent } from "../DashboardComponent";
import { Appointment } from "../appointment/Appointment";
import { AppointmentConnectedList } from "../appointment/AppointmentList";
import { MyProfile } from "../MyProfile";
import { ChangePassword } from "../ChangePassword";
import {MedicineConnectedList} from "../medicine/MedicineList";
import {Medicine} from "../medicine/Medicine";

export const dashboardRoutes = [
  {
    path: "/edit-patient/:id",
    component: <Patient></Patient>,
  },
  {
    path: "/new-patient",
    component: <Patient></Patient>,
  },
  {
    path: "/patient-list",
    component: <PatientConnectedList></PatientConnectedList>,
  },

  {
    path: "/edit-doctor/:id",
    component: <Doctor></Doctor>,
  },
  {
    path: "/new-doctor",
    component: <Doctor></Doctor>,
  },
  {
    path: "/doctor-list",
    component: <DoctorConnectedList></DoctorConnectedList>,
  },
  {
    path: "/new-medicine",
    component: <Medicine></Medicine>,
  },
  {
    path: "/edit-medicine/:id",
    component: <Medicine></Medicine>,
  },
  {
    path: "/medicine-list",
    component: <MedicineConnectedList></MedicineConnectedList>,
  },
  {
    path: "/edit-reception/:id",
    component: <Reception></Reception>,
  },
  {
    path: "/new-reception",
    component: <Reception></Reception>,
  },
  {
    path: "/reception-list",
    component: <ReceptionConnectedList></ReceptionConnectedList>,
  },
  {
    path: "/edit-appointment/:id",
    component: <Appointment></Appointment>,
  },
  {
    path: "/new-appointment",
    component: <Appointment></Appointment>,
  },
  {
    path: "/appointment-list",
    component: <AppointmentConnectedList></AppointmentConnectedList>,
  },
  {
    path: "/dashboard",
    component: <DashboardConnectedComponent></DashboardConnectedComponent>,
  },
  {
    path: "/login",
    component: <LoginConnectedComponent></LoginConnectedComponent>,
  },
  {
    path: "/my-profile/:id",
    component: <MyProfile></MyProfile>,
  },
  {
    path: "/change-password/:id",
    component: <ChangePassword></ChangePassword>,
  },
  {
    path: "/",
    component: <LoginConnectedComponent></LoginConnectedComponent>,
  }
];
