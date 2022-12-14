import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { DashboardRoutes } from "./DashboardRoutes"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={ 
          <PublicRoutes>
            {/* Colocar el componente a proteger */}
            <Login/>
            
          </PublicRoutes>
        } />

        <Route path="/register" element={
          <PublicRoutes>
            <Register/>
          </PublicRoutes>
        } />

        <Route path='/*' element={
          <PrivateRoutes>
            <DashboardRoutes/>
          </PrivateRoutes>
          
        } />

      </Routes>
    </BrowserRouter>
  )
}
