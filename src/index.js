import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState();
//   return (
//     <div>
//       <StarRating color="violet" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars.</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} />
    <StarRating
      maxRating={5}
      color="pink"
      size={30}
      className="test"
      messages={["terrible", "bad", "okay", "good", "top"]}
    />
    <StarRating
      maxRating={5}
      color="blue"
      size={30}
      className="test"
      messages={["terrible", "bad", "okay", "good", "top"]}
      defaultRating={3}
    /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
