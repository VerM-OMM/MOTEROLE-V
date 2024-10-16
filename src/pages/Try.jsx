import React, { useEffect, useState, useCallback } from 'react'
import Background from '../components/Background'
import FullScreen from '../components/FullScreen'
import Actionbtn from '../components/Actionbtn'
import { Link } from 'react-router-dom'
import { LuArrowBigLeft } from 'react-icons/lu'
import { PiGearSixBold } from 'react-icons/pi'
import { IoBulbOutline } from 'react-icons/io5'

const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'NG',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
]

const letterName = {
    A: 'Aso',
    B: 'Bola',
    C: 'Carrot',
    D: 'Daga',
    E: 'Eroplano',
    F: 'Filipino',
    G: 'Gagamba',
    H: 'Hari',
    I: 'Isda',
    J: 'Jollibee',
    K: 'Karabaw',
    L: 'Lapis',
    M: 'Manok',
    N: 'Niyog',
    Ñ: 'Niño',
    NG: 'Ngipin',
    O: 'Okra',
    P: 'Pusa',
    Q: 'Quezo',
    R: 'Radyo',
    S: 'Saging',
    T: 'Talong',
    U: 'Unggoy',
    V: 'Vinta',
    W: 'Watawat',
    X: 'X-ray',
    Y: 'Yelo',
    Z: 'Zebra',
}


// Memoized Actionbtn to prevent unnecessary re-renders
const MemoizedActionbtn = React.memo(({ text, to, bgColor, icon }) => (
    <Actionbtn text={text} to={to} bgColor={bgColor} icon={icon} />
))

const Alphabet = () => {
    useEffect(() => {
        document.title = 'Alphabet'
    })

    const useLetterImage = (letter) => {
        const [imageSrc, setImageSrc] = useState(null)

        useEffect(() => {
            const loadImage = async () => {
                try {
                    const image = await import(
                        `../assets/alphabetbtn/${letter}.png`
                    )
                    setImageSrc(image.default)
                } catch (err) {
                    console.error(`Error loading image for ${letter}:`, err)
                    setImageSrc(null)
                }
            }

            loadImage()
        }, [letter])

        return imageSrc
    }
    return (
        <>
            <Background />
            <div className="relative flex h-screen w-screen justify-between items-center p-5">
                {/* left column */}
                <div className="w-1/10 flex flex-col justify-between h-full">
                    {/* Action button acting as a "Back" button */}
                    <MemoizedActionbtn
                        text=""
                        to="/category"
                        bgColor="#F40000"
                        icon={LuArrowBigLeft}
                    />
                    <FullScreen />
                </div>

                <div className="relative flex h-[70%] w-[75%] flex-col items-center just  rounded-3xl border-8 border-lava bg-white p-8">
                    <span className="absolute -top-9 flex w-1/3 items-center justify-center rounded-2xl border-8 border-lava bg-white font-nunito text-4xl font-black">
                        Letra
                    </span>
                    <div className="inner-shadow flex h-full w-full items-center gap-6 overflow-x-auto overflow-y-hidden rounded-xl bg-cheese px-6 py-4 font-nunito">
                        {alphabet.map((letter, index) => {
                            const imageSrc = useLetterImage(letter)
                            const isNG = letter === 'NG'
                            const sound = letterName[letter]
                            return (
                                <Link
                                    key={index}
                                    to="/leveldifficulty"
                                    className={`relative flex h-[75%] flex-col justify-between px-1 py-2 xl:py-2 ${
                                        isNG
                                            ? 'w-auto md:w-72 xl:w-56'
                                            : 'w-48 md:w-72 xl:w-56'
                                    } flex-shrink-0 flex-col rounded-2xl border-8 border-lava bg-[#FFEDBE] drop-shadow-[5px_5px_0px_#000000] transition-transform active:scale-95`}
                                >
                                    <div className="flex justify-start font-nunito text-4xl font-black lg:text-7xl xl:text-6xl">
                                        {isNG
                                            ? 'NG ng'
                                            : `${letter}${letter.toLowerCase()}`}
                                    </div>
                                    <div className="flex h-20 w-full items-center justify-center">
                                        {imageSrc ? (
                                            <img
                                                src={imageSrc}
                                                alt={`${letter} letter`}
                                                className={`${
                                                    isNG
                                                        ? 'h-24 w-56 lg:h-48 xl:h-28'
                                                        : 'h-24 w-56 lg:h-48 xl:h-32'
                                                } object-contain`}
                                            />
                                        ) : (
                                            <span>Image not found</span>
                                        )}
                                    </div>
                                    <div className="flex justify-end font-nunito text-xl font-black lg:text-6xl xl:text-4xl">
                                        {sound || 'No sound available'}{' '}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>

                {/* right column */}
                <div className="w-1/10 flex select-none flex-col space-y-4 mobile:space-y-3 h-full">
                    <MemoizedActionbtn
                        text=""
                        to="/settings"
                        bgColor="#AB47BC"
                        icon={PiGearSixBold}
                    />
                    <MemoizedActionbtn
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

export default Alphabet
