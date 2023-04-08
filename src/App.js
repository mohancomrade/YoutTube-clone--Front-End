import "./App.css";
import Header from "./Header";
import RecomendedVideos from "./RecomendedVideos";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Search from "./Search";
import SearchPage from "./SearchPage";
// import Search from "@mui/icons-material/Search";
// import Home from "@mui/icons-material/Home";



function App() {
  return (
    <div className="app">

      <Router>
      {<Header/>}

       <div className="app-page">

      <Routes>
        <Route path="/search/:searchTerm" element={<><Sidebar/><SearchPage/></>}>
             {/* <Search/> */}
           </Route>
        <Route path="/" element={ < ><Sidebar/><RecomendedVideos/></>}/>
        <Route path="/sidebar" element={<Sidebar/>} /> 
        <Route path="/recomendvideos" element={<RecomendedVideos/>} />
       </Routes>

      </div>

      </Router> 
    

        
         {/* <Header />

      <div className="app-page">

        <Sidebar/>
        <RecomendedVideos/>
      </div>  */}
       
    </div>
  );
}

export default App;
