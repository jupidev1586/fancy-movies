import { createStore } from "redux";

export const initialState = {
  modalData: {},
  isModalVisible: false
}


function modalReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_MODAL_ON':
      return { ...state, isModalVisible: true }
    case 'SET_MODAL_OFF':
      return { ...state, isModalVisible: false }
    case 'SET_MODAL_DATA':
      return { ...state, modalData: action.payload }
    default:
      return state
  }
}


const store = createStore(modalReducer, initialState);

export default store;