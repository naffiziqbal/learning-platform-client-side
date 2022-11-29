import logo from './logo.svg';
import './App.css';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';

function App() {
  return (
 <div className="">
  <RouterProvider router={router}>
  </RouterProvider>
 </div>
  );
}

export default App;

