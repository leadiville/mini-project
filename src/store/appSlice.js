
import { createSlice } from "@reduxjs/toolkit";
import { FaAcquisitionsIncorporated } from "react-icons/fa";

export const modalSlice = createSlice({
    name: 'toggle-modal',
    initialState: {
        sprintModal: false,
        engineerModal: false,
    },
    reducers: {
        openSprintModal(state) {
            state.sprintModal = true
        },
        closeSprintModal(state) {
            state.sprintModal = false
        },
        openEngModal(state) {
            state.engineerModal = true
        },
        closeEngModal(state) {
            state.engineerModal = false
        }
    }
})

export const sprintInfo = createSlice({
    name: "sprint-info",
    initialState: {
        isCompleted: false,
    },
    reducers: {
        finishedProjects(state) {
            state.isCompleted = !state.isCompleted
        }
    }
})

export const displaySelectedInfo = createSlice({
    name: "confirm-notification",
    initialState: {
        viewSprints: false,
        viewEngineers: false
    },
    reducers: {
        displaySprints(state,) {
            state.viewSprints = true;
        },
        displayNoSprints(state) {
            state.viewSprints = false 
        },
        displayEngineers(state) {
            state.viewEngineers = true;
        },
        displayNoEngineers(state) {
            state.viewEngineers = false;
        }
    }
})
export const { finishedProjects } = sprintInfo.actions
export const { displaySprints, displayEngineers, displayNoEngineers, displayNoSprints } = displaySelectedInfo.actions
export const { openSprintModal, openEngModal, closeEngModal, closeSprintModal } = modalSlice.actions