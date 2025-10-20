import Footer from './components/footer';
import Header from './components/header';
import './index.css';
// import About from './pages/about';
// import Hero from './pages/hero';
import AllRoutes from './routes/allRoutes';

function App() {
  return (
    <div className="App">
       <Header/>
       <AllRoutes/>
       <Footer/>
    </div>
  );
}

export default App;
