import React from "react";

export default function FilterOverview({
    params,
    searchParams,
    setSearchParams,
    showFilter,
    setShowFilter,
}) {
    return (
        Object.keys(params).some(
            (key) => !["page", "perPage"].includes(key)
        ) && (
            <div className="filterDisplayContainer">
                <div className="filtersDisplayWrapper">
                    {Object.entries(params)
                        .filter(([key]) => !["page", "perPage"].includes(key))
                        .map(([key, value]) => (
                            <div key={key} className="filterTag">
                                <h3>{`${key
                                    .replace(/([A-Z])/g, " $1")
                                    .replace(/_/g, " ")
                                    .replace(/\b\w/g, (l) =>
                                        l.toUpperCase()
                                    )} : ${
                                    key !== "maxPrice"
                                        ? value
                                        : `$${Number(value).toLocaleString()}`
                                }`}</h3>
                                <div className="filterTagBorder"></div>
                                <button
                                    className="removeFilterBtn"
                                    onClick={() => {
                                        const newParams = {
                                            ...params,
                                        };
                                        delete newParams[key];
                                        setSearchParams({
                                            ...newParams,
                                            page: "1",
                                        });
                                    }}
                                >
                                    <i className="fa fa-close"></i>
                                </button>
                            </div>
                        ))}
                </div>
                <div className="filterDisplayButton">
                    <button
                        className="classicBtn"
                        id="clearAllFiltersBtn"
                        onClick={() => {
                            const currentPage = searchParams.get("page") || "1";
                            const currentPerPage =
                                searchParams.get("perPage") || "9";
                            setSearchParams({
                                page: currentPage,
                                perPage: currentPerPage,
                            });
                            setShowFilter(false);
                        }}
                    >
                        Clear All Filters
                    </button>
                </div>
            </div>
        )
    );
}
