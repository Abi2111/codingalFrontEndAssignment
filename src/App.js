import './App.css';
import { useReducer } from 'react';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Posts from './Pages/PostsPage';
import { Routes, Route } from 'react-router-dom';
import PassengersPage from './Pages/PassengersPage';

const initalState = {
  modalOpen: false,
  endClassStatus: '',
  otherReason: false,
  endClass: true,
};
const reducer = function (state, action) {
  switch (action.type) {
    case 'modalopen':
      return { ...state, modalOpen: true };
    case 'modalclose':
      return {
        ...state,
        modalOpen: false,
        otherReason: false,
        endClassStatus: '',
      };
    case 'Class Completed':
      return { ...state, endClassStatus: 'completed' };
    case 'Class interrupted/aborted':
      return { ...state, endClassStatus: 'Class interrupted/aborted' };
    case 'Other reason':
      return { ...state, otherReason: true };
    case 'endClass':
      return {
        ...state,
        endClass: false,
        modalOpen: false,
        otherReason: false,
        endClassStatus: '',
      };
    default:
      return {
        ...state,
      };
  }
};
function App() {
  const [states, dispatch] = useReducer(reducer, initalState);
  return (
    <div className="App">
      <header>
        <Navbar dispatch={dispatch} states={states} />
      </header>
      <main>
        <Modal states={states} dispatch={dispatch} />
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ textAlign: 'center', fontSize: '2rem' }}>
                Home Page
              </div>
            }
          />
          <Route path="/posts" element={<Posts />} />
          <Route path="/passengers" element={<PassengersPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
