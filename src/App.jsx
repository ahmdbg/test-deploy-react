import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"

// Lazy load components
const Gallery = lazy(() => import("./pages/Gallerys"))
const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Booking = lazy(() => import("./pages/booking"))
const AdminDashboard = lazy(() => import("./pages/adminDashboard"))
const Login = lazy(() => import("./pages/Login"))
const Contact = lazy(() => import("./pages/Contact"))
const Store = lazy(() => import("./pages/Store"))
const Show = lazy(() => import("./pages/Show"))
const KonfirmasiPage = lazy(() => import("./pages/KonfirmasiPage"))

function App() {
  const isAdmin = localStorage.getItem("isAdmin") === "true"

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/admin" element={isAdmin ? <AdminDashboard /> : <Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<Store />} />
            <Route path="/show" element={<Show />} />
            <Route path="/konfirmasi/:id" element={<KonfirmasiPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
