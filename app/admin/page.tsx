import StyledLink from "@/components/Buttons/StyledLink";
import TableAdmin from "@/components/TableAdmin";
import { NextPage } from "next";
import React from "react";

const AdminPage: NextPage = async () => {
  const response = await fetch(`http://localhost:3000/api/all`, {
    cache: "no-store",
  });

  const allProducts = await response.json();

  return (
    <section className="flex flex-col gap-8 w-full lg:w-11/12 mx-auto">
      <div className="flex justify-end mt-4">
        <div>
          <StyledLink href="/create-product">Create Product</StyledLink>
        </div>
      </div>
      <TableAdmin data={allProducts.docs} />
    </section>
  );
};

export default AdminPage;
