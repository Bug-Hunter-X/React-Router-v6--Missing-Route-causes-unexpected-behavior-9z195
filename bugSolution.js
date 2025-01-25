```javascript
import { BrowserRouter, useRoutes } from 'react-router-dom';

function App() {
  let element = useRoutes([
    {path: "/", element: <Home/>},
    {path: "/about", element: <About/>},
    {path: "/contact", element: <Contact/>},
    {path: "*", element: <NotFound/>} // fallback route
  ]);
  return element;
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

function NotFound() {
  return <h1>404 Not Found</h1>;
}

export default App;
```