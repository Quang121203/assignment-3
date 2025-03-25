import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import { Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Report from './pages/report/Report';
import Search from './pages/search/Search';
import Ranking from './pages/ranking/Ranking';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="d-flex">
        <Sidebar />
        <Routes className="col-12">
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/search" element={<Search />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
