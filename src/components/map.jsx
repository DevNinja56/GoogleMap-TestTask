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
