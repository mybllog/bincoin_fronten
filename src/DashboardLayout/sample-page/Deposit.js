//import Navbar from '../../DashboardLayout/layout/header/Header';
import Sidebar from '../layout/sidebar/Sidebar';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@radix-ui/themes';
import { NavLink } from 'react-router-dom';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Deposit = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const API_URL = process.env.REACT_APP_BINCOIN_API_URL;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/deposit/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: parseFloat(amount),
          currency: currency
        })
      });
      const data = await response.json();

      if (response.ok) {
        // get token in localStorage
        localStorage.getItem('token', data.token);
        // Redirect to dashboard
        toast.success('Deposit successful');
        navigate('/samples');
      } else {
        // Handle deposit error
        toast.error(data.message || 'Deposit failed');
      }
    } catch (error) {
      console.error('Error during deposit:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { headerName: 'Amount', field: 'amount', sortable: true },
    { headerName: 'Charge', field: 'charge', sortable: true },
    { headerName: 'Total', field: 'total', sortable: true },
  ];

  return (
    <div className="min-h-screen flex flex-col sm:flex-row bg-[#EAEFF0]">
      <Sidebar />
      <div className="flex-grow p-4 sm:p-8 bg-gray-500">
        <div className="text-white grid grid-cols-2 gap-4 mb-4 sm:mb-8">
          <div>
            <p>Add Money</p>
          </div>
          <div className="flex justify-end">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">
              <NavLink to='/depositHistory'>Deposit History</NavLink>
            </Button>
          </div>
        </div>
        <form className="text-white mb-4" onSubmit={handleSubmit}>
          <div className="flex items-center mb-4">
            <label className="block text-sm font-medium">Currency*</label>
            <input
              name="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              required
              className="px-4 py-3 rounded-lg text-black bg-gray-200 border focus:border-gray-300 focus:bg-white focus:outline-none text-sm ml-2"
            />
          </div>
          <div className="flex items-center mb-4">
            <label className="block text-sm font-medium">Enter Amount*</label>
            <div className="flex items-center ml-2">
              <input
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="px-4 py-3 rounded-lg text-black bg-gray-200 border focus:border-gray-300 focus:bg-white focus:outline-none text-sm"
              />
              <div className="border px-4 py-1 ml-2">USD</div>
            </div>
          </div>
          <div className="flex justify-center my-6">
            <Button className="bg-pink-500" type="submit" disabled={loading}>
              {loading ? 'Processing...' : 'Proceed to Payment'}
            </Button>
          </div>
        </form>
        <div className="relative mb-5">
          <DataGrid columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Deposit;
