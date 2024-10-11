import React from 'react'
import Background from '../components/Background'
import Play from '../assets/menubutton/play.png'
import Achievement from '../assets/menubutton/achievement.png'
import Profile from '../assets/menubutton/profile.png'
import Settings from '../assets/menubutton/settings.png'
import { Link } from 'react-router-dom'
import FullScreen from '../components/FullScreen'
import ActionBtn from '../components/ActionBtn'
import { LuArrowBigLeft } from "react-icons/lu";

const Menu = () => {
    return (
        <>
            <Background />
            <div className="flex h-screen justify-between p-5">
                {/* left column */}
                <div className="flex flex-col justify-between">
                    {/* Action button acting as a "Back" button */}
                    <ActionBtn text="" icon={LuArrowBigLeft} />{' '}
                    {/* No need to pass onClick if using the default navigate(-1) */}
                    <FullScreen />
                </div>
                {/* center */}
                <div className="-mt-20 flex w-[80%] flex-col items-center justify-center space-y-4 font-bubbles text-white mobile:-mt-10">
                    <div className="text-shadow-title text-9xl mobile:text-7xl">
                        MoTeRole
                    </div>
                    <div className="flex space-x-4 text-4xl mobile:text-xl ipad:text-2xl">
                        <Link
                            to="/category"
                            className="button-shadow flex flex-col items-center space-y-4 rounded-3xl bg-applegreen p-5 mobile:space-y-2 mobile:rounded-lg mobile:p-3 ipad:rounded-xl ipad:p-4"
                        >
                            <img
                                src={Play}
                                alt="play.png"
                                className="size-52 rounded-lg bg-butter mobile:size-24 mobile:rounded-md ipad:size-36"
                            />
                            <span>Laro</span>
                        </Link>
                        <Link
                            to="/achievement"
                            className="button-shadow flex flex-col items-center space-y-4 rounded-3xl bg-tangerine p-5 mobile:space-y-2 mobile:rounded-lg mobile:p-3 ipad:rounded-xl ipad:p-4"
                        >
                            <img
                                src={Achievement}
                                alt="achievement.png"
                                className="size-52 rounded-lg bg-butter mobile:size-24 mobile:rounded-md ipad:size-36"
                            />
                            <span>Tagumpay</span>
                        </Link>
                        <Link
                            to="/profile"
                            className="button-shadow flex flex-col items-center space-y-4 rounded-3xl bg-sky p-5 mobile:space-y-2 mobile:rounded-lg mobile:p-3 ipad:rounded-xl ipad:p-4"
                        >
                            <img
                                src={Profile}
                                alt="profile.png"
                                className="size-52 rounded-lg bg-butter mobile:size-24 mobile:rounded-md ipad:size-36"
                            />
                            <span>Laro</span>
                        </Link>
                        <Link
                            to="/settings"
                            className="button-shadow flex flex-col items-center space-y-4 rounded-3xl bg-grape p-5 mobile:space-y-2 mobile:rounded-lg mobile:p-3 ipad:rounded-xl ipad:p-4"
                        >
                            <img
                                src={Settings}
                                alt="settings.png"
                                className="size-52 rounded-lg bg-butter mobile:size-24 mobile:rounded-md ipad:size-36"
                            />
                            <span>Laro</span>
                        </Link>
                    </div>
                </div>
                {/* right column */}
                <div>3</div>
            </div>
        </>
    )
}

export default Menu
