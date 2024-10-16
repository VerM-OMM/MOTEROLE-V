import React, { useEffect } from 'react'
import Background from '../components/Background'
import FullScreen from '../components/FullScreen'
import Actionbtn from '../components/Actionbtn'
import { Link } from 'react-router-dom'
import { LuArrowBigLeft } from 'react-icons/lu'
import { PiGearSixBold } from 'react-icons/pi'
import { IoBulbOutline } from 'react-icons/io5'
import line from '../assets/categorybtn/line.png'
import shape from '../assets/categorybtn/shape.png'
import abc from '../assets/categorybtn/abc.png'

const SignUp = () => {
    useEffect(() => {
        document.title = 'Sign up'
    })
    return (
        <>
            <Background />
            <div className="flex h-screen justify-between p-5">
                {/* left column */}
                <div className="w-1/10 flex flex-col justify-end">
                    {/* No need to pass onClick if using the default navigate(-1) */}
                    <FullScreen />
                </div>
                {/* center */}
                <div className="-mt-12 flex w-full flex-col items-center justify-center space-y-4 font-bubbles text-white mobile:-mt-8 mobile:space-y-3">
                    <div className="text-shadow text-8xl mobile:text-5xl ipad:text-7xl">
                        MoTeRole
                    </div>
                    <div className="relative flex h-[50%] w-[70%] flex-col items-center rounded-3xl border-8 border-grape bg-white bg-opacity-30 p-10 mobile:h-[60%] mobile:rounded-xl mobile:border-4 mobile:p-4 ipad:h-[40%] ipad:p-6">
                        <form
                            action=""
                            className="flex h-full w-full flex-col items-center justify-between space-y-4 font-nunito text-3xl font-black text-black mobile:text-2xl"
                        >
                            <div className="flex h-full w-full justify-center space-x-4">
                                <input
                                    type="text"
                                    name="signup-firstname"
                                    id="sigin-firstname"
                                    placeholder="First Name"
                                    className="h-full w-full rounded-2xl border-4 border-grape px-4 focus:outline-0 mobile:rounded-xl"
                                />
                                <input
                                    type="text"
                                    name="signup-lastname"
                                    id="sigin-lastname"
                                    placeholder="Last Name"
                                    className="h-full w-full rounded-2xl border-4 border-grape px-4 focus:outline-0 mobile:rounded-xl"
                                />
                            </div>
                            <input
                                type="email"
                                name="signup-email"
                                id="sigin-email"
                                placeholder="Email"
                                className="h-full w-full rounded-2xl border-4 border-grape px-4 focus:outline-0 mobile:rounded-xl"
                            />
                            <input
                                type="password"
                                name="signup-password"
                                id="sigin-password"
                                placeholder="Password"
                                className="h-full w-full rounded-2xl border-4 border-grape px-4 focus:outline-0 mobile:rounded-xl"
                            />
                        </form>

                        <div className="absolute -bottom-8 flex justify-evenly w-[100%] h-14 text-4xl space-x-4 ipad:text-3xl ipad:-bottom-11 mobile:text-xl mobile:h-10 mobile:-bottom-7">
                            <Link to="/signin" className='w-1/3 bg-bluesky flex items-center justify-center rounded-xl h-full text-shadow active:scale-95 duration-100'>Sign In</Link>
                            <Link to="/signup" className='w-1/3 bg-bluesky flex items-center justify-center rounded-xl h-full text-shadow active:scale-95 duration-100'>Sign Up</Link>
                        </div>
                    </div>
                </div>
                {/* right column */}
                <div className="w-1/10 mobile:space-y- flex select-none flex-col space-y-4 opacity-0">
                    {/* Action button acting as a "Back" button */}
                    <Actionbtn
                        text=""
                        to="/settings"
                        bgColor="#AB47BC"
                        disabled={true}
                        icon={PiGearSixBold}
                    />
                    <Actionbtn
                        text=""
                        to="/achievement"
                        bgColor="#8BC34A"
                        disabled={true}
                        icon={IoBulbOutline}
                    />
                </div>
            </div>
        </>
    )
}

export default SignUp
