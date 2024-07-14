import { toast } from 'react-toastify';
import { fetchExpenses } from '../store/actions/expensesActions';
import { logout } from '../store/slices/authSlice';
import { setExpenses } from '../store/slices/expensesSlice';
import store from '../store/store';

export const handleExpenses = () => {
  store.dispatch(fetchExpenses()).then((res) => {
    console.log('fetchExpenses res: ', res.payload);
    if (res.type === 'expenses/fetchExpenses/fulfilled') {
      store.dispatch(setExpenses(res.payload));
      return;
    }
    if (res.type === 'expenses/fetchExpenses/rejected') {
      console.error('fetchExpenses rejected');
      const errorInfo = res.payload as { message: string; status: number };

      console.error('fetchExpenses Error: ', errorInfo);
      if (errorInfo && errorInfo.status === 401) {
        store.dispatch(logout());
        toast.error('Session expired');
        throw new Error('Unauthorized');
      }

      if (errorInfo && errorInfo.status === undefined) {
        store.dispatch(logout());
        toast.error('Something went wrong');
        throw new Error('Something went wrong');
      }
      return;
    }
    console.log('fetchExpenses Error: ', res);
  });
};
