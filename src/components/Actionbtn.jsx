import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom' // Assumes React Router is used for navigation

const ActionBtn = ({
    icon: Icon, // Accepts a component as a prop for the icon
    bgColor = 'stone', // Default background color
    text = 'Back', // Default button text
    onClick, // Function for button click, optional
    isLink = false, // Determine if it's a link
    to = '#', // Default link target
}) => {
    const navigate = useNavigate() // Hook for navigation

    // Default function to navigate one step back
    const defaultOnClick = () => {
        navigate(-1)
    }

    const buttonClasses = `size-12 mobile:size-10 ipad:size-14 flex cursor-pointer items-center justify-center rounded-xl bg-${bgColor} text-center text-white action-btn`

    return (
        <div>
            {isLink ? (
                <a href={to} className={buttonClasses}>
                    {Icon && <Icon  className="size-12 mobile:size-10 ipad:size-14" />} {/* Render the icon if provided */}
                    {text}
                </a>
            ) : (
                <button
                    onClick={onClick || defaultOnClick}
                    className={buttonClasses}
                >
                    {Icon && <Icon  className="size-12 mobile:size-10 ipad:size-14" />} {/* Render the icon if provided */}
                    {text}
                </button>
            )}
        </div>
    )
}

// PropTypes for type checking
ActionBtn.propTypes = {
    icon: PropTypes.elementType.isRequired, // Icon component
    bgColor: PropTypes.string, // Background color
    text: PropTypes.string, // Button text
    onClick: PropTypes.func, // Click handler for button
    isLink: PropTypes.bool, // Determine if it's a link
    to: PropTypes.string, // Link target
}

export default ActionBtn
