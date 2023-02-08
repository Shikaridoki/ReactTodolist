
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import './style.scss'
import {useContext, useEffect} from "react";
import {CustomContext} from "./Utils/Context";

const App = () => {
    const {setUser,user} = useContext(CustomContext)
    useEffect(() => {
        if (localStorage.getItem('user') !== null){
            setUser(JSON.parse((localStorage.getItem('user'))))
        }
    },[])

    return (
        <>
          <Routes>

            <Route path={'/'} element={<Home/>}/>
              <Route path={'/register'} element={<Register/>}/>
            <Route path={'/login'} element={<Login/>}/>
          </Routes>

        </>
    );
};

export default App;