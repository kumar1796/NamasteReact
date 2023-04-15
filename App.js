/*
* HMR- Hot Module Replacement
* File Watcher Algorithm
* Budling
* Minify
* Cleaning our code
* Dev and Production Build
* Super Fast build algorithm
* Image optimization
* Caching while Development
* Compression
* Compatible with older version of browser
* HTTPS on dev npx parcel index.html --https
* Port Number
* Consistent Hashing 
* Zero Config
* Browserslist -- https://www.npmjs.com/package/browserslist,  https://browserslist.dev/
*
*
*
* Transitive Dependencies- we have our pacakge manager which handles and takes care of our transitive dependencies our code 
*/

import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement("h1", {id: "title"}, "Heading 1");
const heading1 = React.createElement("h1", { id: "title" }, "Heading 1");
const heading2 = React.createElement("h2", { id: "title" }, "Heading2");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
// console.log(heading); //React Element is just an object in the end
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(container);
