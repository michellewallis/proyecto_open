import React from "react";
import "./App.scss";
import ProductInformation from "./views/ProductInformation";
import Form from "./views/Form";
import Feedback from "./views/Feedback";
import FeedbackError from "./views/FeedbackError";
import { useState } from "react";
import { Stepper } from "react-form-stepper";


function App() {
    const [step, setStep] = useState(1);

    const CurrentStep = () => {
        if (step === 1) return <ProductInformation setStep={setStep} />;
        if (step === 2) return <Form setStep={setStep} />;
        if (step === 3) return <Feedback />;
        if (step === 4) return <FeedbackError />;
    };

    return (
        <>
            <Stepper
                className="stepper"
                steps={[
                    { label: "Step 1" },
                    { label: "Step 2" },
                    { label: "Step 3" },
                ]}
                activeStep={step - 1}
            />
            <div className="App">
                <CurrentStep />
            </div>
        </>
    );
}

export default App;
