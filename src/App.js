
import './App.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import GroupedTeamMembers from './GroupedTeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';
import {Routes,Route,} from 'react-router-dom';
import { DataProvider } from './context/DataContext';


function App() {

  
  return (
    <DataProvider> 
      <Nav/>
      
      <Header />
      <Routes>
            <Route path="/" element={ <Employees/>}>
      </Route>
        <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers/>}>

      </Route>
      
        <Route path="*" element={<NotFound/>}>

      </Route>
    
      
      </Routes>
      <Footer/>
      
    </DataProvider>
  );
}

export default App;
