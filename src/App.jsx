import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HomePage from './pages';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/details/:title/:link/:desc' element={<DetailsPage/>} />
      </Routes>
    </Router>
    
    </div>
  )
}

export default App
