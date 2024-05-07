import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const App = () => {
  const mapRef = useRef(null);
  const [selectedRoute, setSelectedRoute] = useState(null);

  useEffect(() => {
    const routes = [
      [
        [40, -100],
        [42, -98],
        [38, -95],
      ],
      [
        [35, -110],
        [37, -108],
        [33, -105],
      ],
      [
        [45, -115],
        [43, -112],
        [41, -110],
      ],
      [
        [32, -120],
        [34, -118],
        [36, -115],
      ],
      [
        [48, -100],
        [46, -98],
        [44, -95],
      ],
      [
        [30, -105],
        [32, -103],
        [34, -100],
      ],
      [
        [38, -115],
        [36, -113],
        [34, -110],
      ],
      [
        [47, -120],
        [45, -118],
        [43, -115],
      ],
      [
        [37, -100],
        [39, -98],
        [41, -95],
      ],
      [
        [42, -105],
        [44, -103],
        [46, -100],
      ],
    ];

    const map = L.map(mapRef.current, {
      center: [40, -100],
      zoom: 5,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    routes.map((route, index) => {
      const polyline = L.polyline(route, {
        color: selectedRoute === index ? "#ff0000" : "#3388ff",
        weight: selectedRoute === index ? 5 : 5,
        opacity: 0.7,
        clickable: true,
        distance: 40,
      }).addTo(map);

      polyline.on("click", () => {
        setSelectedRoute(index);
      });

      return polyline;
    });

    return () => {
      map.remove();
    };
  }, [selectedRoute]);

  return (
    <div id="map" ref={mapRef} style={{ height: "100vh", width: "100%" }}></div>
  );
};

export default App;
