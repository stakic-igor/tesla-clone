import React from "react";
import styled from "styled-components";

const SideBarNavigation = () => {
    return (
        <>
            <SideBar>
                <SideBarAction>
                    <CloseButton>
                        <svg class="tds-icon tds-icon-close tds-modal-close-icon" 
                            viewBox="0 0 30 30" 
                            xmlns="http://www.w3.org/2000/svg">
                            <g stroke="var(--tds-icon--fill, #171a20)" 
                                stroke-width="1.5" 
                                stroke-linecap="round">
                                    <line x1="10" y1="10" x2="20" y2="20"></line>
                                    <line x1="20" y1="10" x2="10" y2="20"></line>
                            </g>
                        </svg>
                    </CloseButton>
                </SideBarAction>
            </SideBar>
            <Backdrop></Backdrop>
        </>
    )
}

// Styled

const SideBar = styled.section`
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 8px 16px 0px;
    box-sizing: border-box;
    position: fixed;
    height: 100%;
    width: 296px;
    top: 0;
    right: 0;
    z-index: 1000;
`

const SideBarAction = styled.div`
    box-sizing: border-box;
    padding: 1.5rem;
    width: 100%;
`

const CloseButton = styled.button`
    border: 0;
    background: transparent;
    cursor: pointer;
    width: 32px;
    height: 32px;
    padding: 0;
`

const Backdrop = styled.div`
    background: rgba(0, 0, 0, .25);
    backdrop-filter: blur(4px);
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    pointer-events: none;
`

export default SideBarNavigation;