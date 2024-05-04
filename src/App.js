import './App.css';

/* MINE */
import GalleryNavigation from './components/GalleryNavigation';
import harvardArt from './data/harvardArts';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <GalleryNavigation galleries={harvardArt.records} />
  )
}

export default App;
