import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
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
      <Switch>
        <Route exact path='/'>
          <h2>Harvard Art Museum</h2>
          <p>Look, but Don't Touch. Please select a Gallery in the navigation bar</p>
        </Route>
        <Route path='/galleries/:galleryId'>
          <GalleryView galleries={harvardArt.records} />
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
