import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
       {/* header */}
       <Header />
       

       {/* body */}
      <div className="app__body">
            {/* sidebar */}
            <Sidebar />
            {/* feeds */}
            <Feed />
            {/*Live widgets */}
      </div>
       
       
           
    </div>
  );
}

export default App;
