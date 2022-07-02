import { useState, useMemo, useCallback, useRef } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import Places from "./places";
import Distance from "./distance";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;


const markers = [
//   { position:{ lat: xxxx, lng: xxxx },
//   icon:"name from assets",
//   name:"keyTree( this must be same as the key of the tree in the other file)"
// },
{ position:{ lat: 18.454035, lng: -66.055400 },
  icon:"assets/PRpalmIcon.jpg",
  name:"Puerto Rico Palm"
},
{ position:{ lat:41.42800971289783,lng: -74.05816160933095 },
  icon:"assets/paletteIcon.jpg",
  name:"palette"
},
{ position:{ lat: 41.4251, lng:-74.05951807045075 },
  icon:"assets/stormkingIcon.jpg",
  name:"fall"
}
,

{ position:{ lat: 21.015899705520305, lng: -101.25287127053629 },
  icon:"assets/guanajuatoIcon.jpg",
  name:"guanajuato"
}
,
{ position:{ lat: 31.214897879994844, lng:121.44734062748452 },
  icon:"assets/SHIcon.jpg",
  name:"SH"
}
, 
{ position:{ lat: 19.69, lng: -98.8430958950472 },
  icon:"assets/teotihuacanIcon.jpg",
  name:"teotihuacan"
}
,
{ position:{ lat: 40.66970094571208, lng:-73.97111481629075 },
  icon:"assets/prospectIcon.jpg",
  name:"prospect"
},

{ position:{ lat: 43.79594358498434, lng: 11.266039572825997 },
  icon:"assets/FlorenceIcon.jpg",
  name:"florence"
},

{ position:{ lat:40.758752870856846, lng: -73.97866873847632 },
  icon:"assets/rockfellerIcon.jpg",
  name:"rockfeller"
}

]

const  Map: React.FunctionComponent<{retrieveTree: any}> = (props) => {


  const mapRef = useRef<GoogleMap>();
  const center = useMemo<LatLngLiteral>(
    () => ({  lat: 18.454035, lng: -66.055400 }),
    []
  );
  const options = useMemo<MapOptions>(
    () => ({
      mapId: "b181cac70f27f5e6",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );



  const onLoad = useCallback((map) => (mapRef.current = map), []);
  const prPosition = {
    lat: 18.454035, lng: -66.055400 
  }
  const [selectedCenter, setSelectedCenter] = useState(prPosition);

  return (
    <div >
      <div className="map">
        <GoogleMap
          zoom={5}
          center={center}
          mapContainerClassName="map-container"
          // options={options}
          onLoad={onLoad}
        >
          {/* <Marker
            position={markers[0].position}
            icon={markers[0].icon}
            onClick={() => {
              props.retrieveTree(markers[0].name);
              }}
          /> */}
        {markers.map((marker)=>(
                      <Marker
            position={marker.position}
            icon={marker.icon}
            onClick={() => {
              props.retrieveTree(marker.name);
              }}
          />
        ))}
     

              {/* <InfoWindow
                  onCloseClick={() => {
                    setSelectedCenter(prPosition);
                  }}
                  position={{
                    lat: selectedCenter.lat,
                    lng: selectedCenter.lng
                  }}
              >
              </InfoWindow> */}
        </GoogleMap>
      </div>
    </div>
  );
}


export default Map;