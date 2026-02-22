import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { AuthProvider } from './context/AuthContext'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

function App() {
  // return (
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route element={<ProtectedRoute data={{ role: "admin" }}/>}>
  //       <Route path="/about" element={<About />} />
  //     </Route>
  //     <Route path="/contact" element={<ProtectedRouteSingle><Contact /></ProtectedRouteSingle>}/>
  //   </Routes>
  // )
  return (
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
