import { Link } from "react-router-dom/cjs/react-router-dom.min";

import './ArtDescription.css';

const ArtDescription = ({ gallery }) => {
    const { objects } = gallery;
    return (
        <div>
            <h1>Art Description</h1>
            <Link to={`/galleries/${gallery.id}`}>Back to {gallery.name} Gallery</Link>
            <a href={gallery.url} >{gallery.name}</a>

            <div className="artImagePreview">
                {
                    objects.map(artWork => {
                        return (
                            artWork.images.map(image => {
                                return (
                                    <div className="artWork">
                                        <div>
                                            <img src={image.baseimageurl} alt={image.alttext}></img>
                                            </div>
                                        <p>{image.description}</p>
                                        <p>{image.copyrigt}</p>
                                        <p>{image.technique}</p>
                                    </div>
                                )
                            })
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ArtDescription;
