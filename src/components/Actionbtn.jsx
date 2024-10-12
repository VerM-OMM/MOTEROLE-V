import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate, Link } from 'react-router-dom'

const Actionbtn = ({
    icon: Icon,
    bgColor = '#8D8686', // Default to stone color in hex
    text = 'Back',
    onClick,
    isLink = true, // If this should be a link
    to = '#', // Default link target
}) => {
    const navigate = useNavigate()

    // Default function to navigate one step back
    const defaultOnClick = () => {
        navigate(-1)
    }

    // Use inline styles to set dynamic background color
    const buttonStyle = {
        backgroundColor: bgColor,
    }

    const buttonClasses = `size-12 mobile:size-10 ipad:size-14 flex cursor-pointer items-center justify-center rounded-xl text-center text-white action-btn`

    return (
        <div>
            {isLink ? (
                <Link to={to} className={buttonClasses} style={buttonStyle}>
                    {Icon && (
                        <Icon className="size-12 p-1 mobile:size-10 ipad:size-14" />
                    )}
                    {text}
                </Link>
            ) : (
                <button
                    onClick={onClick || defaultOnClick}
                    className={buttonClasses}
                    style={buttonStyle}
                >
                    {Icon && (
                        <Icon className="size-12 p-1 mobile:size-10 ipad:size-14" />
                    )}
                    {text}
                </button>
            )}
        </div>
    )
}

Actionbtn.propTypes = {
    icon: PropTypes.elementType.isRequired,
    bgColor: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    isLink: PropTypes.bool,
    to: PropTypes.string,
}

export default Actionbtn
