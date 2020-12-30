import React from 'react';

import {
    SidebarContainer, Icon, CloseIcon,
    SidebarWrapper, SidebarLink,
    SidebarMenu
} from './SidebarElement';
const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="Blog" >
                        Blog
                     </SidebarLink>
                    <SidebarLink to="Contact US " >
                        Contact US
                     </SidebarLink>
                    <SidebarLink to="services">
                        Services
                     </SidebarLink>
                    <SidebarLink to="About">
                        About
                     </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar
