import './App.css';
import '../components/Header';
import { Header } from '../components/Header';
import { MainImage } from '../components/MainImage';
import { VideoSection } from '../components/VideoSection';
import { CollageSection } from '../components/CollageSection';

export default function Homepage() {
  return (
    <>
      <div style={{alignItems: "center"}}>
        <Header />
        <MainImage />
        <VideoSection />
        <CollageSection />
      </div>
    </>
  )
}

