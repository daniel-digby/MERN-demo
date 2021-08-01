import React from "react";
import FunctionalComponentTS from "./components/FunctionalComponentTS";
// import FunctionalComponentJS from "./components/FunctionalComponentJS";

const App = (): JSX.Element => {
  return (
    <div>
      <div>Hello world</div>
      <FunctionalComponentTS message={"props message"} />
    </div>
  );
};

export default App;
