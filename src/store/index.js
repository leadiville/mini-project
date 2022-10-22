
import { configureStore } from "@reduxjs/toolkit/";
import { displaySelectedInfo, modalSlice, sprintInfo } from "./appSlice";

export default configureStore({
    reducer: {
        toggleModal: modalSlice.reducer,
        toggleFinished: sprintInfo.reducer,
        toggleInfo: displaySelectedInfo.reducer,
    }
})