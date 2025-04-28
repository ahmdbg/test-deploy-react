import { BrowserRouter, Routes, Route } from "react-router-dom"

import Gallery from "./pages/gallerys"
import Home from "./pages/Home"
import About from "./pages/About"
import Booking from "./pages/booking"
import AdminDashboard from "./pages/adminDashboard"
import Login from "./pages/Login"
import Contact from "./pages/contact"
import Store from "./pages/Store"
import Show from "./pages/show"

function App() {
  const isAdmin = localStorage.getItem("isAdmin") === "true"

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/admin" element={isAdmin ? <AdminDashboard /> : <Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/show" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
