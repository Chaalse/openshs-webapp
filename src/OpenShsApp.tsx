import { BrowserRouter } from "react-router-dom"
import AppRouter from "./routers/AppRouter"

export const OpenShsApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}