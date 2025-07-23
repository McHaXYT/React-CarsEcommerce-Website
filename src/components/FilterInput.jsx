import React from "react";

export default function FilterInput({
    labelTitle,
    searchParam,
    DataBaseMax,
    id,
    searchParams,
    setSearchParams,
    params,
    step,
    unit,
}) {
    const rawValue = searchParams.get(searchParam);
    const value =
        rawValue !== null && rawValue !== undefined
            ? Number(rawValue)
            : Number(DataBaseMax);

    return (
        <div
            className="priceFilterContainer searchFilterContainer"
            key={searchParam}
        >
            <label
                htmlFor={id}
                className="priceFilterLabel searchFilterContainerLabel"
            >
                <h2>{labelTitle} :</h2>{" "}
                <h4 className="priceFilterVal maxValueFilter">
                    {Number(value).toLocaleString()} {unit ? unit : null}
                </h4>
            </label>
            <input
                type="range"
                id={id}
                min={0}
                max={Number(DataBaseMax)}
                step={step}
                value={value}
                className="priceSlider searchFilterSlider"
                onChange={(e) => {
                    const newParams = {
                        ...params,
                        [searchParam]: e.target.value.trim(),
                        page: "1",
                    };
                    // Remove keys with empty string or undefined if you want
                    Object.keys(newParams).forEach(
                        (key) => newParams[key] === "" && delete newParams[key]
                    );
                    setSearchParams(newParams);
                }}
            />
        </div>
    );
}
