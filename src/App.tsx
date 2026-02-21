import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { AuthProvider } from './context/AuthContext'

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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
