export default function Player(props) {
    return (
        <div className="player">
            <div className="playerContainer">
                <div className="playerButtons">
                    <img src="https://img.icons8.com/ios/24/ffffff/shuffle.png" />
                    <img src="https://img.icons8.com/external-inkubators-glyph-inkubators/24/ffffff/external-previous-video-interface-inkubators-glyph-inkubators.png" />
                    <img src="https://img.icons8.com/ios-glyphs/50/ffffff/circled-play.png" />
                    <img src="https://img.icons8.com/external-inkubators-glyph-inkubators/25/ffffff/external-next-button-video-interface-inkubators-glyph-inkubators.png" />
                    <img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/25/ffffff/external-Repeat-arrows-tanah-basah-basic-outline-tanah-basah-2.png" />
                </div>
                <div className="progressBarContainer">
                    <p className="progressTime">0:00</p>
                    <div className="progressBar"></div>
                    <p className="progressTime">0:00</p>
                </div>
            </div>
        </div>
    )
}