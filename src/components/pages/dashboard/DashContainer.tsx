import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  handleExpenses,
  handleUserExpenses,
} from "../../../helpers/handleExpenses";
import { ExpensesDeleteModal } from "../expenses/ExpensesDeleteModal";
import { ExpensesFormModal } from "../expenses/ExpensesFormModal";
import { PageNotFound } from "../pageNotFound/PageNotFound";
import { DashSideNav } from "./dashDrawer/DashSideNav";
import { DashNavBar } from "./dashNavBar/DashNavBar";
import { DashPage } from "./DashPage";
import { BillsPage } from "./financialControlPages/BillsPage";
import { BudgetsPAge } from "./financialControlPages/BudgetsPage";
import { SavingsPage } from "./financialControlPages/SavingsPage";
import { TExpensesPage } from "./transactionsPages/TExpensesPage";
import { TIncomePage } from "./transactionsPages/TIncomePage";
import { TTransactionsPage } from "./transactionsPages/TTransactionsPage";

export const DashContainer = () => {
  useEffect(() => {
    handleUserExpenses();
    handleExpenses();
  }, []);

  return (
    <div className="w-full flex border min-h-screen">
      <div className="max-lg:hidden">
        <DashSideNav />
      </div>
      <div className="flex flex-col w-full">
        <DashNavBar />
        <div className="p-6 bg-base-200 h-full">
          <ExpensesFormModal />
          <ExpensesDeleteModal />
          <Routes>
            <Route path="/" element={<DashPage />} />
            <Route path="expenses-all" element={<TExpensesPage />} />
            <Route path="income-all" element={<TIncomePage />} />
            <Route path="transactions-all" element={<TTransactionsPage />} />
            <Route path="budgets" element={<BudgetsPAge />} />
            <Route path="bills" element={<BillsPage />} />
            <Route path="savings" element={<SavingsPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
