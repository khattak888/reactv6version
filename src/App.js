// import Navbar from './Components/Navbar';
//  import Heading from './Components/Heading';
import { Routes,Route } from 'react-router-dom';

import './App.css';
// import { ContactPage } from './Components/Pages/Contact-us';
// import { AboutPage } from './Components/Pages/About-us';
import {HomePage} from './Components/Pages/Home'
import { TopicsPage } from './Components/Pages/topics';

// import { UserPage } from './Components/Pages/user';

function App() {
  return (
    <div className="App">
     {/* <Navbar links={[
       {to: '/', label:'HomePage'},
       {to: '/contact-us', label:'ContactPage'},
       {to: '/about-us', label:'AboutPage'},
     ]}/>
     <Routes>
        <Route path='/' element={<HomePage />} /> 
       <Route path='/:username' element={<UserPage />} />
       <Route path='/contact-us' element={<ContactPage />} />
       <Route path='/about-us' element={<AboutPage />} />
     </Routes> */}
     <Routes>
      <Route path = '/' element={<HomePage />} />
      <Route path = '/topics' element={<TopicsPage />} />
     </Routes>
    </div>
  );
}

export default App;
