import { Route, useParams } from "react-router-dom/cjs/react-router-dom.min";
import ArtImageTile from "../ArtImageTile";

import './GalleryView.css';

import ArtDescription from "../ArtDescription";

const GalleryView = ({ galleries }) => {
    const { galleryId } = useParams();
    const gallery = galleries.find(gallery => gallery.id === parseInt(galleryId));
    const { name, objects } = gallery;

    return (
        <div>
            <h2>{name}</h2>
            <Route exact path='/galleries/:galleryId'>
                <div className="artImagePreview">
                    {
                        objects.map(artWork => {
                            return (
                                <ArtImageTile key={artWork.id} art={artWork} galleryId={galleryId} />
                            )
                        })
                    }
                </div>
            </Route>
            <Route path='/galleries/:galleryId/art/:artId'>
                <ArtDescription gallery={gallery} />
            </Route>
        </div>
    )
}

export default GalleryView;
