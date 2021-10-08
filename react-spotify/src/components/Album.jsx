import { Component } from "react";
import Table from "react-bootstrap/Table";

class Album extends Component {}

// <div>
//         <div className="jumbotron jumbotron-fluid bg-gradient d-flex align-items-end">

//     <svg className="op" id="leftIcon" xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-chevron-left" viewBox="0 0 16 16">
//       <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
//     </svg>
//     <svg className="op" id="rightIcon" xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-chevron-right" viewBox="0 0 16 16">
//       <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
//     </svg>

//     <img src="https://i1.sndcdn.com/artworks-000500823264-7n2dz6-t500x500.jpg" className="shadow ml-5" style={{width: "200px"}}>
//     <div className="album-jumbotron-description d-inline-block text-light ml-3">
//       <p className="mb-1">ALBUM</p>
//       <h3  className="mb-0">Bohemian Rhapsody (The Original Soundtrack)</h3>
//       <div className="artist-descr-area d-flex mt-2">
//        <span className="artist-icon-sm mr-1"></span>
//        <a href="#" className="text-white" id="exception"><p>Queen</p></a>
//        <p id="title-for-circles">2018</p>
//        <p>22 songs, 1hr 19min</p>
//       </div>
//     </div>
//    </div>

//   <!-- PLAYLIST MAIN-->

//   <div className="container-fluid" style={{marginLeft: "277px"}}>

// //   <!-- LEFT PART -->

//   <div className="row  mt-0">
//       <div className="col-12">

//     //   <!-- TABLE -->
//       <button id="playButton" onclick="play()" >
//         <svg id="playIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-play-fill" viewBox="0 0 16 16">
//           <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
//         </svg>
//       </button>

//       <div id="heartIcon">
//         <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-heart" viewBox="0 0 16 16">
//           <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
//         </svg>
//       </div>

//       <div id="ellipsisIcon">
//         <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-three-dots" viewBox="0 0 16 16">
//           <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
//         </svg>
//       </div>

//       <Table className="table borderless">
//         <thead>
//           <tr id="headingTrack">
//             <th style={{width: "2%"}} scope="col">#</th>
//             <th style="width: 65%;" scope="col">TITLE</th>
//             <th style="width: 30%"; scope="col">
//               <svg id="refresh" onclick="location.reload();" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#BAB7BE" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
//                 <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
//                 <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
//               </svg>
//             </th>
//             <th scope="col">
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16" style="margin-inline-start: 15px;">
//                 <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
//                 <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
//               </svg>
//             </th>
//             <th style="width: 3%;"></th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr  id="track1">
//             <th scope="row" >1</th>
//             <td >
//               <h6>20th Century Fox Fanfare</h6>
//               <p >Queen</p>
//             </td>
//             <td>
//               <button id="playTrack" onclick="playAudio()" type="button">
//                 <svg id="trackIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-play-fill" viewBox="0 0 16 16">
//                   <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
//                 </svg>
//               </button>
//               <button id="pauseTrack" onclick="pauseAudio()" type="button">
//                 <svg id="trackIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-pause-fill" viewBox="0 0 16 16">
//                   <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
//                 </svg>
//               </button>
//               <svg onclick="favourite1()" id="heart1" xmlns="http://www.w3.org/2000/svg" fill="#BAB7BE" className="bi bi-heart-fill" viewBox="0 0 16 16">
//                 <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
//               </svg>
//             </td>
//             <td>0:25</td>
//           </tr>
//           <tr  id="track2">
//             <th scope="row">2</th>
//             <td>
//               <h6>Somebody To Love</h6>
//               <p >Queen</p>
//             </td>
//             <td>
//               <button id="playTrack2" onclick="playAudio2()" type="button">
//                 <svg id="trackIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-play-fill" viewBox="0 0 16 16">
//                   <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
//                 </svg>
//               </button>
//               <button id="pauseTrack2" onclick="pauseAudio2()" type="button">
//                 <svg id="trackIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-pause-fill" viewBox="0 0 16 16">
//                   <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
//                 </svg>
//               </button>
//               <svg onclick="favourite2()" id="heart2" xmlns="http://www.w3.org/2000/svg" fill="#BAB7BE" className="bi bi-heart-fill" viewBox="0 0 16 16">
//                 <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
//               </svg>
//             </td>
//             <td>4:55</td>
//           </tr>
//           <tr id="track3">
//             <th scope="row">3</th>
//             <td>
//               <h6>Doing All Right - ...Revisited</h6>
//               <p >Smile</p>
//             </td>
//             <td>
//               <button id="playTrack3" onclick="playAudio3()" type="button">
//                 <svg id="trackIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-play-fill" viewBox="0 0 16 16">
//                   <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
//                 </svg>
//               </button>
//               <button id="pauseTrack3" onclick="pauseAudio3()" type="button">
//                 <svg id="trackIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-pause-fill" viewBox="0 0 16 16">
//                   <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
//                 </svg>
//               </button>
//               <svg onclick="favourite3()" id="heart3" xmlns="http://www.w3.org/2000/svg" fill="#BAB7BE" className="bi bi-heart-fill" viewBox="0 0 16 16">
//                 <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
//               </svg>

