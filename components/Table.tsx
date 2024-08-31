import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

interface BaseTableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
}

const BaseTable = <T,>({ columns, data }: BaseTableProps<T>) => {
  return (
    <div data-testid="base-table" className='w-full mt-4 self-center '>
      <DataTable
        columns={columns}
        data={data}
        pagination
      />
    </div>
  );
}

export default BaseTable;