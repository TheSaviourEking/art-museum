import { Route, useParams } from "react-router-dom/cjs/react-router-dom";
import ArtImageTile from "../ArtImageTile";

const GalleryView = ({ galleries }) => {
    const { galleryId } = useParams();
    const { name, objects } = galleries.find(gallery => gallery.id === parseInt(galleryId))
    const gallery = galleries.find(gallery => gallery.id === parseInt(galleryId))
    console.log(gallery)
    return (
        <>
            <h2>{name}</h2>
            <Route exact path='/galleries/:galleryId'>
                {objects.map(object => {
                    return <ArtImageTile key={object.id} art={object} galleryId={galleryId} />
                })}
            </Route>
        </>
    )
}

export default GalleryView;
