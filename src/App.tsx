import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { lazy } from "react"

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Customer = lazy(() => import('./pages/Customer'));
const Products = lazy(() => import('./pages/Products'));
const Transaction = lazy(() => import('./pages/Transaction'));


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="admin/dashboard" element={<Dashboard />} />
        <Route path="admin/customer" element={<Customer />} />
        <Route path="admin/products" element={<Products />} />
        <Route path="admin/transaction" element={<Transaction />} />
      </Routes>
    </Router>
  )
}

export default App