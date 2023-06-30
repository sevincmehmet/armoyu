import "./App.css";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import {useState, Suspense} from "react"
export default function App() {
  return (
    <div className="App">
      <Suspense>
        <Router/>
      </Suspense>
    </div>
  );
}

function Router() {
  const [page, setPage] = useState("/");
  
  function navigate(url) {
    setPage(url)
  }

  let content;
  if(page === "/") {
    content = <Navbar navigate={navigate}/>
  } else if (page==="/loginPage"){
    content = <LoginPage navigate={navigate}/>
  }
  return content;
}
