import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderAllowlistForm from "./components/headerAllowlist.tsx";

const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element= {<HeaderAllowlistForm/>}/> 
        </Routes>
    )
}

export default AppRoutes; 


