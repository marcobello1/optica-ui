import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
const PrivateRouter = ({children}) => {
   // const navigate = useNavigate()
const user = useUser()
if (user) {
    return children
} else {
    return <Navigate to={"/login"} />;}
}
export default PrivateRouter