import React, {useState, useEffect} from 'react';
import MusicList from '../components/MusicList';

const MusicContainer = () => {
    const [musics, setMusic] = useState([]);

    useEffect(() => {
        getMusic();
    }, [])

    const getMusic = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(music => setMusic(music.feed.entry))
    }


    return (
        <div className="main-container">
            {/* MusicList */}
            <MusicList music={musics} />

        </div>
    )


}

export default MusicContainer;
