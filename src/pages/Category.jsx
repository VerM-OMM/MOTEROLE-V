import React, { useEffect } from 'react'
import Background from '../components/Background'
import FullScreen from '../components/FullScreen'
import Actionbtn from '../components/Actionbtn'
import { Link } from 'react-router-dom'
import { LuArrowBigLeft } from 'react-icons/lu'
import { PiGearSixBold } from 'react-icons/pi'
import { IoBulbOutline } from 'react-icons/io5'

const Category = () => {
    useEffect(() => {
        document.title = 'Category'
    })
    return (
        <>
            <Background />
            <div className="flex h-screen justify-between p-5">
                {/* left column */}
                <div className="w-1/10 flex flex-col justify-between">
                    {/* Action button acting as a "Back" button */}
                    <Actionbtn
                        text=""
                        to="/menu"
                        bgColor="#F40000"
                        icon={LuArrowBigLeft}
                    />
                    {/* No need to pass onClick if using the default navigate(-1) */}
                    <FullScreen />
                </div>
                {/* center */}
                <div className="-mt-12 flex w-full flex-col items-center justify-center space-y-4 font-bubbles text-white mobile:-mt-8 mobile:space-y-3">
                    <div className="text-shadow text-8xl mobile:text-5xl ipad:text-7xl">
                        Mga Kategorya
                    </div>
                    <div className="text-shadow flex h-[70%] w-[80%] rounded-3xl border-8 border-bluesky bg-white p-8 mobile:p-4 ipad:h-[60%] ipad:p-6">
                        <div className="inner-shadow flex h-full w-full items-center justify-evenly space-x-4 rounded-2xl bg-cheese p-4 mobile:overflow-x-auto mobile:rounded-xl ipad:overflow-x-auto">
                            <Link
                                to="/line"
                                className="text-shadow h-[80%] w-72 flex-shrink-0 rounded-2xl border-8 border-bluesky bg-butter mobile:h-[90%] mobile:w-1/3 ipad:w-60"
                            ></Link>
                            <Link
                                to="/line"
                                className="text-shadow h-[80%] w-72 flex-shrink-0 rounded-2xl border-8 border-grape bg-butter mobile:h-[90%] mobile:w-1/3 ipad:w-60"
                            ></Link>
                            <Link
                                to="/line"
                                className="text-shadow h-[80%] w-72 flex-shrink-0 rounded-2xl border-8 border-lava bg-butter mobile:h-[90%] mobile:w-1/3 ipad:w-60"
                            >
                                3
                            </Link>
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

export default Category
