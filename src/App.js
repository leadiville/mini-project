import SignUp from "./auth/SignUp"
import Login from "./auth/Login"
import { Routes, Route } from "react-router-dom"
import AppLayout from "./app pages";
import './index.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSprintModal, closeEngModal, displayEngineers, displaySprints } from "./store/appSlice";
import { NewSprintModal } from "./app-components/sprintInfo-components/NewSprintModal"
import { ModalEngForm } from "./app-components/engineers-info/modalEngForm";
import PageNotFound from "./app pages/PageNotFound";

const App = () => {

    const addSprintBtn = useSelector((state) => state.toggleModal.sprintModal)
    const addEngBtn = useSelector((state) => state.toggleModal.engineerModal)
    const [formInputs, setFormInputs] = useState({})
    const [allSprints, setAllSprints] = useState(getStoredSprint)
    const [engInput, setEngInput] = useState({})
    const [allEngineers, setAllEngineers] = useState(getStoredEng)
    const dispatch = useDispatch()
    

    function getStoredSprint() {
        const storedSprint = localStorage.getItem("allSprints")
        return storedSprint ? JSON.parse(storedSprint) : []
    }
    function getStoredEng() {
        const storedEngineer = localStorage.getItem("allEngineers")
        return storedEngineer ? JSON.parse(storedEngineer) : []
    }

    useEffect(() => {
        localStorage.setItem('enginInput', JSON.stringify(engInput))
    }, [engInput])
    useEffect(() => {
        localStorage.setItem('sprintInput', JSON.stringify(formInputs))
    }, [formInputs])
    useEffect(() => {
        localStorage.setItem("allSprints", JSON.stringify(allSprints))
    }, [allSprints])
    useEffect(() => {
        localStorage.setItem("allEngineers", JSON.stringify(allEngineers))
    }, [allEngineers])

    const submitSprintForm = (e) => {

        e.preventDefault()
        let storedInput = localStorage.getItem('sprintInput')
        setAllSprints([...allSprints, JSON.parse(storedInput)])
        dispatch(closeSprintModal())
        dispatch(displaySprints())
    }

    const handleSprintInputChange = (name, value) => {
        setFormInputs({ ...formInputs, [name]: value })
    }

    function delSprint(sprintId) {
        setAllSprints(allSprints.filter((each, id) => id !== sprintId))
    }

    function delEngineer(engineerId) {
        setAllEngineers(allEngineers.filter((each, id) => id !== engineerId))
    }

    const submitEngForm = (e) => {
        e.preventDefault()
        let storedEngData = localStorage.getItem('enginInput')
        const newAllEng = setAllEngineers([...allEngineers, JSON.parse(storedEngData)])
        localStorage.setItem("storedEng", JSON.stringify(newAllEng))
        dispatch(closeEngModal())
        dispatch(displayEngineers())
    }

    function handleEngInputChange(name, value) {
        setEngInput({ ...engInput, [name]: value })
    }

    return (
        <>
            {addSprintBtn && <NewSprintModal handleChange={handleSprintInputChange} handleSubmit={submitSprintForm} />}
            {addEngBtn && <ModalEngForm handleChange={handleEngInputChange} handleSubmit={submitEngForm} />}
            <Routes>
                <Route path="/" element={<AppLayout engineers={allEngineers} sprints={allSprints} delSprint={delSprint} handleDel={delEngineer} 
                />} />
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

