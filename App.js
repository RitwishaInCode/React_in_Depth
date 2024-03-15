//1:
// const heading2 = React.createElement(
//   "h3",
//   { id: "myHeading", xyz: "randomm" },
//   "Hello world using React"
// ); //basically the attributes passed
//takes in 3 inputs

// console.log(heading2); // JS object

// const root2 = ReactDOM.createRoot(document.getElementById("root")); //creation of root
// root2.render(heading2);

//2:
{
  /* <div id:"parent">
    <div id:child1>
        <h2>I am a h2 tag and child 1</h2>
        <h3>I am a h3 tag and child 2</h3>
    </div>
    <div id:child2>
    <p>cousin child 1</p>
    </div>
</di> */
}

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h2", {}, "I am a h2 tag and child 1"),
    React.createElement("h3", {}, "I am a h3 tag and child 2"),
  ]),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("p", {}, "cousin child")
  ),
]);

console.log(heading);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(heading);
