import React from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/index";

const Map = () => {
  const [currentLocation, setCurrentLocation] = React.useState(null);

  const handleMapClick = async (e) => {
    try {
      const { lat, lng } = e.latLng;

      const objValue = {
        questOne: {
          location: { lat: lat(), lng: lng() },
          timeStamp: new Date().toISOString(),
          next: {
            questTwo: {
              location: {
                lat: lat() + (Math.random() - 0.1) * 0.08,
                lng: lng() + (Math.random() - 0.1) * 0.1,
              },
              timeStamp: new Date().toISOString(),
              next: {
                questThree: {
                  location: {
                    lat: lat() + (Math.random() - 0.1) * 0.08,
                    lng: lng() + (Math.random() - 0.1) * 0.1,
                  },
                  timeStamp: new Date().toISOString(),
                },
              },
            },
          },
        },
      };

      setCurrentLocation(objValue);

      await addDoc(collection(db, "locations"), objValue);
    } catch (error) {
      console.error("Error adding document to Firestore:", error);
    }
  };

  return (
    <LoadScript googleMapsApiKey={"AIzaSyC4AC-78n8gBfvox2Zdh5vncf09lP1Ih1o"}>
      <GoogleMap
        center={{ lat: -34.397, lng: 150.644 }}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        zoom={12}
        onClick={handleMapClick}
      >
        {currentLocation && (
          <>
            <Marker
              position={currentLocation.questOne.location}
              label={"1"}
            ></Marker>
            <Marker
              position={currentLocation.questOne.next.questTwo.location}
              label={"2"}
            ></Marker>
            <Marker
              position={
                currentLocation.questOne.next.questTwo.next.questThree.location
              }
              label={"3"}
            ></Marker>
          </>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);

// import { addDoc, collection } from "@firebase/firestore";
// import { useState } from "react";
// import {
//   withGoogleMap,
//   withScriptjs,
//   GoogleMap,
//   Marker,
//   InfoWindow,
// } from "react-google-maps";
// import { db } from "../firebase";

// const Map = withScriptjs(
//   withGoogleMap(() => {
//     const [currentLocation, setCurrentLocation] = useState(null);

//     const handleMapClick = async (e) => {
//       try {
//         const { lat, lng } = e.latLng;
//         const objValue = {
//           questOne: {
//             location: { lat: lat(), lng: lng() },
//             timeStamp: new Date().toISOString(),
//             next: {
//               questTwo: {
//                 location: {
//                   lat: lat() + (Math.random() - 0.1) * 0.08,
//                   lng: lng() + (Math.random() - 0.1) * 0.1,
//                 },
//                 timeStamp: new Date().toISOString(),
//                 next: {
//                   questThree: {
//                     location: {
//                       lat: lat() + (Math.random() - 0.1) * 0.08,
//                       lng: lng() + (Math.random() - 0.1) * 0.1,
//                     },
//                     timeStamp: new Date().toISOString(),
//                   },
//                 },
//               },
//             },
//           },
//         };
//         setCurrentLocation(objValue);

//         const res = await addDoc(
//           collection(db, "locations", { location: objValue })
//         );

//         console.log("Document added:", res);
//       } catch (error) {
//         console.error("Error adding document:", error);
//       }
//     };

//     return (
//       <GoogleMap
//         defaultZoom={11.5}
//         defaultCenter={{ lat: 43.0902, lng: -75.7129 }}
//         onClick={handleMapClick}
//       >
//         {currentLocation && (
//           <>
//             <Marker position={currentLocation.questOne.location}>
//               <InfoWindow>
//                 <div>Quest 1 Location</div>
//               </InfoWindow>
//             </Marker>
//             <Marker position={currentLocation.questOne.next.questTwo.location}>
//               <InfoWindow>
//                 <div>Quest 2 Location</div>
//               </InfoWindow>
//             </Marker>
//             <Marker
//               position={
//                 currentLocation.questOne.next.questTwo.next.questThree.location
//               }
//             >
//               <InfoWindow>
//                 <div>Quest 3 Location</div>
//               </InfoWindow>
//             </Marker>
//           </>
//         )}
//       </GoogleMap>
//     );
//   })
// );

// export default Map;
