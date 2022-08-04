export default function TopControls(props){
    return(
        <div className="topControls">
            <div className="pagePrevNext">
                <div>
                    <input className="prevNext" value={'<'} type={'button'} />
                    <input className="prevNext" value={'>'} type={'button'} />
                </div>
            </div>
            <div className="upgradeAndUser">
                <div>
                    <input className="upgrade" value={'Faça upgrade'} type={'button'} />
                    <input className="user" value={'UserName'} type={'button'} />
                </div>
            </div>
        </div>
    )
}