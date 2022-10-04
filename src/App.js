import SignUp from "./auth/SignUp"
import Login from "./auth/Login"
import {Routes, Route} from "react-router-dom"
import AppLayout from "./app pages";
import PageNotFound from "./app pages/PageNotFound";
import './index.css'

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<AppLayout/>} />
                <Route path="/register" >
                    <Route index element={<SignUp />} />
                    <Route path="login" element={<Login />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
        )
}
export default App;