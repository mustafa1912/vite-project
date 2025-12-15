import React from 'react'

function Switcher() {
    return (
        <React.Fragment>
            <div id="preloader" className="preloader off">
                <div className="black_wall"></div>
                <div className="loader"></div>
            </div>
            <div id="switcher" className="">
                <div className="content-switcher">
                    <h4 >STYLE SWITCHER</h4>
                    <ul>
                        <li>
                            <a href="https://slimhamdi.net/tunis/dark/about.html#"
                                onclick="setActiveStyleSheet(&#39;purple&#39;);" title="purple" className="color">
                                <img
                                    src="./About - Tunis Personal Portfolio_files/purple.png" alt="purple" /></a>
                        </li>
                        <li>
                            <a href="https://slimhamdi.net/tunis/dark/about.html#" onclick="setActiveStyleSheet(&#39;red&#39;);"
                                title="red" className="color"><img src="./About - Tunis Personal Portfolio_files/red.png"
                                    alt="red" /></a>
                        </li>
                        <li>
                            <a href="https://slimhamdi.net/tunis/dark/about.html#"
                                onclick="setActiveStyleSheet(&#39;blueviolet&#39;);" title="blueviolet" className="color"><img
                                    src="./About - Tunis Personal Portfolio_files/blueviolet.png" alt="blueviolet" /></a>
                        </li>
                        <li>
                            <a href="https://slimhamdi.net/tunis/dark/about.html#"
                                onclick="setActiveStyleSheet(&#39;blue&#39;);" title="blue" className="color"><img
                                    src="./About - Tunis Personal Portfolio_files/blue.png" alt="blue" /></a>
                        </li>
                        <li>
                            <a href="https://slimhamdi.net/tunis/dark/about.html#"
                                onclick="setActiveStyleSheet(&#39;goldenrod&#39;);" title="goldenrod" className="color"><img
                                    src="./About - Tunis Personal Portfolio_files/goldenrod.png" alt="goldenrod" /></a>
                        </li>
                        <li>
                            <a href="https://slimhamdi.net/tunis/dark/about.html#"
                                onclick="setActiveStyleSheet(&#39;magenta&#39;);" title="magenta" className="color"><img
                                    src="./About - Tunis Personal Portfolio_files/magenta.png" alt="magenta" /></a>
                        </li>
                        <li>
                            <a href="https://slimhamdi.net/tunis/dark/about.html#"
                                onclick="setActiveStyleSheet(&#39;yellowgreen&#39;);" title="yellowgreen" className="color"><img
                                    src="./About - Tunis Personal Portfolio_files/yellowgreen.png" alt="yellowgreen" /></a>
                        </li>
                        <li>
                            <a href="https://slimhamdi.net/tunis/dark/about.html#"
                                onclick="setActiveStyleSheet(&#39;orange&#39;);" title="orange" className="color"><img
                                    src="./About - Tunis Personal Portfolio_files/orange.png" alt="orange" /></a>
                        </li>
                        <li>
                            <a href="https://slimhamdi.net/tunis/dark/about.html#"
                                onclick="setActiveStyleSheet(&#39;green&#39;);" title="green" className="color"><img
                                    src="./About - Tunis Personal Portfolio_files/green.png" alt="green" /></a>
                        </li>
                        <li>
                            <a href="https://slimhamdi.net/tunis/dark/about.html#"
                                onclick="setActiveStyleSheet(&#39;yellow&#39;);" title="yellow" className="color"><img
                                    src="./About - Tunis Personal Portfolio_files/yellow.png" alt="yellow" /></a>
                        </li>
                    </ul>

                    <a href="https://themeforest.net/item/tunis-personal-portfolio/26761598?irgwc=1&amp;clickid=UBs0rDX6YxyJWfewUx0Mo3E1UkiwozXD10XATw0&amp;iradid=275988&amp;irpid=1327395&amp;iradtype=ONLINE_TRACKING_LINK&amp;irmptype=mediapartner&amp;mp_value1=&amp;utm_campaign=af_impact_radius_1327395&amp;utm_medium=affiliate&amp;utm_source=impact_radius"
                        className="waves-effect waves-light font-weight-700 purchase"><i className="fa fa-shopping-cart"></i>
                        Purchase</a>
                    <div id="hideSwitcher">×</div>
                </div>
            </div>
            <div id="showSwitcher" className="styleSecondColor"><i className="fa fa-cog fa-spin"></i></div>
            {/*<!-- Live Style Switcher Ends - demo only --> */}
        </React.Fragment>
    )
}

export default Switcher