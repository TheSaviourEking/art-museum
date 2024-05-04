import './App.css';

/* MINE */
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import harvardArt from './data/harvardArts';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='page-wrapper'>
      <GalleryNavigation galleries={harvardArt.records} />
      <Route path='/galleries/:galleryId'>
        <GalleryView galleries={harvardArt.records}/>
      </Route>
    </div>
  )
}

export default App;
