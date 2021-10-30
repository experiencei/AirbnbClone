import { useState , useEffect} from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map() {
    return (
        <ReactMapGL
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/ryandungl3/cks5h97v61bnt18p5kpzhxqvu"
            mapboxApiAccessToken={process.env.mapbox_key}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
            {...viewport}
    > 
    
    
    
    </ReactMapGL>
    )
}

export default Map