//             </td>
//             <td>3:16</td>
//           </tr>
//           <tr id="track4">
//             <th scope="row">4</th>
//             <td>
//               <h6>Keep Yourself Alive - Live At The Rainbow</h6>
//               <p >Queen</p>
//             </td>
//             <td>
//               <button id="playTrack4" onclick="playAudio4()" type="button">
//                 <svg id="trackIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-play-fill" viewBox="0 0 16 16">
//                   <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
//                 </svg>
//               </button>
//               <button id="pauseTrack4" onclick="pauseAudio4()" type="button">
//                 <svg id="trackIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-pause-fill" viewBox="0 0 16 16">
//                   <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
//                 </svg>
//               </button>
//               <svg onclick="favourite4()" id="heart4" xmlns="http://www.w3.org/2000/svg" fill="#BAB7BE" className="bi bi-heart-fill" viewBox="0 0 16 16">
//                 <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
//               </svg>
//             </td>
//             <td>3:56</td>
//           </tr>
//           <tr  id="track5">
//             <th scope="row">5</th>
//             <td>
//               <h6>Killer Queen</h6>
//               <p >Queen</p>
//             </td>
//             <td>
//               <button id="playTrack5" onclick="playAudio5()" type="button">
//                 <svg id="trackIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-play-fill" viewBox="0 0 16 16">
//                   <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
//                 </svg>
//               </button>
//               <button id="pauseTrack5" onclick="pauseAudio5()" type="button">
//                 <svg id="trackIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-pause-fill" viewBox="0 0 16 16">
//                   <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
//                 </svg>
//               </button>
//               <svg onclick="favourite5()" id="heart5" xmlns="http://www.w3.org/2000/svg" fill="#BAB7BE" className="bi bi-heart-fill" viewBox="0 0 16 16">
//                 <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
//               </svg>
//             </td>
//             <td>2:59</td>
//           </tr>
//           <tr  id="track6">
//             <th scope="row">6</th>
//             <td>
//               <h6>Fat Bottomed Girls</h6>
//               <p >Queen</p>
//             </td>
//             <td>
//               <button id="playTrack6" onclick="playAudio6()" type="button">
//                 <svg id="trackIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-play-fill" viewBox="0 0 16 16">
//                   <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
//                 </svg>
//               </button>
//               <button id="pauseTrack6" onclick="pauseAudio6()" type="button">
//                 <svg id="trackIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-pause-fill" viewBox="0 0 16 16">
//                   <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
//                 </svg>
//               </button>
//               <svg onclick="favourite6()" id="heart6" xmlns="http://www.w3.org/2000/svg" fill="#BAB7BE" className="bi bi-heart-fill" viewBox="0 0 16 16">
//                 <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
//               </svg>
//             </td>
//             <td>4:37</td>
//           </tr>
//           <tr  id="track7">
//             <th scope="row">7</th>
//             <td>
//               <h6>Bohemian Rhapsody</h6>
//               <p >Queen</p>
//             </td>
//             <td>
//               <button id="playTrack7" onclick="playAudio7()" type="button">
//                 <svg id="trackIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-play-fill" viewBox="0 0 16 16">
//                   <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
//                 </svg>
//               </button>
//               <button id="pauseTrack7" onclick="pauseAudio7()" type="button">
//                 <svg id="trackIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-pause-fill" viewBox="0 0 16 16">
//                   <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
//                 </svg>
//               </button>
//               <svg onclick="favourite7()" id="heart7" xmlns="http://www.w3.org/2000/svg" fill="#BAB7BE" className="bi bi-heart-fill" viewBox="0 0 16 16">
//                 <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
//               </svg>
//             </td>
//             <td>5:54</td>
//           </tr>
//           <tr   id="track8">
//             <th scope="row">8</th>
//             <td>
//               <h6>Now I'm Here - Live At The Hammersmith Odeon</h6>
//               <p >Queen</p>
//             </td>
//             <td>
//               <button id="playTrack8" onclick="playAudio8()" type="button">
//                 <svg id="trackIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-play-fill" viewBox="0 0 16 16">
//                   <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
//                 </svg>
//               </button>
//               <button id="pauseTrack8" onclick="pauseAudio8()" type="button">
//                 <svg id="trackIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-pause-fill" viewBox="0 0 16 16">
//                   <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
//                 </svg>
//               </button>
//               <svg onclick="favourite8()" id="heart8" xmlns="http://www.w3.org/2000/svg" fill="#BAB7BE" className="bi bi-heart-fill" viewBox="0 0 16 16">
//                 <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
//               </svg>
//             </td>
//             <td>4:25</td>
//           </tr>
//           <tr   id="track9">
//             <th scope="row">9</th>
//             <td>
//               <h6>Crazy Little Thing Called Love</h6>
//               <p >Queen</p>
//             </td>
//             <td>
//               <button id="playTrack9" onclick="playAudio9()" type="button">
//                 <svg id="trackIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-play-fill" viewBox="0 0 16 16">
//                   <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
//                 </svg>
//               </button>
//               <button id="pauseTrack9" onclick="pauseAudio9()" type="button">
//                 <svg id="trackIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-pause-fill" viewBox="0 0 16 16">
//                   <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
//                 </svg>
//               </button>
//               <svg onclick="favourite9()" id="heart9" xmlns="http://www.w3.org/2000/svg" fill="#BAB7BE" className="bi bi-heart-fill" viewBox="0 0 16 16">
//                 <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
//               </svg>
//             </td>
//             <td>2:43</td>
//           </tr>

//         </tbody>
//       </Table>

//       <div id="playing" className="pb-5 mb-5">
//         <svg id="stopIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#121212" className="bi bi-pause-fill" viewBox="0 0 16 16">
//           <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
//         </svg>

//         <h6 id="playingText" style="display: inline-block;"></h6>
//         <h6 id="playingText2" style="display: inline-block;"></h6>
//       </div>
//     </div>
//   </div>
//   </div>
//   </div>

export default Album;
