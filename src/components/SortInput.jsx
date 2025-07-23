import React from "react";

export default function SortInput({
    searchLabel,
    firstLabel,
    secondLabel,
    idFirst,
    firstsearchParamValue,
    idSecond,
    secondsearchParamValue,
    searchParam,
    searchParams,
    setSearchParams,
    params,
}) {
    return (
        <div className="priceSortingContainer searchFilterContainer">
            <div className="labelContainer">
                <h2>{searchLabel} : </h2>
                <label
                    htmlFor={idFirst}
                    className={`priceSortingLabel searchFilterContainerLabel customRadio`}
                >
                    <h2
                        id={
                            searchParams.get(searchParam) ===
                            `${firstsearchParamValue}`
                                ? "checkBoxTicked"
                                : ""
                        }
                    >
                        {firstLabel} :
                    </h2>
                    <input
                        type="radio"
                        id={idFirst}
                        checked={
                            searchParams.get(searchParam) ===
                            `${firstsearchParamValue}`
                        }
                        className={`priceSortingcheckBox searchFilterSlider`}
                        onChange={(e) => {
                            const newParams = new URLSearchParams(params);
                            // Remove all sort-related params
                            newParams.delete("sortByPrice");
                            newParams.delete("sortBySeatingCapacity");
                            newParams.delete("sortByRange");
                            newParams.delete("sortByRating");
                            // Set the selected one
                            newParams.set(
                                searchParam,
                                `${firstsearchParamValue}`
                            );
                            // Always reset page to 1 on sort
                            newParams.set("page", "1");
                            setSearchParams(newParams);
                        }}
                    />
                    <span className="radioVisual"></span>
                </label>
                <label
                    htmlFor={idSecond}
                    className="priceSortingLabel searchFilterContainerLabel customRadio"
                >
                    <h2
                        id={
                            searchParams.get(searchParam) ===
                            `${secondsearchParamValue}`
                                ? "checkBoxTicked"
                                : ""
                        }
                    >
                        {secondLabel} :
                    </h2>
                    <input
                        type="radio"
                        id={idSecond}
                        checked={
                            searchParams.get(searchParam) ===
                            `${secondsearchParamValue}`
                        }
                        className="priceSortingcheckBox searchFilterSlider"
                        onChange={(e) => {
                            const newParams = new URLSearchParams(params);
                            // Remove all sort-related params
                            newParams.delete("sortByPrice");
                            newParams.delete("sortBySeatingCapacity");
                            newParams.delete("sortByRange");
                            newParams.delete("sortByRating");
                            // Set the selected one
                            newParams.set(
                                searchParam,
                                `${secondsearchParamValue}`
                            );
                            // Always reset page to 1 on sort
                            newParams.set("page", "1");
                            setSearchParams(newParams);
                        }}
                    />
                    <span className="radioVisual"></span>
                </label>
            </div>
        </div>
    );
}
