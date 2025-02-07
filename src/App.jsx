import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import About from './about.jsx'
import Home from './Home.jsx'


export default function App () {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </Router>
    )
}


