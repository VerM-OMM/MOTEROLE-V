import React, { useEffect, useState } from 'react'
import Background from '../components/Background'
import FullScreen from '../components/FullScreen'
import Actionbtn from '../components/Actionbtn'
import { Link } from 'react-router-dom'
import { LuArrowBigLeft } from 'react-icons/lu'
import { PiGearSixBold } from 'react-icons/pi'
import { IoBulbOutline } from 'react-icons/io5'



// Image loader function for line background and images
const useLineImages = (lineTypes) => {
    const [images, setImages] = useState({})

    useEffect(() => {
        const loadImages = async () => {
            const imagePromises = lineTypes.map(async (lineType) => {
                try {
                    // Load linebg and lineimg for each line type
                    const linebg = await import(
                        `../assets/linebg/${lineType}.png`
                    )
                    const lineimg = await import(
                        `../assets/lineimg/${lineType}.png`
                    )

                    return {
                        [lineType]: {
                            linebg: linebg.default,
                            lineimg: lineimg.default,
                        },
                    }
                } catch (err) {
                    console.error(`Error loading images for ${lineType}:`, err)
                    return { [lineType]: { linebg: null, lineimg: null } }
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

    const lineTypes = ['Patayo', 'Pahilis', 'Pahiga', 'Pakurba', 'Pazigzag']

    // Get both linebg and lineimg
    const lineImages = useLineImages(lineTypes)

    return (
        <>
            <Background />
            <div className="flex h-screen justify-between p-5">
                {/* left column */}
                <div className="w-1/10 flex flex-col justify-between">
                    {/* Action button acting as a "Back" button */}
                    <Actionbtn
                        text=""
                        to="/category"
                        bgColor="#F40000"
                        icon={LuArrowBigLeft}
                    />
                    {/* No need to pass onClick if using the default navigate(-1) */}
                    <FullScreen />
                </div>
                {/* center */}
                <div className="flex w-full flex-col items-center justify-center font-bubbles text-white">
                    <div className="text-shadow relative flex h-[70%] w-[80%] justify-center rounded-3xl border-8 border-limblue bg-white p-8 mobile:h-[85%] mobile:border-4 mobile:p-4 ipad:h-[60%] ipad:p-6">
                        <span className="absolute -top-9 flex h-14 w-1/3 items-center justify-center rounded-2xl border-8 border-limblue bg-white font-nunito text-4xl font-black text-black mobile:h-12 mobile:border-4 mobile:text-2xl ipad:text-3xl">
                            Linya
                        </span>
                        <div className="inner-shadow flex h-full w-full items-center justify-evenly space-x-4 rounded-2xl border-[0.5px] border-softgray bg-cheese p-4 mobile:overflow-x-auto mobile:rounded-xl ipad:overflow-x-auto overflow-auto">
                            {lineTypes.map((lineType, index) => (
                                <Link
                                    key={index}
                                    to="/leveldifficulty"
                                    className="text-shadow h-[80%] w-1/4 duration-100 active:scale-95 flex-shrink-0 flex flex-col  justify-center items-center rounded-2xl border-8 border-limblue bg-butter mobile:h-[90%] mobile:w-1/3 mobile:border-4 ipad:w-1/3 "
                                    style={{
                                        backgroundImage: lineImages[lineType]
                                            ?.linebg
                                            ? `url(${lineImages[lineType].linebg})`
                                            : 'none',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    {/* Line image div */}
                                    <div
                                        className="size-[70%] mobile:size-[70%] bg-cover bg-center ipad:size-[80%]"
                                        style={{
                                            backgroundImage: lineImages[
                                                lineType
                                            ]?.lineimg
                                                ? `url(${lineImages[lineType].lineimg})`
                                                : 'none',
                                        }}
                                    />
                                    {/* Line type text */}
                                    <div className="font-nunito text-4xl mobile:text-xl font-black text-black ipad:text-3xl ">
                                        {lineType}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                {/* right column */}
                <div className="w-1/10 flex select-none flex-col space-y-4 mobile:space-y-3">
                    {/* Action button acting as a "Back" button */}
                    <Actionbtn
                        text=""
                        to="/settings"
                        bgColor="#AB47BC"
                        icon={PiGearSixBold}
                    />
                    <Actionbtn
                        text=""
                        to="/achievement"
                        bgColor="#8BC34A"
                        icon={IoBulbOutline}
                    />
                </div>
            </div>
        </>
    )
}

export default Line
