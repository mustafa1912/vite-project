import React, { useState, use } from 'react'

function Switcher() {
    // Switcher
    const [IsSwitcherOpen, setIsSwitcherOpen] = useState(false)
    const toggleSwitch = () => {
        setIsSwitcherOpen(!IsSwitcherOpen)
    }
    // colors 
    const [ActiveColor, setActiveColor] = useState('yellow')
    const handelActiveColor = (color) => {
        setActiveColor(color)
        console.log(ActiveColor)
    }
    // const UseActiveColor = use(ActiveColor)
    return (
        <React.Fragment>
            <div id="preloader" className="preloader off" >
                <div className="black_wall"></div>
                <div className="loader"></div>
            </div>
            <div id="switcher" className={`${IsSwitcherOpen}`}>
                <div className="content-switcher">
                    <h4 >STYLE SWITCHER</h4>
                    <ul>
                        <li>
                            <span
                                onClick={() => handelActiveColor('purple')}
                                title="purple" className="color my-2">
                                <img
                                    src={'src/assets/images/purple.png'} alt="purple" /></span>
                        </li>
                        <li>
                            <span onClick={() => handelActiveColor('red')}
                                title="red" className="color my-2"><img src={'src/assets/images/red.png'}
                                    alt="red" /></span>
                        </li>
                        <li>
                            <span onClick={() => handelActiveColor('blueviolet')}
                                title="blueviolet" className="color my-2"><img
                                    src={'src/assets/images/blueviolet.png'} alt="blueviolet" /></span>
                        </li>
                        <li>
                            <span onClick={() => handelActiveColor('blue')}
                                title="blue" className="color my-2"><img
                                    src={'src/assets/images/blue.png'} alt="blue" /></span>
                        </li>
                        <li>
                            <span onClick={() => handelActiveColor('goldenrod')} title="goldenrod" className="color my-2"><img
                                src={'src/assets/images/goldenrod.png'} alt="goldenrod" /></span>
                        </li>
                        <li>
                            <span onClick={() => handelActiveColor('magenta')} title="magenta" className="color my-2"><img
                                src={'src/assets/images/magenta.png'} alt="magenta" /></span>
                        </li>
                        <li>
                            <span onClick={() => handelActiveColor('yellowgreen')}
                                title="yellowgreen" className="color my-2"><img
                                    src={'src/assets/images/yellowgreen.png'} alt="yellowgreen" /></span>
                        </li>
                        <li>
                            <span onClick={() => handelActiveColor('orange')}
                                title="orange" className="color my-2"><img
                                    src={'src/assets/images/orange.png'} alt="orange" /></span>
                        </li>
                        <li>
                            <span onClick={() => handelActiveColor('green')}
                                title="green" className="color my-2"><img
                                    src={'src/assets/images/green.png'} alt="green" /></span>
                        </li>
                        <li>
                            <span onClick={() => handelActiveColor('purple')} title="yellow" className="color my-2"><img
                                src={'src/assets/images/yellow.png'} alt="yellow" /></span>
                        </li>
                    </ul>
                    <div id="hideSwitcher" onClick={toggleSwitch}>×</div>
                </div>
            </div>
            <div id="showSwitcher" onClick={toggleSwitch} className="styleSecondColor shadow"><i className="fa fa-cog fa-spin"></i></div>
            {/*<!-- Live Style Switcher Ends - demo only --> */}
        </React.Fragment >
    )
}

export default Switcher