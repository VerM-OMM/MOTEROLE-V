import React, { useEffect, useState } from 'react'
import Background from '../components/Background'
import { Link } from 'react-router-dom'
import { GrTrophy } from 'react-icons/gr'
import { PiGearSix } from 'react-icons/pi'
import { LuArrowBigLeft } from 'react-icons/lu'
import FullScreen from '../components/FullScreen'

// Image loader function for lines
const useLineImages = (lineTypes) => {
    const [images, setImages] = useState({})

    useEffect(() => {
        const loadImages = async () => {
            const imagePromises = lineTypes.map(async (lineType) => {
                try {
                    const image = await import(
                        `../assets/linebg/${lineType}.png`
                    )
                    return { [lineType]: image.default }
                } catch (err) {
                    console.error(`Error loading image for ${lineType}:`, err)
                    return { [lineType]: null }
                }
            })

            const resolvedImages = await Promise.all(imagePromises)
            const imageMap = resolvedImages.reduce((acc, imageObj) => {
                return { ...acc, ...imageObj }
            }, {})

            setImages(imageMap)
        }

        loadImages()
    }, [lineTypes])

    return images
}

const Line = () => {
    useEffect(() => {
        document.title = 'Line'
    }, [])

    const lineTypes = [
        'Patayo',
        'Pahilis',
        'Pakurba',
        'Pahiga',
        'Pakurba',
        'Pazigzag',
    ]
    const lineImages = useLineImages(lineTypes)

    return (
        <>
            <Background />
            <div className="relative flex h-screen w-screen flex-col items-center justify-center space-y-4 xl:space-y-6">
                <div className="relative flex h-[75%] w-[60%] flex-col items-center rounded-3xl border-[6px] border-[#005981] bg-white p-5 drop-shadow-[5px_5px_0px_#000000] xl:mt-4 xl:h-[60%] xl:px-6 xl:py-8 xl:drop-shadow-[15px_10px_5px_#000000]">
                    <span className="absolute -top-9 flex w-1/3 items-center justify-center rounded-2xl border-[6px] border-[#005981] bg-white font-nunito text-2xl font-black drop-shadow-[5px_5px_0px_#000000] xl:h-14">
                        Linya
                    </span>
                    {/* Overflow functionality with line images as background */}
                    <div className="shadow-inner-lg flex h-full w-full items-center justify-evenly gap-4 overflow-x-auto rounded-xl bg-[#FFD568] px-4 py-6 font-nunito xl:gap-10 xl:p-10">
                        {lineTypes.map((lineType, index) => (
                            <Link
                                key={index}
                                to="/leveldifficulty"
                                className="flex h-full w-full flex-col items-center justify-end rounded-2xl border-[6px] border-[#005981] bg-[#FFEDBE] p-2 drop-shadow-[5px_5px_0px_#000000] transition-all active:scale-90"
                                style={{
                                    backgroundImage: lineImages[lineType]
                                        ? `url(${lineImages[lineType]})`
                                        : 'none',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div className="flex w-full flex-col items-center justify-center">
                                    <div className="text-2xl font-[1000] text-black">
                                        {lineType}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-7 flex w-full justify-between px-5">
                    <FullScreen />
                    <div className="flex space-x-2 xl:space-x-4">
                        <Link
                            to="/achievement"
                            className="flex cursor-pointer items-center justify-center rounded-xl bg-[#FFD700] text-center text-white transition-all duration-150 [box-shadow:0_4px_0_0_#bfa100,0_6px_0_0_#1b70f841] active:translate-y-1 active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]"
                        >
                            <GrTrophy className="size-10 p-2 xl:size-14 xl:p-2.5" />
                        </Link>

                        <Link
                            to="/settings"
                            className="flex cursor-pointer items-center justify-center rounded-xl bg-[#8D8686] text-center text-white transition-all duration-150 [box-shadow:0_4px_0_0_#5e5a5a,0_6px_0_0_#1b70f841] active:translate-y-1 active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]"
                        >
                            <PiGearSix className="size-10 p-1 xl:size-14" />
                        </Link>
                    </div>
                </div>
                <Link
                    to="/category"
                    className="absolute left-5 top-0 flex cursor-pointer items-center justify-center rounded-xl bg-[#F40000] text-center text-white transition-all duration-150 [box-shadow:0_4px_0_0_#ab0000,0_6px_0_0_#1b70f841] active:translate-y-1 active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]"
                >
                    <LuArrowBigLeft className="size-10 p-1 xl:size-14" />
                </Link>
            </div>
        </>
    )
}

export default Line
