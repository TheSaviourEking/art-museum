import { Link } from "react-router-dom/cjs/react-router-dom.min";

import './ArtDescription.css';

const ArtDescription = ({ gallery }) => {
    const { objects } = gallery;
    let id = 0;
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
                                console.log(artWork)
                                return (
                                    <div key={id++} className="artWork">
                                        <div>
                                            <img src={image.baseimageurl} alt={image.alttext}></img>
                                        </div>
                                        <div>
                                            <p>Description: {image.description ? image.description : 'description unavailable'}</p>
                                            <p>Copyright: {image.copyright ? image.copyright : 'copyright unavailable'}</p>
                                            <p>Technique: {image.technique ? image.technique : 'technique unavailable'}</p>
                                        </div>
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
