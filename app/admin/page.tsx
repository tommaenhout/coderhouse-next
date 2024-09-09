import StyledLink from "@/components/Buttons/StyledLink";
import TableAdmin from "@/components/TableAdmin";
import { NextPage } from "next";
import React from "react";
import ButtonLogout from "@/components/ButtonLogout";

const AdminPage: NextPage = async () => {
  const response = await fetch(`http://${process.env.VERCEL_APP}/api/all`, {
    cache: "no-store",
  });

  const allProducts = await response.json();

  return (
    <section className="flex flex-col gap-8 w-full lg:w-11/12 mx-auto">
      <div className="flex justify-end mt-4">
        <div className="flex gap-11">
          <StyledLink href="/create-product">Create Product</StyledLink>
          <ButtonLogout />
        </div>
      </div>
      <TableAdmin data={allProducts.docs} />
    </section>
  );
};

export default AdminPage;
