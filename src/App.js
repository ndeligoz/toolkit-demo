
import './App.css';
import Header from './components/Header';


import { Counter } from './features/counter/Counter';
import Footer from './Footer';


function App() {

  return (
    <div className="App">
      <Header />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
