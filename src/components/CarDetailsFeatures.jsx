import React from "react";
import { useOutletContext } from "react-router-dom";

export default function CarDetailsFeatures() {
    const outletContextData = useOutletContext();
    const renderFeaturesElement = outletContextData.features.map(
        ({ name, description }, index) => {
            return (
                <div className="featureContainer" key={index}>
                    <h2>{name} :</h2>
                    <p>{description}</p>
                </div>
            );
        }
    );
    return (
        <div className="featuresContainerWrapper">
            <h1 className="featuresHeading">
                {outletContextData.specifications.brand}{" "}
                {outletContextData.name} Features :
            </h1>
            <div className="featuresContainer">{renderFeaturesElement}</div>
        </div>
    );
}
