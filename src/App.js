import Map from "./components/map";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Google Map Test Task</h1>
      <div style={{ width: "100%", height: "500px" }}>
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC4AC-78n8gBfvox2Zdh5vncf09lP1Ih1o&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}

export default App;
