import React, { useEffect, useRef, useState } from "react";
import "./Bar.css";
import Image from "../images/ukulele.jpg";
import { FaBackward } from "react-icons/fa";
import { FaForward } from "react-icons/fa";
import { FaPlay, FaStop } from "react-icons/fa";
import ReactAudioPlayer from "react-audio-player";
import ukulele from "../muisc/ukulele.mp3";

const ActionBar = () => {
  const musicContainer = document.querySelector(".music-container");
  const playBtn = useRef(null);
  const prevBtn = document.querySelector("#prev");
  const nextBtn = document.querySelector("#next");
  const [currAudio, setCurrAudio] = useState(require("../muisc/ukulele.mp3"));
  const audio = useRef();

  const progress = document.querySelector(".progress");
  const progressContainer = document.querySelector(".progress-container");
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState(null);

  // Songs titles
  const songs = ["hey", "summer", "ukulele"];
  const [songIndex, setSongIndex] = useState(1);

  // // Keep track of songs
  // let songIndex = 1

  //Initially load song info DOM
  useEffect(() => loadSong(songs[songIndex]), []);
  // loadSong(songs[songIndex]);

  //Update song details
  function loadSong(song) {
    setTitle(song);
    setCurrAudio(`../music/${song}.mp3`);
    setCover(`../images/${song}.jpg`);
  }

  function playSong() {
    // musicContainer.classList.add("play");
    // playBtn.querySelector("i.fas").classList.remove("fa-play");
    // playBtn.querySelector("i.fas").classList.add("fa-pause");

    audio.current.play();
  }

  function pauseSong() {
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fas").classList.add({ FaPlay });
    playBtn.querySelector("i.fas").classList.remove({ FaStop });

    audio.pause();
  }

  //
  const playClick = () => {
    // const isPlaying = musicContainer.classList.contains("play");
    return playSong();

    // if (isPlaying) {
    //   pauseSong();
    // } else {
    //   playSong();
    // }
  };

  return (
    <div>
      <div className="action-container play">
        <div className="music-info">
          <h4 id="title">{title}</h4>
          <div className="progress-container">
            <div className="progress"></div>
          </div>
        </div>

        {/* <audio ref={audio} src={currAudio} id="audio"></audio> */}
        <ReactAudioPlayer src={currAudio} autoPlay controls />

        <div className="image-container">
          <img src={Image} className="image" id="image" />
        </div>

        {/* <div className="navigation">
          <button width="10px" height="10px" id="prev" className="action-btn">
            <FaBackward />
          </button>
          <button
            width="10px"
            height="10px"
            id="play"
            ref={playBtn}
            onClick={() => playClick()}
            className="action-btn action-btn-big"
          >
            <FaPlay width="20px" height="20px" id="play" />
          </button>
          <button width="10px" height="10px" id="next" className="action-btn">
            <FaForward width="10px" height="10px" id="forward" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ActionBar;
