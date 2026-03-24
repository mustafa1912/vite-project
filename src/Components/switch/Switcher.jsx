import React, { useEffect, useState } from 'react'

// import images
import purple from "../../../src/assets/images/purple.png";
import red from "../../../src/assets/images/red.png";
import blueviolet from "../../../src/assets/images/blueviolet.png";
import blue from "../../../src/assets/images/blue.png";
import goldenrod from "../../../src/assets/images/goldenrod.png";
import magenta from "../../../src/assets/images/magenta.png";
import yellowgreen from "../../../src/assets/images/yellowgreen.png";
import orange from "../../../src/assets/images/orange.png";
import green from "../../../src/assets/images/green.png";
import yellow from "../../../src/assets/images/yellow.png";

const COLOR_IMAGES = {
    purple, red, blueviolet, blue,
    goldenrod, magenta, yellowgreen,
    orange, green, yellow
}

const COLORS = [
    'purple', 'red', 'blueviolet', 'blue',
    'goldenrod', 'magenta', 'yellowgreen',
    'orange', 'green', 'yellow'
]

function Switcher() {
    const [IsSwitcherOpen, setIsSwitcherOpen] = useState(false)
    const toggleSwitch = () => setIsSwitcherOpen(!IsSwitcherOpen)

    const [activeColor, setActiveColor] = useState(() => {
        return sessionStorage.getItem('activeColor') || 'yellow'
    })

    useEffect(() => {
        sessionStorage.setItem('activeColor', activeColor)

        const oldLink = document.getElementById('color-theme')
        if (oldLink) oldLink.remove()

        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.id = 'color-theme'
        link.href = `/src/assets/style/css/${activeColor}.css`
        document.head.appendChild(link)
    }, [activeColor])

    return (
        <React.Fragment>
            <div id="preloader" className="preloader off">
                <div className="black_wall"></div>
                <div className="loader"></div>
            </div>
            <div id="switcher" className={`${IsSwitcherOpen}`}>
                <div className="content-switcher">
                    <h4>STYLE SWITCHER</h4>
                    <ul>
                        {COLORS.map((color) => (
                            <li key={color}>
                                <span
                                    onClick={() => setActiveColor(color)}
                                    title={color}
                                    className={`color my-2 ${activeColor === color ? 'active' : ''}`}
                                >
                                    <img
                                        src={COLOR_IMAGES[color]}
                                        alt={color}
                                    />
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div id="hideSwitcher" onClick={toggleSwitch}>×</div>
                </div>
            </div>
            <div id="showSwitcher" onClick={toggleSwitch} className="styleSecondColor shadow">
                <i className="fa fa-cog fa-spin"></i>
            </div>
        </React.Fragment>
    )
}

export default Switcher