"use client"

import { useAuthContext } from "@/components/context/AuthContext";

interface AdminLayoutProps {
    children: React.ReactNode;
    login: React.ReactNode;
    }

const AdminLayout = ({ children, login } : AdminLayoutProps) => {
  const { user } = useAuthContext();

  return (
    <>
      {user.logged ? children : login}
    </>
  );
};

export default AdminLayout;