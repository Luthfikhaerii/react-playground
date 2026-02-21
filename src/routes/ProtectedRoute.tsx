import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({data}: {data: {role: string} | null}) {
  if(data?.role !== "admin") return <Navigate to="/" replace/>
  return <Outlet/>
}