import React from "react";
import { useOutletContext } from "react-router-dom";
import LazyImage from "./LazyImg";

export default function CarDetailsSpecifications() {
    const outletContextData = useOutletContext();
    const carSpecification = outletContextData.specifications;
    const carDimensions = outletContextData.dimensions;
    const formatLabel = (key) => {
        return key
            .replace(/([A-Z])/g, " $1")
            .replace(/_/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase());
    };
    const renderCarSpecifications = Object.entries(carSpecification).map(
        ([key, value]) => {
            return (
                <div key={key} className="specBox">
                    <h4 className="specLabel">{formatLabel(key)}</h4>
                    <p className="specValue">{value}</p>
                </div>
            );
        }
    );
    const renderCarDimensions = carDimensions.map((item, index) => (
        <div key={index} className="specBox">
            <h4 className="specLabel">{formatLabel(item.name)}</h4>
            <p className="specValue">{item.description}</p>
        </div>
    ));
    return (
        <div className="specificationsContainer">
            <h1>
                {outletContextData.specifications.brand}{" "}
                {outletContextData.name} {outletContextData.specifications.year}{" "}
                Specs :
            </h1>
            <div className="specificationWrapper">
                <h2>Drive :</h2>
                <div className="driveSpecs">{renderCarSpecifications}</div>
                <div className="spaceline"></div>
                <h2>Dimensions :</h2>
                {/* <div className="dimensionsWrapper">
                    <div className="driveSpecs">{renderCarDimensions}</div>
                    <div className="DimensionsImg">
                        <LazyImage
                            src={outletContextData.img}
                            alt={outletContextData.name}
                        />
                    </div>
                </div> */}
                <div className="driveSpecs">{renderCarDimensions}</div>
                <div className="spaceline spacelineBottom"></div>
            </div>
        </div>
    );
}
