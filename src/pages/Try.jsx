import React from 'react'
import Ribbon from '../assets/ribbon.png'
import Stars from '../assets/stars.png'
import Gold from '../assets/Gold.png'
import Silver from '../assets/Silver.png'
import Bronze from '../assets/Bronze.png'
import Top1 from '../assets/top1.png'
import Top2 from '../assets/top2.png'
import Top3 from '../assets/top3.png'

const ModalLeaderBoard = () => {
    return (
        <>
            <div className="absolute inset-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-70 font-nunito font-black">
                <div className="text-shadow border-modalbrowndark bg-modalbrownlight relative flex h-[90%] w-1/3 flex-col justify-end items-center gap-5 rounded-3xl border-8 p-8 mobile:h-[80%] ipad:w-1/2 mobile:w-1/2 mobile:gap-0 mobile:p-4">
                    <div
                        style={{ backgroundImage: `url(${Ribbon})` }}
                        className="absolute inset-x-0 -top-7 flex h-28 w-full flex-col items-center bg-cover bg-center text-center  mobile:-top-9"
                    ></div>
                    <span className="absolute inset-x-0 -top-3 text-center text-3xl text-white mobile:text-xl mobile:-top-2.5">
                        Leaderboard
                    </span>

                    <img
                        src={Stars}
                        alt="stars.png"
                        className="h-28 object-cover object-center mobile:h-20 mobile:w-56 w-80"
                    />
                    <div className="inner-shadow h-full w-full overflow-y-auto space-y-5 rounded-xl bg-white p-4">
                        <div className="flex items-center">
                            <div className="w-[10%]">
                                <img
                                    src={Gold}
                                    alt="Gold.png"
                                    className="size-full"
                                />
                            </div>
                            <div className="w-[10%]">
                                <img
                                    src={Top1}
                                    alt="top1.png"
                                    className="size-full"
                                />
                            </div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[10%]">
                                <img
                                    src={Silver}
                                    alt="Gold.png"
                                    className="size-full"
                                />
                            </div>
                            <div className="w-[10%]">
                                <img
                                    src={Top2}
                                    alt="top1.png"
                                    className="size-full"
                                />
                            </div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[10%]">
                                <img
                                    src={Bronze}
                                    alt="Gold.png"
                                    className="size-full"
                                />
                            </div>
                            <div className="w-[10%]">
                                <img
                                    src={Top3}
                                    alt="top1.png"
                                    className="size-full"
                                />
                            </div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[10%]">img</div>
                            <div className="w-[10%]">dp</div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[10%]">img</div>
                            <div className="w-[10%]">dp</div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[10%]">img</div>
                            <div className="w-[10%]">dp</div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[10%]">img</div>
                            <div className="w-[10%]">dp</div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[10%]">img</div>
                            <div className="w-[10%]">dp</div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[10%]">img</div>
                            <div className="w-[10%]">dp</div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>{' '}
                        <div className="flex items-center">
                            <div className="w-[10%]">img</div>
                            <div className="w-[10%]">dp</div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[10%]">img</div>
                            <div className="w-[10%]">dp</div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[10%]">img</div>
                            <div className="w-[10%]">dp</div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[10%]">img</div>
                            <div className="w-[10%]">dp</div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[10%]">img</div>
                            <div className="w-[10%]">dp</div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[10%]">img</div>
                            <div className="w-[10%]">dp</div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[10%]">img</div>
                            <div className="w-[10%]">dp</div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[10%]">img</div>
                            <div className="w-[10%]">dp</div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>
                              <div className="flex items-center">
                            <div className="w-[10%]">
                               img
                            </div>
                            <div className="w-[10%]">
                              dp
                            </div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>      <div className="flex items-center">
                            <div className="w-[10%]">
                               img
                            </div>
                            <div className="w-[10%]">
                              dp
                            </div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>
                              <div className="flex items-center">
                            <div className="w-[10%]">
                               img
                            </div>
                            <div className="w-[10%]">
                              dp
                            </div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>
                              <div className="flex items-center">
                            <div className="w-[10%]">
                               img
                            </div>
                            <div className="w-[10%]">
                              dp
                            </div>
                            <div className="w-[60%] pl-4">Player 1212</div>
                            <div className="w-[20%]">
                                29 <span>pts</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalLeaderBoard
