import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Classify from './pages/Classify/Classify';
import Classified from './pages/Classified/Classified';
import Segment from './pages/Segment/Segment';
import Segmented from './pages/Segmented/Segmented';
import Convert from './pages/Convert/Convert';
import Converted from './pages/Converted/Converted';
import NavUtil from './utils/Navbar/NavUtil';
import FooterUtil from './utils/Footer/FooterUtil';
import ProjectReport from './pages/ProjectReport/ProjectReport';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <Router>
      <NavUtil />
      <Routes>
        {/* Home Route */}
        <Route path='/' element={<Home />} />
        
        {/* Classifier Routes */}
        <Route path='/api/v1/tool/kidney-classify' element={<Classify />} />
        <Route path='/api/v1/tool/kidney-classified' element={<Classified />} />

        {/* Segment Routes */}
        <Route path='/api/v1/tool/kidney-segment' element={<Segment />} />
        <Route path='/api/v1/tool/kidney-segmented' element={<Segmented />} />

        {/* Converter Routes */}
        <Route path='/api/v1/tool/kidney-convert' element={<Convert />} />
        <Route path='/api/v1/tool/kidney-converted' element={<Converted />} />

        {/* Project Report Routes */}
        <Route path='/api/v1/tool/kidney-project' element={<ProjectReport />} />

        {/* Auth Routes */}
        <Route path='/api/v1/users/login' element={<Login />} />
        <Route path='/api/v1/users/register' element={<Register />} />
      </Routes>

      <FooterUtil />
    </ Router>
  );
}

export default App;
