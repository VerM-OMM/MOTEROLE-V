import React, { useEffect } from 'react'
import Background from '../components/Background'
import FullScreen from '../components/FullScreen'
import Actionbtn from '../components/Actionbtn'
import { Link } from 'react-router-dom'
import { LuArrowBigLeft } from 'react-icons/lu'
import { PiGearSixBold } from 'react-icons/pi'
import { IoBulbOutline } from 'react-icons/io5'

// Static imports for all images
import bghiga from '../assets/lineCategory/bghiga.png'
import pahiga from '../assets/lineCategory/pahiga.png'
import bghilis from '../assets/lineCategory/bghilis.png'
import pahilis from '../assets/lineCategory/pahilis.png'
import bgkurba from '../assets/lineCategory/bgkurba.png'
import pakurba from '../assets/lineCategory/pakurba.png'
import bgpatayo from '../assets/lineCategory/bgtayo.png'
import patayo from '../assets/lineCategory/patayo.png'
import bgzigzag from '../assets/lineCategory/bgzigzag.png'
import pazigzag from '../assets/lineCategory/pazigzag.png'

const lineImages = {
    Patayo: { bg: bgpatayo, img: patayo },
    Pahilis: { bg: bghilis, img: pahilis },
    Pahiga: { bg: bghiga, img: pahiga },
    Pakurba: { bg: bgkurba, img: pakurba },
    Pazigzag: { bg: bgzigzag, img: pazigzag },
}

const Line = () => {
    const lineTypes = ['Patayo', 'Pahilis', 'Pahiga', 'Pakurba', 'Pazigzag']

    useEffect(() => {
        document.title = 'Line'
    }, [])

    return (
        <>
            <Background />
            <div className="flex h-screen justify-between p-5">
                {/* left column */}
                <div className="w-1/10 flex flex-col justify-between">
                    <Actionbtn
                        text=""
                        to="/category"
                        bgColor="#F40000"
                        icon={LuArrowBigLeft}
                    />
                    <FullScreen />
                </div>

                {/* center */}
                <div className="flex w-full flex-col items-center justify-center font-bubbles text-white ipad:overflow-hidden">
                    <div className="text-shadow relative flex h-[70%] w-[80%] justify-center rounded-3xl border-8 border-limblue bg-white p-8 mobile:h-[85%] mobile:border-4 mobile:p-4 ipad:h-[60%] ipad:p-6">
                        <span className="absolute -top-9 flex h-14 w-1/3 items-center justify-center rounded-2xl border-8 border-limblue bg-white font-nunito text-4xl font-black text-black mobile:h-12 mobile:border-4 mobile:text-2xl ipad:text-3xl">
                            Linya
                        </span>
                        <div className="inner-shadow flex h-full w-full items-center justify-evenly space-x-4 overflow-x-auto rounded-2xl border-[0.5px] border-softgray bg-cheese p-4 mobile:overflow-x-auto mobile:rounded-xl ipad:overflow-x-auto">
                            {lineTypes.map((lineType, index) => {
                                const images = lineImages[lineType]
                                return (
                                    <Link
                                        key={index}
                                        to="/leveldifficulty"
                                        className="text-shadow just flex h-[80%] w-1/4 flex-shrink-0 flex-col justify-center rounded-2xl border-8 border-limblue bg-butter bg-cover bg-center p-5 font-nunito text-4xl font-black text-black mobile:h-[90%] mobile:w-1/3 mobile:border-4 mobile:p-2 mobile:text-2xl ipad:w-60 ipad:p-3 ipad:text-3xl"
                                        style={{
                                            backgroundImage: `url(${images.bg})`,
                                        }}
                                    >
                                        <img
                                            src={images.img}
                                            alt={lineType}
                                            className="h-full w-full object-cover"
                                        />
                                        <div className="text-center">
                                            {lineType}
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* right column */}
                <div className="w-1/10 flex select-none flex-col space-y-4 mobile:space-y-3">
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
