"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination]);

const data = [
    {
        src: "https://nard.sa/wp-content/uploads/2025/01/video1.mp4",
        uploadedby: "Ahmed",
        date: "2022-06-14",
    },
    {
        src: "https://nard.sa/wp-content/uploads/2025/01/video3.mp4",
        uploadedby: "Ahmed",
        date: "2022-02-14",
    },
    {
        src: "https://nard.sa/wp-content/uploads/2025/01/video4.mp4",
        uploadedby: "Ahmed",
        date: "2022-01-14",
    },
    {
        src: "https://nard.sa/wp-content/uploads/2025/01/video5.mp4",
        uploadedby: "Ahmed",
        date: "2022-08-23",
    },
    {
        src: "https://nard.sa/wp-content/uploads/2025/01/video3.mp4",
        uploadedby: "Ahmed",
        date: "2022-06-24",
    },
    {
        src: "https://nard.sa/wp-content/uploads/2025/01/video3.mp4",
        uploadedby: "Ahmed",
        date: "2023-02-24",
    },
];

const ShortsCarosoulsDamin = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showPauseOverlay, setShowPauseOverlay] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const swiperRef = useRef(null);
    const [muteStates, setMuteStates] = useState(Array(data.length).fill(true));

    useEffect(() => {
        const swiper = swiperRef.current?.swiper;
        if (swiper && swiper.slides && swiper.slides.length > 0) {
            const video = swiper.slides[0]?.querySelector("video");
            if (video) {
                video.muted = true;
                video.play();
                video.addEventListener("timeupdate", updateProgress);
            }
        }
        return () => {
            if (swiper && swiper.slides && swiper.slides.length > 0) {
                const video = swiper.slides[0]?.querySelector("video");
                if (video) {
                    video.removeEventListener("timeupdate", updateProgress);
                }
            }
        };
    }, []);


    const updateProgress = (event) => {
        const video = event.target;
        const progressValue = (video.currentTime / video.duration) * 100;
        setProgress(progressValue);
    };

    const handleSlideChange = (swiper) => {
        const previousVideo = swiper.slides[swiper.previousIndex]?.querySelector("video");
        const currentVideo = swiper.slides[swiper.activeIndex]?.querySelector("video");

        if (previousVideo) {
            previousVideo.pause();
            previousVideo.currentTime = 0;
            previousVideo.removeEventListener("timeupdate", updateProgress);
        }

        if (currentVideo) {
            currentVideo.muted = muteStates[swiper.activeIndex];
            currentVideo.play();
            currentVideo.addEventListener("timeupdate", updateProgress);
            setIsPaused(false);
            setProgress(0);
        }

        setActiveIndex(swiper.activeIndex);
    };

    const handlePlayPause = (index) => {
        const swiper = swiperRef.current?.swiper;
        const video = swiper.slides[index]?.querySelector("video");

        if (video) {
            if (!video.paused) {
                video.pause();
                setShowPauseOverlay(true);
                setIsPaused(true);
            } else {
                video.play();
                setShowPauseOverlay(false);
                setIsPaused(false);
            }
        }
    };

    const handleMuteToggle = (index) => {
        const swiper = swiperRef.current?.swiper;
        const video = swiper.slides[index]?.querySelector("video");
        const newMuteStates = [...muteStates];

        if (video) {
            video.muted = !video.muted;
            newMuteStates[index] = video.muted;
            setMuteStates(newMuteStates);
        }
    };

    return (
        <>
            <Swiper
                slidesPerView="auto"
                spaceBetween={0}
                centeredSlides={false}
                initialSlide={0}
                pagination={{ clickable: true, type: "bullets", el: ".custom-pagination" }}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                className="swiper"
                ref={swiperRef}
                onSlideChange={handleSlideChange}
            >
                {data.map((video, index) => (
                    <SwiperSlide
                        key={index}
                        className={`overflow-hidden ${index !== activeIndex ? "opacity-50" : ""}`}
                        style={{ width: "310px", transition: "opacity 0.3s ease-in-out" }}
                    >
                        <div className="relative">
                            <div
                                className="relative w-full h-[350px] md:h-[490px] rounded-3xl"
                                onClick={() => handlePlayPause(index)}
                            >
                                <video
                                    controls={false}
                                    className="w-full h-full object-cover rounded-3xl"
                                    style={{ objectFit: "cover" }}
                                    src={video?.src}
                                ></video>
                                {isPaused && index === activeIndex && (
                                    <div className="absolute inset-0 flex items-center justify-center   ">
                                        <span className="text-white text-3xl font-bold">PU</span>
                                    </div>
                                )}


                                <div className="absolute bottom-0 left-4">
                                    <p className="flex font-sans text-sm text-red-400 group-hover:text-[#DADADA]">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleMuteToggle(index);
                                            }}
                                            className="rounded-3xl p-3 border border-1 text-white bg-[#ffffff33] border-white"
                                        >
                                            {muteStates[index] ? "Mute" : "Unmute"}
                                        </button>
                                    </p>
                                </div>


                                {index === activeIndex && (
                                    <div
                                        className="absolute top-4 left-0 mx-4 w-full h-2 bg-[#808080] rounded-md overflow-hidden"
                                        style={{ zIndex: 10 }}
                                    >
                                        <div
                                            className="h-full bg-white transition-all duration-300"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                )}



                            </div>

                            {/* <div className="absolute w-full flex items-end h-[350px] md:h-[490px] rounded-3xl top-0 bottom-0 p-6 bg-[#00000050] z-1">
                <div className="flex w-full justify-between items-center">
                 
                </div>
              </div> */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default ShortsCarosoulsDamin;
