import React,{useEffect,useState} from 'react'
import './Bar.css'
import Image from "../images/ukulele.jpg"
import {FaBackward} from "react-icons/fa";
import {FaForward} from "react-icons/fa";
import {FaPlay} from "react-icons/fa";
import {FaStop} from "react-icons/fa";


const ActionBar = () => {
    const musicContainer = document.querySelector('.music-container')
    const playBtn = document.querySelector('#play')
    const prevBtn = document.querySelector('#prev')
    const nextBtn = document.querySelector('#next')
    const audio = document.querySelector('#audio')
    const progress = document.querySelector('.progress')
    const progressContainer = document.querySelector('.progress-container')
    const title = document.querySelector('#title')
    const cover =document.querySelector('#cover')

    // Songs titles
    const songs = ['hey','summer', 'ukulele']
    const [songIndex, setSongIndex]=useState(1)
    

    // // Keep track of songs
    // let songIndex = 1

    //Initially load song info DOM
    useEffect(()=> loadSong(songs[songIndex]), [])
    // loadSong(songs[songIndex]);

    //Update song details
    function loadSong(song){
        title.innerText = song
        audio.src = `../music/${song}.mp3`
        cover.src = `../images/${song}.jpg`
    }

    function playSong(){
        musicContainer.classList.add('play')
        playBtn.querySelector('i.fas').classList.remove('fa-play')
        playBtn.querySelector('i.fas').classList.add('fa-pause')

        audio.play()
    }

    function pauseSong(){
        musicContainer.classList.add('play')
        playBtn.querySelector('i.fas').classList.add({FaPlay})
        playBtn.querySelector('i.fas').classList.remove({FaStop})

        audio.pause()
    }


    // Event Listeners
    playBtn.addEventListener('click', () => {
        const isPlaying = musicContainer.classList.contains('play')

        if(isPlaying) {
            pauseSong()
        } else {
            playSong()
        }
    });

  return (
    <div>
       
        <div className='action-container play'>
            <div className='music-info'>
            <h4 id='title'> Hey!</h4>
            <div className="progress-container">
                <div className="progress"></div>
            </div>
            </div>

            <audio src='music/ukulele.mp3' id='audio'></audio>

            <div className='image-container'>
                <img src={Image} className='image' id='image'/>
            </div>

            <div className="navigation">
                <button width="10px" height="10px" id='prev' className='action-btn'>
                    <FaBackward />
                </button>
                <button width="10px" height="10px" id='play' className='action-btn action-btn-big'>
                    <FaPlay width="20px" height="20px" id='play'/>
                </button>
                <button width="10px" height="10px" id='next' className='action-btn'>
                    <FaForward width="10px" height="10px" id='forward'/>
                </button>
            </div>
        
        </div>
      
    </div>
  )
}

export default ActionBar
