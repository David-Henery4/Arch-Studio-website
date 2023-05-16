# Frontend Mentor - Arch Studio multi-page website solution

This is a solution to the [Arch Studio multi-page website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/arch-studio-multipage-website-wNIbOFYR6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot) 
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users can:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email` or `Message` fields are empty should show "Can't be empty"
  - The `Email` is not formatted correctly should show "invalid email"
- **Bonus**: View actual locations on the contact page map. The addresses we have on the design are fictional, so you'll need to add real addresses for this bonus task.

### Screenshot

![Home Page Screenshot](./screenshot/screenshot-lrg.png)

### Links

Links to be added!!!!!!

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS/SASS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [TailwindCSS](https://tailwindcss.com) - CSS Utility Class library
- [React](https://reactjs.org/) - JS library
- [React-Router-6](https://reactrouter.com/en/main) - Routing Library for react
- [Vite](https://v3.vitejs.dev) - Bundler tool and Project setup
- [Leaflet.js](https://leafletjs.com) - JS Library for maps
- [React-Leaflet.js](https://react-leaflet.js.org) - React Component library for leaflet maps

### What I learned

This was really I project I used to practice and hone skills I already know, but one thing I did forget was how to dynamic load data onto a leaflet/react-leaflet.js map and because of this I had to do a bit of research on there documentation.

I found out when you have a "MapContainer" component, the only way you can access the "map" instance inside the "MapContainer" was though creating a component as a child component inside the "MapContainer", this would then enable us to access the different methods like ".setView()" which we can control the map with.

The reason it worked like this is because the "MapContainer" is using Reacts "ContextAPI" which enables all children inside of the context to have access and use the data and instances that the parent provides it though the "ContextAPI".

### Heres my Map component

It shows how I've created a basic setup in order to update the map dynamicly

```js
// MAP COMPONENT

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

// Child component we use to set the dynamic data
function SetViewOnClick({ coords, activeZoomLevel }) {
  const map = useMap();
  map.setView(coords, activeZoomLevel);
  //
  return null;
}

// The main Map component & MapContainer component
const Map = ({ centerCoords, activeZoomLevel }) => {
  //
  return (
    <section className="col-start-1 col-end-13 w-full h-[365px] pb-16 smTab:pb-44 smTab:h-[560px] mdTab:col-start-2 mdTab:col-end-12">
      <MapContainer
        id="map-section"
        style={{ height: "100%", width: "100%" }}
        className="h-full w-full relative"
        center={centerCoords}
        zoom={activeZoomLevel}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[32.11579138622649, -96.34709602636889]}>
          <Popup>Main Office</Popup>
        </Marker>
        <SetViewOnClick
          coords={centerCoords}
          activeZoomLevel={activeZoomLevel}
        />
        <Marker position={[35.97417483866054, -83.36125730935075]}>
          <Popup>Office II</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default Map;
```

### Continued development

Using and building a section with a dynamic map again was fun, and in the future I want to maybe build a few projects around the idea of using and showing dynamic data on a map, which could be really fun to look into going forward.

### Useful resources

- [React-Leaflet.js Documentation](https://react-leaflet.js.org) - I had to reference as a reminder of how to dynamicly update the map to show the new coordinates.

## Author

- Website - [DJHwebdevelopment](https://www.djhwebdevelopment.com)
<!-- FONTEND MENTOR NEEDS UPDATING -->
- Frontend Mentor - [@David-Henery4](https://www.frontendmentor.io/profile/yourusername)
- LinkenIn - [David Henery](https://www.linkedin.com/in/david-henery-725458241)
