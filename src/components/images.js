import React from "react";
import Card from "./card";
import { createApi } from "unsplash-js";


const unsplash = createApi({
    accessKey: "nl0x_yI9mDLWbd7O_D-jLCfexqjJO4nMLy7QXf_ZFJs",
})

export default function Images(props) {
    const [images, setImages] = React.useState([])
    if(props.query==""){
        unsplash.photos.list({}).then(result => {
            setImages(result.response.results)
        })
    }

    React.useEffect(() => {
        setImages([])
        const searchPhotos = async => {
            unsplash.search.getPhotos({query:props.query}).then(result => {
                setImages(result.response.results)
            })
        }
        searchPhotos();

    }, [props.query])




    return (
        <div className="thumbnails">
            {!images ? (
                <span className='load'>Loading some awesome Images...</span >
            ) : (
                images.map((image) => (
                    <Card 
                    src={image.urls.thumb}
                    dp={image.user.profile_image.small}
                    dp2={image.user.profile_image.large}
                    name={image.user.name}
                    username={image.user.username}
                    likes={image.likes}
                    regular={image.urls.regular}
                    darkMode = {props.darkMode}
                    />
                ))
            )}
        </div>
    )
}