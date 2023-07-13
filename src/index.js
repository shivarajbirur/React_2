var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(<h1>Welcome to our React</h1>, document.getElementById("root"));

var newHeading = document.createElement("h1");
newHeading.innerHTML = "Hello World !!!";
document.getElementById("root").appendChild(newHeading);
