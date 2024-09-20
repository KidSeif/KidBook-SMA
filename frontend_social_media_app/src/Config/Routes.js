import {createBrowserRouter} from 'react-router-dom'
import Signin from '../Pages/Signin';
import Register from '../Pages/Register';
import Home from '../Pages/Home';
import PageNotFound from '../Pages/PageNotFound';




const router = createBrowserRouter([
    {
      path: '/',
      element: <div> Home Page</div>,
      errorElement: <PageNotFound />,
    },
    {
      path : '/Signin',
      element : <Signin/>
    },
    {
      path : '/register',
      element : <Register />
    },
    {
      path : '/Home',
      element : <Home />
    },
    
  ]);


  export default router;