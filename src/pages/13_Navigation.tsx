import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom"

export default function Navigation() {

    //Navigasi pada function
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    const goToLogin = () => {
        navigate("/login", { replace: true })
    }

    //Tracking status navigasi : "idle" | "loading" | "submitting"
    const navigation = useNavigation()
    console.log(navigation.state);

    //Tracking lokasi saat ini
    const location = useLocation()
    console.log(location.pathname);
    console.log(location.search);

    return (
        <div>
            <h1>Navigation</h1>
            {/* Navigasi pada component */}
            {/* <Navigate to="/performance" /> */}

            {/* Navigasi tanpa reload */}
            <Link to="/performance">Go to Performance</Link>

            {/* Navigasi pada function */}
            <button onClick={goBack}>Go Back</button>
            <button onClick={goToLogin}>Go to Login</button>
        </div>
    )
}