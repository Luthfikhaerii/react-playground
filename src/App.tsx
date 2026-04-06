import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { AuthProvider } from './features/context/AuthContext'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import { UserProvider } from './context/UserContext'

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
        <UserProvider>
        <RouterProvider router={router} />
        </UserProvider>
      </AuthProvider>
      </QueryClientProvider>
  )
}

export default App
