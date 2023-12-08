import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import NavBar from "./pages/Navigation"
import AboutPage from "./pages/AboutPage"
import ProjectPage from "./pages/ProjectPage"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="Home" element={<HomePage />} />
          <Route path="About" element={<AboutPage />} />
          <Route path="Projects" element={<ProjectPage />} />
          <Route path="Contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
