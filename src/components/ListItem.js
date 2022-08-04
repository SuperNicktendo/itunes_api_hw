import React from 'react';

const ListItem = ({music}) => {
    return(
        
        <li>
            <h2>{music.title.label}</h2>
            <img src={music["im:image"][2].label}/>
            <audio controls>
                <source src={music.link[1].attributes.href} type="audio/aac" />
            </audio>
        </li>
    )
        
        
    }

    export default ListItem;