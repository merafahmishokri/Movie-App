import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import Details from './Pages/Details';
import NotFound from './Pages/NotFound';
import { Suspense } from 'react';
import SimpleBackdrop from './Components/Spinner';
import Error from './Pages/Error';
import Layout from './Pages/Layout';
import { Provider } from 'react-redux';
import  store  from "./Redux/store/store";
import Favorite from './Pages/Favorite';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import Login from './Pages/Login';

function App() {
  const router=createBrowserRouter([
    {
      
      path:"/",element:<Layout></Layout>,children:[
        {index:true,element:<Register></Register> ,errorElement:<NotFound></NotFound>},
        {path:"/login",element:<Login></Login>,errorElement:<NotFound></NotFound>},
        {path:"/home",element:<Home></Home>,errorElement:<NotFound></NotFound>},
        {path:"/about",element:<About></About>,errorElement:<NotFound></NotFound>},
        {path:"/contactUs",element:<ContactUs></ContactUs>,errorElement:<NotFound></NotFound>},
        {path:"/details/:id",element:<Details></Details>,errorElement:<NotFound></NotFound>},
        {path:"/favorite",element:<Favorite></Favorite>,errorElement:<NotFound></NotFound>},
        {path:"/profile",element:<Profile></Profile>,errorElement:<NotFound></NotFound>},
        {path:"*",element:<Error></Error>}
      ]
    }
    
  ])
  return (
    <Provider store={store}>
      <div className="App" style={{backgroundColor:'#191919'}}>
      <Suspense fallback={<SimpleBackdrop></SimpleBackdrop>}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </div>
    </Provider>
    
  );
}

export default App;
