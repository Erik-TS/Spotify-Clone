import BottomBarLeft from "./BottomLeft"
import Player from "./Player"
import BottomRight from "./BottomRight"

export default function BottomBar(props) {
    return (
        <div className="bottomBar">
            <div className={'bottomBarSide'}>
                <BottomBarLeft />
            </div>
            <div className={'bottomBarCenter'}>
                <Player />
            </div>
            <div className={'bottomBarSide'}>
                <BottomRight />
            </div>
        </div>
    )
}