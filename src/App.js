import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import SlBackgroundImage from "./Images/tunnelbana.jpg"
import Home from './component/HomeComponent';
import NavbarComponent from './component/Navbar/NavbarComponent';
import Box from '@mui/material/Box';
// backgroundImage: `url(${SlBackgroundImage})`

function App() {
  return (
    <>
    
    <Stack sx={{width:"100vw", height:"100vh", backgroundSize: "cover", position: "relative" }}>
      <NavbarComponent/>
        <Box sx={{width:"100vw", padding:"4vw"}} className="flex justify-center">
          <Routes>
            {/* If any page not match redirect to start page (insted of error page) */}
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
      </Box>
    </Stack></>
   
  );
}

export default App;
