import React from "react";
import FilterInput from "../components/FilterInput";
import SortInput from "./SortInput";

export default function AllFilters({
    searchParams,
    setSearchParams,
    params,
    metaData,
}) {
    return (
        <>
            <h2 className="filtersContainerHeading">Sorting :</h2>
            <div className="sortingSearch">
                <SortInput
                    searchLabel={"By Price"}
                    firstLabel={"Highest To Lowest"}
                    secondLabel={"Lowest To Highest"}
                    idFirst={"forDescPriceInputRadio"}
                    firstsearchParamValue={"descending"}
                    idSecond={"forAscePriceInputRadio"}
                    secondsearchParamValue={"ascending"}
                    searchParam={"sortByPrice"}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    params={params}
                />
                <SortInput
                    searchLabel={"By Seating Capacity"}
                    firstLabel={"Highest To Lowest"}
                    secondLabel={"Lowest To Highest"}
                    idFirst={"forDescSeatingCapacityInputRadio"}
                    firstsearchParamValue={"descending"}
                    idSecond={"forAsceSeatingCapacityInputRadio"}
                    secondsearchParamValue={"ascending"}
                    searchParam={"sortBySeatingCapacity"}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    params={params}
                />
                <SortInput
                    searchLabel={"By Range"}
                    firstLabel={"Highest To Lowest"}
                    secondLabel={"Lowest To Highest"}
                    idFirst={"forDescRangeInputRadio"}
                    firstsearchParamValue={"descending"}
                    idSecond={"forAsceRangeInputRadio"}
                    secondsearchParamValue={"ascending"}
                    searchParam={"sortByRange"}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    params={params}
                />
                <SortInput
                    searchLabel={"By Rating"}
                    firstLabel={"Highest To Lowest"}
                    secondLabel={"Lowest To Highest"}
                    idFirst={"forDescRatingInputRadio"}
                    firstsearchParamValue={"descending"}
                    idSecond={"forAsceRatingInputRadio"}
                    secondsearchParamValue={"ascending"}
                    searchParam={"sortByRating"}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    params={params}
                />
            </div>
            <div className="spaceline"></div>
            <h2 className="filtersContainerHeading">Filtering :</h2>
            <div className="filteringSearch">
                <FilterInput
                    labelTitle={"Max Price"}
                    searchParam={"maxPrice"}
                    DataBaseMax={metaData.maximumPrice}
                    id={"forMaxPrice"}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    params={params}
                    step={250}
                    unit={"$"}
                    key={"maxPrice"}
                />
                <FilterInput
                    labelTitle={"Max Seats"}
                    searchParam={"maxSeats"}
                    DataBaseMax={metaData.maximumSeats}
                    id={"forMaxSeats"}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    params={params}
                    step={1}
                    unit={""}
                    key={"maxSeats"}
                />
                <FilterInput
                    labelTitle={"Max Range"}
                    searchParam={"maxRange"}
                    DataBaseMax={metaData.maximumRange}
                    id={"forMaxRange"}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    params={params}
                    step={50}
                    unit={"Miles"}
                    key={"maxRange"}
                />
            </div>
            <div className="spaceline spacelineBottom"></div>
        </>
    );
}
