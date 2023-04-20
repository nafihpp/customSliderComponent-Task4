import React, { Fragment, useState } from "react";

export const Slider = () => {
    const [currentSlide, setSlide] = useState(0);
    const [images, setImages] = useState([
        {
            image: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/06/09113117/6-1.jpg",
        },
        {
            image: "https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-732x549-thumbnail-732x549.jpg",
        },
        {
            image: "https://cdn.britannica.com/22/75922-050-D3982BD0/flowers-fruits-garden-strawberry-plant-species.jpg",
        },
    ]);
    const imageLength = images.length - 1;

    const backButton = () => {
        if (currentSlide > 0) {
            setSlide((prev) => prev - 1);
        } else {
            setSlide(imageLength);
        }
    };

    const frontButton = () => {
        if (currentSlide >= imageLength) {
            setSlide(0);
        } else {
            setSlide((prev) => prev + 1);
        }
    };

    return (
        <Fragment>
            <div className="container">
                {images.map((img, index) => (
                    <div key={index}>
                        {index == currentSlide ? (
                            <div className="image-container">
                                <button
                                    onClick={backButton}
                                    className="backButton"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 512 512"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
                                    </svg>
                                </button>
                                <img
                                    src={img.image}
                                    alt="title"
                                    className="image"
                                />
                                <button
                                    onClick={frontButton}
                                    className="front-button"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 1024 1024"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
                                    </svg>
                                </button>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </Fragment>
    );
};
