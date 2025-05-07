// import ParentComponent from "./components/callbackHooks/ParentComponent";
// import DemoUseMemo from "./components/useMemoHook/DemoUseMemo";

// import Navbar from "./components/react-router/Navbar";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
// import Contact from "./pages/Contact";
import Rootlayout from "./layout/rootLayout/Rootlayout";
import ContactLayout from "./layout/contactLayout/ContactLayout";
import ContactInfo from "./components/contact-infos/ContactInfo";
import ContactForm from "./components/contact-infos/ContactForm";
import NotFound from "./components/404_page/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="*" element={<NotFound/>}/>

      </Route>
    )
  );
  return (
    <RouterProvider router={router}>
      {/* <ParentComponent/> */}
      {/* <DemoUseMemo/> */}

      {/* page routing demo */}
      {/* <a href="/about.html">About Page</a> */}

      {/* <Navbar /> */}
      {/* 
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
   */}
    </RouterProvider>
  );
}

export default App;
