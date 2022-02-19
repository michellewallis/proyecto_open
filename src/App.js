import React from "react";
import "./App.scss";
import ProductInformation from "./views/ProductInformation";
import Form from "./views/Form";
import Feedback from "./views/Feedback";


function App() {
    return (
        <div className="App">
            {<ProductInformation />}
             {/* { <Form /> }
          { <Feedback />}   */}
        </div>
    );
}

export default App;
