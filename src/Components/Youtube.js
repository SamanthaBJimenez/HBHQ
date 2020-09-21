import React from 'react';
import youtube1 from './../ImgFiles/IMG_8765.jpeg';
import youtube2 from './../ImgFiles/IMG_8764.jpeg';
import youtube3 from './../ImgFiles/IMG_8775.jpeg';

const Youtube = () => {
    return (
        <div class='youtube-main'>
            <h1>Youtube</h1>
            <h4 style={{"font-weight": "200"}}>Browse episodes of the HBHQ youtube channel, updated weekly by our lovely host___.</h4>
            <div class='youtube-container'>
                <div class='youtube-div'>
                    <img class='youtube-clip' src={youtube1}/>
                </div>
                <div class='youtube-div'>
                    <img class='youtube-clip' src={youtube2}/>
                </div>
                <div class='youtube-div'>
                    <img class='youtube-clip' src={youtube3}/>
                </div>
            </div>
        </div>
    )
}

export default Youtube;