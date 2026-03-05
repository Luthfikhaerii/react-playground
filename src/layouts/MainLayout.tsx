import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

export default function MainLayout() {
    //Suspense Fallback untuk createBrowserRouter (karena sudah ada sistem suspense sendiri)
    const navigation = useNavigation()

    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                {navigation.state === "loading" ? (
                    <div className="flex justify-center items-center h-full">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : (
                    <Outlet />
                )}
            </div>
            <Footer />
        </>
    )
}