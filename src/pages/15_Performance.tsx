import { Suspense, lazy } from "react"

const LazyPage = lazy(()=> import("../components/layout/LazyLoading"))

//Lazy Loading
export default function Performance() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyPage />
        </Suspense>
    )
}