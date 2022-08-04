import TopControls from "./TopControls"

export default function Content(props){
    return(
        <div className="content">
            <TopControls />
            <p>Boa noite</p>
            <div className="grid">
                <table>
                    <tr>
                        <td className="horizontalCards"><p>Músicas curtidas</p></td>
                        <td className="horizontalCards"><p>Whatever podcast</p></td>
                        <td className="horizontalCards"><p>Meus episódios</p></td>
                    </tr>
                    <tr>
                        <td className="horizontalCards"><p>Músicas curtidas</p></td>
                        <td className="horizontalCards"><p>Whatever podcast</p></td>
                        <td className="horizontalCards"><p>Meus episódios</p></td>
                    </tr>                        
                </table>
            </div>
        </div>
    )
}