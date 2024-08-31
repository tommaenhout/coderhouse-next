'use client';

import React, { useState, useEffect } from 'react';
import BaseTable from "@/components/Table";
import { TableColumn } from "react-data-table-component";
import { IProduct } from '@/constants/products';


interface TableAdmin {
  data: IProduct[];
}

const TableAdmin: React.FC<TableAdmin> = ({data}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  }, [])

  const columns: TableColumn<IProduct>[] = [
    {
      name: "Name",
      selector: (row) => row.title,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Type",
      selector: (row) => row.type,
    },
  ];

   return isClient && <BaseTable columns={columns} data={data} />;
};

export default TableAdmin;