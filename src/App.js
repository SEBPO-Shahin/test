
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Homepage from './components/pages/Homepage'
import Navbar from './components/header/Navbar';
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
import Details from './components/pages/Details';
import Bangladesh from './components/pages/Bangladesh';
import Login from './components/pages/Login';
import Politics from './components/pages/Politics';
import Economics from './components/pages/Economics';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Homepage />} />
      <Route path='details' element={<Details />} />
      <Route path='bangladesh' element={<Bangladesh />} />
      <Route path='politics' element={<Politics />} />
      <Route path='economics' element={<Economics />} />
      {/* <Route path='international' element={<Politics />} /> */}
      <Route path='login' element={<Login />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}/>
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Homepage />} />
    </Route>
    
  )
)

function App() {
  return (
   
  <RouterProvider router={router} />

  );
}

export default App;
