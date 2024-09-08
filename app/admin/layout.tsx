"use client"

import { useAuthContext } from "@/components/context/AuthContext";
import { useEffect, useState } from "react";
import LoginPage from "./login/LoginPage";

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout = ({ children } : AdminLayoutProps) => {
  const { user } = useAuthContext();


  
  return  (
    <>
      {user?.logged ? children : <LoginPage/>}
    </>
  );
};

export default AdminLayout;