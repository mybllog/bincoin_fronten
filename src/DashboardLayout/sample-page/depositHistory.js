//import Navbar from '../../DashboardLayout/layout/header/Header';
import Sidebar from '../layout/sidebar/Sidebar';
//import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
//import { Button } from '@radix-ui/themes';
//import { NavLink } from 'react-router-dom';

const History = () => {
 

  const columns = [
    { headerName: 'Amount', field: 'amount', sortable: true },
    
  ];

  return (
    <div className="min-h-screen flex flex-col sm:flex-row bg-[#EAEFF0]">
      <Sidebar />
      <div className="flex-grow p-4 sm:p-8 bg-gray-500">
        <DataGrid columns={columns} />
      </div>
    </div>
  );
};

export default History;
