import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import About from './about.jsx'
import Home from './Home.jsx'
import Projects from "./Projects.jsx"
import Contact from "./Contact.jsx"
import ContactModal from "./components/ContactModal.jsx"


function App () {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contactmodal" element={<ContactModal />} />
        </Routes>
    </Router>
    )
}

export default App

