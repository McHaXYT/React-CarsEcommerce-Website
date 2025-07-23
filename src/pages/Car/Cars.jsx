import React, { Suspense, useState, useEffect, useRef } from "react";
import { useLoaderData, Await, useSearchParams, Link } from "react-router-dom";
import fetchCars from "../../api/api";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import CarCard from "../../components/CarCard";
import AllFilters from "../../components/AllFilters";
import FilterOverview from "../../components/FilterOverview";

export async function loader({ request }) {
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || "1";
    const perPage = url.searchParams.get("perPage") || "9";
    const searchBy = url.searchParams.get("searchBy") || "";
    const maxPrice = url.searchParams.get("maxPrice") || "";
    const maxSeats = url.searchParams.get("maxSeats") || "";
    const maxRange = url.searchParams.get("maxRange") || "";
    const sortByPrice = url.searchParams.get("sortByPrice") || "";
    const sortBySeatingCapacity =
        url.searchParams.get("sortBySeatingCapacity") || "";
    const sortByRange = url.searchParams.get("sortByRange") || "";
    const sortByRating = url.searchParams.get("sortByRating") || "";
    return {
        data: fetchCars(
            page,
            perPage,
            searchBy,
            maxPrice,
            maxSeats,
            maxRange,
            sortByPrice,
            sortBySeatingCapacity,
            sortByRange,
            sortByRating
        ),
    };
}

export default function Cars() {
    const carsDataPromise = useLoaderData();
    // data base maximums
    const promiseMetaDataRef = useRef(carsDataPromise.data);
    const [metaData, setMetaData] = useState(null);
    useEffect(() => {
        promiseMetaDataRef.current.then((data) => {
            setMetaData(data.meta);
        });
    }, []);
    const [searchParams, setSearchParams] = useSearchParams();
    const [showFilter, setShowFilter] = useState(false);
    const typeFilter = searchParams.get("type");
    const params = Object.fromEntries(searchParams.entries());
    function renderCars(data) {
        const cars = data.cars;
        const carElement = cars.map((car) => {
            return (
                <Link
                    to={car.id}
                    key={car.id}
                    state={{
                        searchParams: `?${searchParams.toString()}`,
                        fromCarID: car.id,
                        fromCarName: car.name,
                    }}
                    className="carContainerLink"
                >
                    <div className="carContainer">
                        <CarCard car={car} />
                    </div>
                </Link>
            );
        });
        const page = data.meta.page;
        const totalPage = data.meta.totalPages;
        return (
            <>
                <div className="carWrapperContainer">
                    {carElement.length > 0 ? (
                        <div className="carWrapper">{carElement}</div>
                    ) : (
                        <h1 className="notFoundCar">
                            {Object.entries(params)
                                .filter(
                                    ([key]) =>
                                        !["page", "perPage"].includes(key)
                                )
                                .map(([key, value]) => (
                                    <div key={key} className="notFoundParam">
                                        <h4>
                                            " Couldn't find any car with{" "}
                                            {key
                                                .replace(/([A-Z])/g, " $1")
                                                .replace(/_/g, " ")
                                                .replace(/\b\w/g, (l) =>
                                                    l.toUpperCase()
                                                )}
                                            :{" "}
                                            {key != "maxPrice"
                                                ? value
                                                : `$${Number(
                                                      value
                                                  ).toLocaleString()}`}{" "}
                                            "
                                        </h4>
                                    </div>
                                ))}
                        </h1>
                    )}
                </div>
                {carElement.length > 0 ? (
                    <Pagination
                        page={Number(page)}
                        totalPages={totalPage}
                        onPageChange={(newPage) => {
                            setSearchParams({
                                ...params,
                                page: newPage.toString(),
                                perPage: "9",
                            });
                        }}
                    />
                ) : null}
            </>
        );
    }
    return (
        <div className="carsSectionPage ">
            <h1 className="carsHeading">Explore Our Car Options:</h1>

            <form onSubmit={(e) => e.preventDefault()} className="searchForm">
                <div className="navbar-container">
                    <div className="search-bar">
                        <div className="InputContainer">
                            <svg
                                className="searchIcon"
                                width="20px"
                                viewBox="0 0 24 24"
                                height="20px"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M15.5 14h-.79l-.28-.27A6.518 6.518 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                            </svg>
                            <input
                                className="input"
                                id="search-input"
                                placeholder="Search for cars..."
                                type="text"
                                value={searchParams.get("searchBy") || ""}
                                onChange={(e) => {
                                    setSearchParams({
                                        ...params,
                                        searchBy: e.target.value.trimStart(),
                                        page: "1",
                                    });
                                }}
                            />
                        </div>
                        <div className="border"></div>
                        <button
                            aria-label="Voice search"
                            className="closeButton"
                            onClick={() => {
                                const newParams = { ...params };
                                delete newParams.searchBy;
                                setSearchParams({
                                    ...newParams,
                                    page: "1",
                                });
                            }}
                        >
                            <i className="fa fa-close"></i>
                        </button>
                    </div>
                    <button
                        className="classicBtn"
                        id="filterBtn"
                        onClick={() => {
                            setShowFilter((showFilter) => !showFilter);
                        }}
                    >
                        <i className="fa fa-filter"></i>
                        filters
                    </button>
                </div>
                <div className="filtersContainerWrapper">
                    <div
                        className={`filtersContainer ${
                            showFilter ? "show" : ""
                        }`}
                    >
                        {metaData ? (
                            <AllFilters
                                searchParams={searchParams}
                                setSearchParams={setSearchParams}
                                params={params}
                                metaData={metaData}
                            />
                        ) : (
                            <Loading />
                        )}
                    </div>
                </div>
                <FilterOverview
                    params={params}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    showFilter={showFilter}
                    setShowFilter={setShowFilter}
                />
            </form>
            <div className="pageContainer" style={{ minHeight: "25vh" }}>
                <Suspense fallback={<Loading />} key={searchParams.toString()}>
                    <Await resolve={carsDataPromise.data}>{renderCars}</Await>
                </Suspense>
            </div>
        </div>
    );
}
