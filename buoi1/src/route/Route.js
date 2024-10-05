import {createBrowserRouter,
  RouterProvider} from 'react-router-dom';
  import {Login} from '../header';
  import {App} from '../App';
  import {Hello} from '../hello';
  import {Car} from '../car';


  export const router = createBrowserRouter([
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/",
      element:<App/>
    },
    {
      path:"/about",
      element:<div>About</div>
    },
    {
      path:"/hello",
      element:<Hello/>
    },
    {
      path:"/car",
      element:<Car/>
    },
    {
      path:"*",
      element:<div>Không tìm thấy trang web theo yêu cầu</div>
    }
  ]);
  export {
    createBrowserRouter,
    RouterProvider,
    Login,
    App,
    Hello,
    Car
  }