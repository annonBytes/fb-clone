import React from 'react'
import '../components/Sidebar.css'
import SidebarRow from './SidebarRow'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import StorefrontIcon from '@material-ui/icons/Storefront'
import ChatIcon from '@material-ui/icons/Chat'
import PeopleIcon from '@material-ui/icons/People'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow 
              src='https://scontent.flos2-1.fna.fbcdn.net/v/t1.0-1/c47.0.120.120a/p120x120/129846842_104133858226888_7881386938517876986_o.jpg?_nc_cat=111&ccb=3&_nc_sid=7206a8&_nc_eui2=AeGoNE3wCPq32d24fGO7ih4U8udPddJVnQ_y50910lWdD4INZ1PooB0npYPYgjBiQuSe23bLGAZuSrMypnTCH42s&_nc_ohc=LsHGr5eKC9YAX8IAoap&_nc_ht=scontent.flos2-1.fna&tp=27&oh=a7389403bd32b498c38d0daf647de143&oe=605FF783' 
              title="Daniel Ockiya"
            />
            <SidebarRow 
               Icon={LocalHospitalIcon}
               title="COVID-19 Information Center"
            />
            <SidebarRow 
                 Icon={EmojiFlagsIcon}
                 title="Pages"
            />
            <SidebarRow 
                  Icon={PeopleIcon}
                  title="Friends"
            />
            <SidebarRow 
                 Icon={ChatIcon}
                 title="Messenger"
            />
            <SidebarRow 
                 Icon={StorefrontIcon}
                 title="Marketplace"
            />
            <SidebarRow 
                 Icon={VideoLibraryIcon}
                 title="Videos"
            />
            <SidebarRow 
                 Icon={ExpandMoreOutlinedIcon}
                 title="Marketplace"
            />
        </div>
    )
}

export default Sidebar
