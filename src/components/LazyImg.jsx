// import React, { useState } from "react";

// export default function LazyImage({ src, alt, style }) {
//     const [loaded, setLoaded] = useState(false);

//     return (
//         <div
//             className="img-wrapper"
//             style={{
//                 position: "relative",
//                 overflow: "hidden",
//                 ...style,
//             }}
//         >
//             {/* Skeleton blurred background */}
//             <div
//                 className="img-skeleton"
//                 style={{
//                     filter: "blur(20px)",
//                     backgroundColor: "#e0e0e0",
//                     height: "300px",
//                     width: "100%",
//                     maxWidth: "300px",
//                     borderRadius: "9px",
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     transition: "opacity 0.5s ease",
//                     opacity: loaded ? 0 : 1,
//                     transform: loaded ? "scale(1.1)" : "scale(1)",
//                     zIndex: 1,
//                 }}
//             />
//             <img
//                 src={src}
//                 alt={alt}
//                 loading="lazy"
//                 style={{
//                     opacity: loaded ? 1 : 0,
//                     transition: "opacity 0.5s ease, transform 0.5s ease",
//                     transform: loaded ? "scale(1)" : "scale(1.05)",
//                     maxWidth: "100%",
//                     display: "block",
//                     position: "relative",
//                     zIndex: 2,
//                     objectFit: "cover",
//                 }}
//                 onLoad={() => setLoaded(true)}
//             />
//         </div>
//     );
// }

// import React, { useState } from "react";

// export default function LazyImage({ src, alt }) {
//     const [loaded, setLoaded] = useState(false);

//     return (
//         <div
//             style={{
//                 position: "relative",
//                 display: "inline-block", // So it shrinks to fit the image naturally
//             }}
//         >
//             {/* Skeleton placeholder - fixed size */}
//             {!loaded && (
//                 <div
//                     style={{
//                         width: "300px",
//                         height: "180px",
//                         backgroundColor: "#e0e0e0",
//                         filter: "blur(20px)",
//                         borderRadius: "9px",
//                         transition: "opacity 0.4s ease",
//                     }}
//                 />
//             )}

//             {/* Actual image, naturally sized */}
//             <img
//                 src={src}
//                 alt={alt}
//                 loading="lazy"
//                 onLoad={() => setLoaded(true)}
//                 style={{
//                     opacity: loaded ? 1 : 0,
//                     transition: "opacity 0.5s ease, transform 0.5s ease",
//                     transform: loaded ? "scale(1)" : "scale(1.05)",
//                     display: "block",
//                     position: loaded ? "relative" : "absolute",
//                     top: 0,
//                     left: 0,
//                     zIndex: 2,
//                     borderRadius: "9px",
//                 }}
//             />
//         </div>
//     );
// }

import React, { useState } from "react";

export default function LazyImage({
    src,
    alt,
    containerWidth,
    containerHeight,
}) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            className="lazyImgContainer"
            style={{
                position: "relative",
                display: "inline-block",
                overflow: "hidden",
                borderRadius: "9px",
                backgroundColor: loaded ? "transparent" : "#e0e0e0", // important!
                ...(loaded
                    ? {}
                    : {
                          width: containerWidth ? containerWidth : "300px",
                          height: containerHeight ? containerHeight : "180px",
                      }),
            }}
        >
            {/* Shimmer Skeleton */}
            {!loaded && (
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        background: `linear-gradient(
                            90deg,
                            #e0e0e0 25%,
                            #f5f5f5 50%,
                            #e0e0e0 75%
                        )`,
                        backgroundSize: "200% 100%",
                        animation: "shimmer 1.2s infinite",
                        borderRadius: "9px",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                    }}
                />
            )}

            {/* Actual Image */}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                style={{
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                    transform: loaded ? "scale(1)" : "scale(1.05)",
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    position: "relative",
                    zIndex: 2,
                    borderRadius: "9px",
                    backgroundColor: "transparent", // remove any fallback bg
                }}
            />
        </div>
    );
}
