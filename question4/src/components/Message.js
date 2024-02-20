import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { ReactDOM } from "react";
const Message = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisiblity = () => {
    setVisible(!visible);
  };
  return (
    <React.Fragment>
      <a href="#" onClick={toggleVisiblity}>
        Want to buy a new car?
      </a>
      {isVisible && <p>Call +11 22 33 44 now!</p>}
    </React.Fragment>)
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Message />)
setTimeout(() => {
  console.log("Before Click: " + ReactDOM.innerHTML);
});
document.querySelector("a").click();
setTimeout(() => {
  console.log("After Click:" + ReactDOM.innerHTML);
})


export default Message;
