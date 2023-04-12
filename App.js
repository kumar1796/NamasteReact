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
