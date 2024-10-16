import React, { useEffect, useState } from 'react'
import Background from '../components/Background'
import FullScreen from '../components/FullScreen'
import Actionbtn from '../components/Actionbtn'
import { LuArrowBigLeft } from 'react-icons/lu'
import { PiGearSixBold } from 'react-icons/pi'
import { IoBulbOutline } from 'react-icons/io5'

const Settings = () => {
    const [tugtogVolume, setTugtogVolume] = useState(50) // Initial volume for Tugtog (Music)
    const [tunogVolume, setTunogVolume] = useState(50) // Initial volume for Tunog (Sound Effects)

    useEffect(() => {
        document.title = 'Settings'
    }, [])

    // Handler functions to change the volume levels
    const handleTugtogVolumeChange = (e) => {
        setTugtogVolume(e.target.value)
    }

    const handleTunogVolumeChange = (e) => {
        setTunogVolume(e.target.value)
    }

    return (
        <>
            <Background />
            <div className="flex h-screen justify-between p-5">
                {/* left column */}
                <div className="w-1/10 flex flex-col justify-between">
                    <Actionbtn
                        text=""
                        to="#"
                        isLink={false}
                        bgColor="#F40000"
                        icon={LuArrowBigLeft}
                    />
                    <FullScreen />
                </div>
                {/* center */}
                <div className="-mt-12 flex w-full flex-col items-center justify-center space-y-4 font-bubbles text-white mobile:-mt-8 mobile:space-y-3">
                    <div className="text-shadow text-8xl mobile:text-5xl ipad:text-7xl">
                        Settings
                    </div>
                    <div className="flex h-[70%] w-[80%] rounded-2xl bg-black bg-opacity-60 p-8 mobile:p-4 ipad:h-[60%] ipad:p-6">
                        <div className="flex h-full w-full flex-col space-y-10  justify-between overflow-y-auto rounded-2xl text-center font-nunito text-5xl font-black text-black mobile:overflow-y-auto mobile:rounded-xl mobile:text-2xl ipad:overflow-y-auto">
                            <div className="flex justify-evenly gap-10 text-white">
                                {/* Tugtog Volume Slider */}
                                <div className="flex w-full flex-col space-y-4">
                                    <span>Tugtog</span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={tugtogVolume}
                                        onChange={handleTugtogVolumeChange}
                                        className="h-2 cursor-pointer bg-white"
                                    />
                                    <div>{tugtogVolume}%</div>
                                </div>

                                {/* Tunog Volume Slider */}
                                <div className="flex w-full flex-col space-y-4">
                                    <span>Tunog</span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={tunogVolume}
                                        onChange={handleTunogVolumeChange}
                                        className="h-2 cursor-pointer bg-white"
                                    />
                                    <div>{tunogVolume}%</div>
                                </div>
                            </div>

                            <div className='w-full flex text-white space-x-4 items-center justify-center'>
                                <div className='text-nowrap'>Mga Tugtog:</div>
                                <select name="" id="" className='bg-white w-full text-3xl  h-10 mobile:h-8 mobile:text-xl text-black focus:outline-none rounded-lg px-4'>
                                    <option value="" className=''selected>Baba black sheep</option>
                                    <option value="" className=''>2</option>
                                    <option value="" className=''>3</option>
                                    <option value="" className=''>4</option>
                                </select>
                            </div>

                            <div className='flex text-center justify-evenly space-x-4'>
                                <button className='bg-white w-1/3 rounded-2xl py-2'>1</button>
                                <button className='bg-white w-1/3 rounded-2xl py-2'>2</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right column */}
                <div className="w-1/10 flex select-none flex-col space-y-4 opacity-0 mobile:space-y-3">
                    <Actionbtn
                        text=""
                        disabled={true}
                        to="/settings"
                        bgColor="#AB47BC"
                        icon={PiGearSixBold}
                    />
                    <Actionbtn
                        text=""
                        disabled={true}
                        to="/achievement"
                        bgColor="#8BC34A"
                        icon={IoBulbOutline}
                    />
                </div>
            </div>
        </>
    )
}

export default Settings
