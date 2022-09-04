import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import {Routes, Route} from "react-router-dom"
import AppLayout from "./components/AppLayout";
import './index.css'
const App = () => {
   
    return (
        <>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/username" element={<AppLayout />} />
                <Route path="/login" element={<Login />}/>
            </Routes>
        </>        
        )
}
export default App;