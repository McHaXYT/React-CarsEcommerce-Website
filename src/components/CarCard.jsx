import React from "react";
import LazyImg from "./LazyImg";

export default function CarCard({ car, containerHeight, containerWidth }) {
    const getAverageRating = (reviews) => {
        if (!reviews || reviews.length === 0) return 0;
        const total = reviews.reduce((sum, r) => sum + r.rating, 0);
        return parseFloat((total / reviews.length).toFixed(1));
    };

    const averageRating = getAverageRating(car.reviews);
    return (
        <>
            <LazyImg
                src={car.img}
                alt={car.name}
                containerWidth={containerWidth}
                containerHeight={containerHeight}
            />
            <div className="carTitle">
                <div className="carTitleModel">
                    <h2>{car.specifications.brand}</h2>
                    <h3>{car.name}</h3>
                    <h4>
                        Model Year :{" "}
                        <span className="carTitleModelYear">
                            {car.specifications.year}
                        </span>
                    </h4>
                </div>
                <div className="carTitlePriceInfo">
                    <h2>${car.price.toLocaleString()}</h2>
                    {averageRating > 0 && (
                        <div className="carRating">
                            <span id="carRatingStar">
                                {/* <i className="fa fa-star"></i> */}⭐
                            </span>{" "}
                            <h4>{averageRating} / 5</h4>
                        </div>
                    )}
                    {car.isSold ? (
                        <h4 className="outOfStockTextCard">
                            <span>🚫</span> Out of Stock !
                        </h4>
                    ) : null}
                </div>
            </div>
            <div className="carContainerInfoContainer">
                <div className="carInfo">
                    <svg
                        className="color-content-primary"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M16.9525 43.143L41.7144 34.0954M21.2382 7.42871L3.61914 24.5716L21.2382 7.42871ZM27.9049 7.42871L44.5715 17.4287L27.9049 7.42871Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M29.3335 25.0472C29.3335 30.3072 33.5973 34.5711 38.8573 34.5711C44.1173 34.5711 48.3811 30.3072 48.3811 25.0472C48.3811 19.7872 44.1173 15.5234 38.8573 15.5234C33.5973 15.5234 29.3335 19.7872 29.3335 25.0472Z"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M29.3335 25.0472C29.3335 30.3072 33.5973 34.5711 38.8573 34.5711C44.1173 34.5711 48.3811 30.3072 48.3811 25.0472C48.3811 19.7872 44.1173 15.5234 38.8573 15.5234C33.5973 15.5234 29.3335 19.7872 29.3335 25.0472Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M36.4761 25.0479C36.4761 26.3627 37.5423 27.4289 38.857 27.4289C40.1718 27.4289 41.238 26.3627 41.238 25.0479C41.238 23.7332 40.1718 22.667 38.857 22.667C37.5423 22.667 36.4761 23.7332 36.4761 25.0479Z"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M36.4761 25.0479C36.4761 26.3627 37.5423 27.4289 38.857 27.4289C40.1718 27.4289 41.238 26.3627 41.238 25.0479C41.238 23.7332 40.1718 22.667 38.857 22.667C37.5423 22.667 36.4761 23.7332 36.4761 25.0479Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24.8095 31.9526C24.8095 25.3779 19.4795 20.0479 12.9048 20.0479C6.33 20.0479 1 25.3779 1 31.9526C1 38.5274 6.33 43.8574 12.9048 43.8574C19.4795 43.8574 24.8095 38.5274 24.8095 31.9526Z"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24.8095 31.9526C24.8095 25.3779 19.4795 20.0479 12.9048 20.0479C6.33 20.0479 1 25.3779 1 31.9526C1 38.5274 6.33 43.8574 12.9048 43.8574C19.4795 43.8574 24.8095 38.5274 24.8095 31.9526Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M21.4764 31.9523C21.4764 27.2185 17.6387 23.3809 12.9049 23.3809C8.17112 23.3809 4.3335 27.2185 4.3335 31.9523C4.3335 36.6861 8.17112 40.5237 12.9049 40.5237C17.6387 40.5237 21.4764 36.6861 21.4764 31.9523Z"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M21.4764 31.9523C21.4764 27.2185 17.6387 23.3809 12.9049 23.3809C8.17112 23.3809 4.3335 27.2185 4.3335 31.9523C4.3335 36.6861 8.17112 40.5237 12.9049 40.5237C17.6387 40.5237 21.4764 36.6861 21.4764 31.9523Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.2858 31.9522C15.2858 30.6375 14.2196 29.5713 12.9049 29.5713C11.5901 29.5713 10.5239 30.6375 10.5239 31.9522C10.5239 33.267 11.5901 34.3332 12.9049 34.3332C14.2196 34.3332 15.2858 33.267 15.2858 31.9522Z"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.2858 31.9522C15.2858 30.6375 14.2196 29.5713 12.9049 29.5713C11.5901 29.5713 10.5239 30.6375 10.5239 31.9522C10.5239 33.267 11.5901 34.3332 12.9049 34.3332C14.2196 34.3332 15.2858 33.267 15.2858 31.9522Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M29.3334 10.7619C29.3334 13.3919 27.2015 15.5238 24.5715 15.5238C21.9415 15.5238 19.8096 13.3919 19.8096 10.7619C19.8096 8.1319 21.9415 6 24.5715 6C27.2015 6 29.3334 8.1319 29.3334 10.7619Z"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M29.3334 10.7619C29.3334 13.3919 27.2015 15.5238 24.5715 15.5238C21.9415 15.5238 19.8096 13.3919 19.8096 10.7619C19.8096 8.1319 21.9415 6 24.5715 6C27.2015 6 29.3334 8.1319 29.3334 10.7619Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <p>
                        {car.specifications.engine[0]}
                        {car.specifications.engine[1]}
                        {car.specifications.engine[2]}
                        {car.specifications.engine[3]}
                        {car.specifications.engine[4]}
                        {car.specifications.engine[5]}
                        {car.specifications.engine[6]}
                        {car.specifications.engine[7]}
                    </p>
                </div>
                <div className="carInfo">
                    <svg
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        data-icon="mileage"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24.6144 6.39355V11.5734V6.39355ZM47.9732 29.415H42.1339H47.9732ZM7.09759 29.415H1.2583H7.09759ZM41.1318 12.8486L37.0028 16.9183L41.1318 12.8486ZM12.2281 16.9183L8.09913 12.8486L12.2281 16.9183ZM33.3739 20.4945L25.6415 25.2318C25.3128 25.1477 24.97 25.0987 24.615 25.0987C22.3575 25.0987 20.5275 26.9025 20.5275 29.1275C20.5275 31.3526 22.3575 33.1563 24.615 33.1563C26.8724 33.1563 28.7026 31.3526 28.7026 29.1275C28.7026 28.7777 28.6528 28.4398 28.5676 28.1158L33.3739 20.4945Z"
                            stroke="rgba(5, 15, 12, 1)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M46.2686 37.7601C47.3641 35.0937 47.9731 32.1808 47.9731 29.1271C47.9731 16.4128 37.5155 6.10547 24.6159 6.10547C11.7164 6.10547 1.25879 16.4128 1.25879 29.1271C1.25879 32.1808 1.86724 35.0937 2.9627 37.7601"
                            stroke="rgba(5, 15, 12, 1)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.8569 43.8029H33.3749V38.0479H15.8569V43.8029Z"
                            stroke="rgba(5, 15, 12, 1)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <p>{car.specifications.range}</p>
                </div>
                <div className="carInfo">
                    <svg
                        viewBox="0 0 50 50"
                        xmlns="http://www.w3.org/2000/svg"
                        data-icon="drivetrain"
                    >
                        <g stroke="null">
                            <mask stroke="null" fill="#fff" id="drivetrain__a">
                                <path
                                    d="M8 9a1 1 0 011-1h4a1 1 0 011 1v4h7.126a4.002 4.002 0 017.748 0H36V9a1 1 0 011-1h4a1 1 0 011 1v10a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4h-7.126A4.007 4.007 0 0126 17.874v14.252A4.007 4.007 0 0128.874 35H36v-4a1 1 0 011-1h4a1 1 0 011 1v10a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4h-7.126a4.002 4.002 0 01-7.748 0H14v4a1 1 0 01-1 1H9a1 1 0 01-1-1V31a1 1 0 011-1h4a1 1 0 011 1v4h7.126A4.007 4.007 0 0124 32.126V17.874A4.007 4.007 0 0121.126 15H14v4a1 1 0 01-1 1H9a1 1 0 01-1-1V9z"
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                ></path>
                            </mask>
                            <path
                                mask="url(#drivetrain__a)"
                                fill="rgba(5, 15, 12, 1)"
                                d="M14 13h-1.5v1.5H14V13zm7.126 0v1.5h1.163l.29-1.126L21.126 13zm7.748 0l-1.453.374.29 1.126h1.163V13zM36 13v1.5h1.5V13H36zm0 2h1.5v-1.5H36V15zm-7.126 0v-1.5h-1.163l-.29 1.126 1.453.374zM26 17.874l-.374-1.453-1.126.29v1.163H26zm0 14.252h-1.5v1.163l1.126.29.374-1.453zM28.874 35l-1.453.374.29 1.126h1.163V35zM36 35v1.5h1.5V35H36zm0 2h1.5v-1.5H36V37zm-7.126 0v-1.5h-1.163l-.29 1.126 1.453.374zm-7.748 0l1.453-.374-.29-1.126h-1.163V37zM14 37v-1.5h-1.5V37H14zm0-2h-1.5v1.5H14V35zm7.126 0v1.5h1.163l.29-1.126L21.126 35zM24 32.126l.374 1.453 1.126-.29v-1.163H24zm0-14.252h1.5v-1.163l-1.126-.29L24 17.874zM21.126 15l1.453-.374-.29-1.126h-1.163V15zM14 15v-1.5h-1.5V15H14zM9 6.5A2.5 2.5 0 006.5 9h3a.5.5 0 01-.5.5v-3zm4 0H9v3h4v-3zM15.5 9A2.5 2.5 0 0013 6.5v3a.5.5 0 01-.5-.5h3zm0 4V9h-3v4h3zm5.626-1.5H14v3h7.126v-3zM25 8.5a5.502 5.502 0 00-5.327 4.126l2.906.748A2.502 2.502 0 0125 11.5v-3zm5.327 4.126A5.502 5.502 0 0025 8.5v3c1.163 0 2.144.795 2.421 1.874l2.906-.748zM36 11.5h-7.126v3H36v-3zM34.5 9v4h3V9h-3zM37 6.5A2.5 2.5 0 0034.5 9h3a.5.5 0 01-.5.5v-3zm4 0h-4v3h4v-3zM43.5 9A2.5 2.5 0 0041 6.5v3a.5.5 0 01-.5-.5h3zm0 10V9h-3v10h3zM41 21.5a2.5 2.5 0 002.5-2.5h-3a.5.5 0 01.5-.5v3zm-4 0h4v-3h-4v3zM34.5 19a2.5 2.5 0 002.5 2.5v-3a.5.5 0 01.5.5h-3zm0-4v4h3v-4h-3zm-5.626 1.5H36v-3h-7.126v3zm-2.5 2.827a5.507 5.507 0 003.953-3.953l-2.906-.748a2.507 2.507 0 01-1.795 1.795l.748 2.906zM27.5 32.126V17.874h-3v14.252h3zm-1.874 1.453c.876.225 1.57.918 1.795 1.795l2.906-.748a5.507 5.507 0 00-3.953-3.953l-.748 2.906zM36 33.5h-7.126v3H36v-3zM34.5 31v4h3v-4h-3zm2.5-2.5a2.5 2.5 0 00-2.5 2.5h3a.5.5 0 01-.5.5v-3zm4 0h-4v3h4v-3zm2.5 2.5a2.5 2.5 0 00-2.5-2.5v3a.5.5 0 01-.5-.5h3zm0 10V31h-3v10h3zM41 43.5a2.5 2.5 0 002.5-2.5h-3a.5.5 0 01.5-.5v3zm-4 0h4v-3h-4v3zM34.5 41a2.5 2.5 0 002.5 2.5v-3a.5.5 0 01.5.5h-3zm0-4v4h3v-4h-3zm-5.626 1.5H36v-3h-7.126v3zm-1.453-1.874A2.502 2.502 0 0125 38.5v3a5.502 5.502 0 005.327-4.126l-2.906-.748zM25 38.5a2.502 2.502 0 01-2.421-1.874l-2.906.748A5.502 5.502 0 0025 41.5v-3zm-11 0h7.126v-3H14v3zm1.5 2.5v-4h-3v4h3zM13 43.5a2.5 2.5 0 002.5-2.5h-3a.5.5 0 01.5-.5v3zm-4 0h4v-3H9v3zM6.5 41A2.5 2.5 0 009 43.5v-3a.5.5 0 01.5.5h-3zm0-10v10h3V31h-3zM9 28.5A2.5 2.5 0 006.5 31h3a.5.5 0 01-.5.5v-3zm4 0H9v3h4v-3zm2.5 2.5a2.5 2.5 0 00-2.5-2.5v3a.5.5 0 01-.5-.5h3zm0 4v-4h-3v4h3zm5.626-1.5H14v3h7.126v-3zm1.453 1.874a2.507 2.507 0 011.795-1.795l-.748-2.906a5.507 5.507 0 00-3.953 3.953l2.906.748zm-.079-17.5v14.252h3V17.874h-3zm-2.827-2.5a5.507 5.507 0 003.953 3.953l.748-2.906a2.507 2.507 0 01-1.795-1.795l-2.906.748zM14 16.5h7.126v-3H14v3zm1.5 2.5v-4h-3v4h3zM13 21.5a2.5 2.5 0 002.5-2.5h-3a.5.5 0 01.5-.5v3zm-4 0h4v-3H9v3zM6.5 19A2.5 2.5 0 009 21.5v-3a.5.5 0 01.5.5h-3zm0-10v10h3V9h-3z"
                            ></path>
                        </g>
                    </svg>
                    <p>{car.specifications.drivetrain}</p>
                </div>
                <div className="carInfo">
                    <svg
                        className="color-content-primary"
                        empty="yes"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        data-icon="seat"
                    >
                        <path
                            d="M44.7615 35.3913C42.498 32.6918 37.3727 32.2713 36.0373 32.208C27.3065 31.4044 23.354 33.5635 20.6375 35.0611C20.2841 35.2512 19.9383 35.4566 19.6042 35.6755C18.9876 36.0806 18.6847 36.3475 18.6847 36.3475C16.2983 38.2347 14.6487 40.8782 14.0164 43.8288C13.8966 44.4019 14.3582 44.9136 14.9514 44.9088H23.841C23.9202 44.3276 24.2108 43.7947 24.6586 43.4088C25.1065 43.0227 25.6812 42.81 26.2761 42.8102H39.4153C40.6589 42.8102 41.6886 43.726 41.8473 44.9088H42.5826C43.4514 44.8617 44.8988 44.6352 45.7247 43.6752C47.289 41.9193 47.1458 38.232 44.7703 35.3904M13.5265 37.4598L7.89552 14.9185C7.76714 14.4047 7.84504 14.1492 7.89802 14.0429C7.94911 13.9405 8.06776 13.7931 8.38735 13.6681C9.09445 13.3916 10.4698 13.3757 12.2595 14.0718C15.734 15.4232 20.022 19.203 21.7647 26.1792L22.8773 30.6305C16.8342 33.2568 15.2336 35.6133 13.5265 37.4598ZM39.6482 46.2664V47.0971H26.0234V46.2664V45.892C26.0234 45.7952 26.11 45.6776 26.2644 45.6776H39.4036C39.5625 45.6776 39.6482 45.7998 39.6482 45.892V46.2664Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M15.2707 12.1776C13.7347 6.93892 10.3063 1.45155 5.65253 1.30467H5.62622C4.16816 1.26243 3.08215 2.62275 3.43084 4.01763L5.47622 12.2055L5.56973 12.0807C6.3947 11.0439 7.79531 10.4736 9.51928 10.4736C11.1118 10.4736 13.162 10.9997 15.2707 12.1767"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <p>{car.specifications.seatingCapacity} Seats</p>
                </div>
            </div>
        </>
    );
}
