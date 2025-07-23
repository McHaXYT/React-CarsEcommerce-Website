import React from "react";
import { useOutletContext } from "react-router-dom";

export default function CarDetailsDescription() {
    const outletContextData = useOutletContext();
    return (
        <p className="carDetailDescriptionText">
            {outletContextData.description} Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Debitis earum adipisci repellat nulla
            deleniti eum, impedit voluptatem tempora recusandae. Ea, rem
            consequatur. Consectetur repellat rerum asperiores perferendis,
            reprehenderit distinctio omnis obcaecati repellendus suscipit
            aliquam accusamus impedit vero porro ducimus hic. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Eum minima, perferendis modi
            quibusdam incidunt earum saepe suscipit? Alias quo numquam dolore
            maxime? Vel doloribus, quas sed deleniti nihil repellat sint?
        </p>
    );
}
