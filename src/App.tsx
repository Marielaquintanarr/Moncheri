import './App.css';
import './components/Header';
import { Header } from './components/Header';
import { MainImage } from './components/MainImage';

function App() {
  return (
    <>
      <div style={{alignItems: "center"}}>
        <Header />
        <MainImage />
      </div>
    </>
  )
}

export default App;
