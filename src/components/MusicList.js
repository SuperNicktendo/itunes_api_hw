import React from 'react';
import ListItem from './ListItem';

const MusicList = ({music}) => {
    const musicItems = music.map((music, index) => {
        return <ListItem music={music} key={index}/>
    })

    return(
        <div>
            <ol>
                {musicItems}
            </ol>
        </div>
    )
}

export default MusicList;