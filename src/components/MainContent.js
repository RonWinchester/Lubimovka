import React from 'react'
import Elements from './Elements';
import Sidebar from './Sidebar';

function MainContent({cards, alphabetItem}) {
 
    return(
        <div className="mainContent">
            <Elements cards = {cards}></Elements>
            <Sidebar alphabetItem = {alphabetItem}></Sidebar>
        </div>
    )
}

export default MainContent