import SidebarList from "./SidebarList"

export default function Sidebar(props) {
    return (
        <div className='sidebar'>
            <div className='sidebarContainer'>
                <img alt={''} src="https://img.icons8.com/ios-filled/50/ffffff/spotify.png" className="logo" />
                <SidebarList list={['Início', 'Buscar', 'Sua Biblioteca']} img={["https://img.icons8.com/tiny-glyph/28/ffffff/experimental-home-tiny-glyph.png", "https://img.icons8.com/ios-glyphs/28/ffffff/search--v1.png", "https://img.icons8.com/material-outlined/28/ffffff/book-shelf.png"]} />
                <hr className={'dNoneHr'} />
                <SidebarList list={['Criar playlist', 'Músicas Curtidas', 'Playlist 01']} img={["https://img.icons8.com/material-outlined/28/ffffff/plus-2-math--v1.png", "https://img.icons8.com/material-outlined/28/ffffff/like--v1.png", "https://img.icons8.com/external-regular-kawalan-studio/28/ffffff/external-square-shape-regular-kawalan-studio.png"]} />
                <hr className="normalHr" />
                <SidebarList list={['Albúm 1', 'Albúm 2', 'Albúm 3']} img={['', '', '']} />
            </div>
        </div>
    )
}