// function showPage(pageId){
// document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
// document.getElementById(pageId).classList.add('active');
// }

// function showPopup(){
// const popup=document.getElementById('popup');
// popup.style.display='block';
// setTimeout(()=>{
// popup.style.display='none';
// document.getElementById('afterText').innerText='HOW IS IT ???';
// },2000);
// }

// const board=document.getElementById('board');
// let cells=Array(9).fill('');

// function createBoard(){
// board.innerHTML='';
// cells.forEach((_,i)=>{
// const cell=document.createElement('div');
// cell.classList.add('cell');
// cell.onclick=()=>move(i);
// board.appendChild(cell);
// });
// }
// createBoard();

// function move(i){
// if(cells[i]!=='')return;
// cells[i]='player';
// board.children[i].innerHTML='<img src="player.jpg">';
// if(checkWin('player')){
// document.getElementById('result').innerText='You win';
// return;
// }
// computerMove();
// }

// function computerMove(){
// let empty=cells.map((v,i)=>v===''?i:null).filter(v=>v!==null);
// if(empty.length===0)return;
// let random=empty[Math.floor(Math.random()*empty.length)];
// cells[random]='comp';
// board.children[random].innerHTML='<img src="comp.jpg">';
// if(checkWin('comp')){
// document.getElementById('result').innerText='I win the match';
// }
// }

// function checkWin(p){
// const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
// return win.some(c=>c.every(i=>cells[i]===p));
// }

// function resetGame(){
// cells=Array(9).fill('');
// document.getElementById('result').innerText='';
// createBoard();
// }

// function openFinal(){
// document.getElementById('finalPopup').style.display='block';
// }
/* =========================
   PAGE NAVIGATION + HIDE POPUPS
========================= */
// function showPage(pageId){

//   /* hide all pages */
//   document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

//   /* show selected page */
//   document.getElementById(pageId).classList.add('active');

//   /* hide Page 4 popup when navigating */
//   const finalPopup = document.getElementById('finalPopup');
//   if(finalPopup){
//     finalPopup.style.display = 'none';
//   }

//   /* hide Page 1 popup when navigating */
//   const popup = document.getElementById('popup');
//   if(popup){
//     popup.style.display = 'none';
//   }
// }


// /* =========================
//    PAGE 1 – YES POPUP
// ========================= */
// function showPopup(){
//   const popup = document.getElementById('popup');
//   popup.style.display = 'block';

//   setTimeout(()=>{
//     popup.style.display = 'none';
//     document.getElementById('afterText').innerText='HOW IS IT ???';
//   },2000);
// }


// /* =========================
//    PAGE 1 – NO BUTTON RUN AWAY
// ========================= */
// const noBtn = document.getElementById("noBtn");

// if(noBtn){
//   noBtn.addEventListener("mouseover", ()=>{
//     const x = Math.random() * (window.innerWidth - 100);
//     const y = Math.random() * (window.innerHeight - 100);

//     noBtn.style.position = "absolute";
//     noBtn.style.left = x + "px";
//     noBtn.style.top = y + "px";
//   });
// }


// /* =========================
//    PAGE 1 – RANDOM MESSAGE “bole yar”
// ========================= */
// const page1 = document.getElementById("page1");
// const randomMsg = document.getElementById("randomMsg");

// if(page1){
//   page1.addEventListener("click", (e)=>{

//     if(e.target.tagName === "BUTTON") return;

//     randomMsg.style.display = "block";

//     setTimeout(()=>{
//       randomMsg.style.display = "none";
//     },1000);
//   });
// }


// /* =========================
//    PAGE 2 – TIC TAC TOE
// ========================= */
// const board = document.getElementById('board');
// let cells = Array(9).fill('');

// function createBoard(){
//   if(!board) return;

//   board.innerHTML='';
//   cells.forEach((_,i)=>{
//     const cell=document.createElement('div');
//     cell.classList.add('cell');
//     cell.onclick=()=>move(i);
//     board.appendChild(cell);
//   });
// }
// createBoard();

// function move(i){
//   if(cells[i]!=='') return;

//   cells[i]='player';
//   board.children[i].innerHTML='<img src="player.jpg">';

//   if(checkWin('player')){
//     document.getElementById('result').innerText='You win';
//     return;
//   }

//   computerMove();
// }

// function computerMove(){
//   let empty=cells.map((v,i)=>v===''?i:null).filter(v=>v!==null);
//   if(empty.length===0) return;

//   let random=empty[Math.floor(Math.random()*empty.length)];
//   cells[random]='comp';
//   board.children[random].innerHTML='<img src="comp.jpg">';

//   if(checkWin('comp')){
//     document.getElementById('result').innerText='I win the match';
//   }
// }

// function checkWin(p){
//   const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
//   return win.some(c=>c.every(i=>cells[i]===p));
// }

// function resetGame(){
//   cells=Array(9).fill('');
//   document.getElementById('result').innerText='';
//   createBoard();
// }


// /* =========================
//    PAGE 4 – FINAL POPUP
// ========================= */
// function openFinal(){
//   const finalPopup = document.getElementById('finalPopup');
//   if(finalPopup){
//     finalPopup.style.display='block';
//   }
// }
// /* PAGE 1 ELEMENTS */
// // const noBtn = document.getElementById("noBtn");
// // const btnArea = document.getElementById("btnArea");
// // const page1 = document.getElementById("page1");
// // const randomMsg = document.getElementById("randomMsg");

// /* NO BUTTON RUN AWAY – BUT NOT INTO NAVBAR */
// if(noBtn){
//   noBtn.addEventListener("mouseover", ()=>{

//     const navHeight = document.querySelector(".nav").offsetHeight;

//     const areaWidth = window.innerWidth - 100;
//     const areaHeight = window.innerHeight - navHeight - 100;

//     const x = Math.random() * areaWidth;
//     const y = Math.random() * areaHeight + navHeight;

//     noBtn.style.position = "absolute";
//     noBtn.style.left = x + "px";
//     noBtn.style.top = y + "px";
//   });
// }

// /* RANDOM CLICK MESSAGE – VALENTINE STYLE */
// if(page1){
//   page1.addEventListener("click", (e)=>{

//     if(e.target.tagName === "BUTTON") return;

//     /* show at click position */
//     randomMsg.style.display = "block";
//     randomMsg.style.left = e.clientX + "px";
//     randomMsg.style.top = e.clientY + "px";
//     randomMsg.style.transform = "translate(-50%, -50%)";

//     setTimeout(()=>{
//       randomMsg.style.display = "none";
//     },1000);
//   });
// }
/* =========================
   PAGE NAVIGATION + HIDE POPUPS
========================= */
// function showPage(pageId){

//   document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
//   document.getElementById(pageId).classList.add('active');

//   const finalPopup = document.getElementById('finalPopup');
//   if(finalPopup) finalPopup.style.display = 'none';

//   const popup = document.getElementById('popup');
//   if(popup) popup.style.display = 'none';
// }


// /* =========================
//    PAGE 1 – YES POPUP
// ========================= */
// function showPopup(){
//   const popup = document.getElementById('popup');
//   popup.style.display = 'block';

//   setTimeout(()=>{
//     popup.style.display = 'none';
//     document.getElementById('afterText').innerText='HOW IS IT ???';
//   },2000);
// }


// /* =========================
//    PAGE 1 – NO BUTTON RUN AWAY
// ========================= */
// const noBtn = document.getElementById("noBtn");

// function moveNoButton(){

//   const nav = document.querySelector(".nav");
//   const navHeight = nav ? nav.offsetHeight : 0;

//   const areaWidth = window.innerWidth - 100;
//   const areaHeight = window.innerHeight - navHeight - 100;

//   const x = Math.random() * areaWidth;
//   const y = Math.random() * areaHeight + navHeight;

//   noBtn.style.position = "fixed";
//   noBtn.style.left = x + "px";
//   noBtn.style.top = y + "px";
// }

// if(noBtn){

//   /* Desktop */
//   noBtn.addEventListener("mouseover", moveNoButton);

//   /* Mobile */
//   noBtn.addEventListener("touchstart", function(e){
//     e.preventDefault();
//     moveNoButton();
//   });

//   /* Prevent accidental click */
//   noBtn.addEventListener("click", function(e){
//     e.preventDefault();
//     moveNoButton();
//   });
// }


// /* =========================
//    PAGE 1 – RANDOM MESSAGE “bole yar 💖”
// ========================= */
// const page1 = document.getElementById("page1");
// const randomMsg = document.getElementById("randomMsg");

// if(page1){
//   page1.addEventListener("click", (e)=>{

//     if(e.target.tagName === "BUTTON") return;

//     randomMsg.style.display = "block";
//     randomMsg.style.left = e.clientX + "px";
//     randomMsg.style.top = e.clientY + "px";
//     randomMsg.style.transform = "translate(-50%, -50%)";

//     setTimeout(()=>{
//       randomMsg.style.display = "none";
//     },1000);
//   });
// }


// /* =========================
//    PAGE 2 – TIC TAC TOE
// ========================= */
// const board = document.getElementById('board');
// let cells = Array(9).fill('');

// function createBoard(){
//   if(!board) return;

//   board.innerHTML='';
//   cells.forEach((_,i)=>{
//     const cell=document.createElement('div');
//     cell.classList.add('cell');
//     cell.onclick=()=>move(i);
//     board.appendChild(cell);
//   });
// }
// createBoard();

// function move(i){
//   if(cells[i]!=='') return;

//   cells[i]='player';
//   board.children[i].innerHTML='<img src="player.jpg">';

//   if(checkWin('player')){
//     document.getElementById('result').innerText='You win';
//     return;
//   }

//   computerMove();
// }

// function computerMove(){
//   let empty=cells.map((v,i)=>v===''?i:null).filter(v=>v!==null);
//   if(empty.length===0) return;

//   let random=empty[Math.floor(Math.random()*empty.length)];
//   cells[random]='comp';
//   board.children[random].innerHTML='<img src="comp.jpg">';

//   if(checkWin('comp')){
//     document.getElementById('result').innerText='I win the match';
//   }
// }

// function checkWin(p){
//   const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
//   return win.some(c=>c.every(i=>cells[i]===p));
// }

// function resetGame(){
//   cells=Array(9).fill('');
//   document.getElementById('result').innerText='';
//   createBoard();
// }


// /* =========================
//    PAGE 4 – FINAL POPUP
// ========================= */
// function openFinal(){
//   const finalPopup = document.getElementById('finalPopup');
//   if(finalPopup){
//     finalPopup.style.display='block';
//   }
// }
document.addEventListener("DOMContentLoaded", () => {

  window.showPage = function(pageId, btn){

    /* show selected page */
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');

    /* NAV BUTTON ACTIVE GLOW */
    document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');

    /* hide popups when navigating */
    const finalPopup = document.getElementById('finalPopup');
    if(finalPopup) finalPopup.style.display = 'none';

    const popup = document.getElementById('popup');
    if(popup) popup.style.display = 'none';
  };



  /* =========================
     PAGE 1 – YES POPUP
  ========================= */
window.showPopup = function(){

  const popup = document.getElementById('popup');

  popup.style.display = 'block';

  setTimeout(()=>{
    popup.style.display = 'none';

    /* clear text below if any */
    const afterText = document.getElementById('afterText');
    if(afterText) afterText.innerText = '';

  },2000);
};


  /* =========================
     PAGE 1 – NO BUTTON RUN AWAY
  ========================= */
  const noBtn = document.getElementById("noBtn");

  function moveNoButton(){

    const nav = document.querySelector(".nav");
    const navHeight = nav ? nav.offsetHeight : 0;

    const areaWidth = window.innerWidth - 120;
    const areaHeight = window.innerHeight - navHeight - 120;

    const x = Math.random() * areaWidth;
    const y = Math.random() * areaHeight + navHeight;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  }

  if(noBtn){

    /* Desktop */
    noBtn.addEventListener("mouseover", moveNoButton);

    /* Mobile */
    noBtn.addEventListener("touchstart", function(e){
      e.preventDefault();
      moveNoButton();
    });

    /* Prevent click */
    noBtn.addEventListener("click", function(e){
      e.preventDefault();
      moveNoButton();
    });
  }


  /* =========================
     PAGE 1 – RANDOM MESSAGE
  ========================= */
const page1 = document.getElementById("page1");

if(page1){
  page1.addEventListener("click",(e)=>{

    if(e.target.tagName === "BUTTON") return;

    for(let i=0;i<3;i++){

      const msg = document.createElement("div");
      msg.className = "random-msg";
      msg.innerText = "boliye ji 💖";


      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 100);

      msg.style.left = x + "px";
      msg.style.top = y + "px";

      document.body.appendChild(msg);

      msg.style.display = "block";

      setTimeout(()=>{
        msg.remove();
      },1000);
    }
  });
}


  /* =========================
     PAGE 2 – TIC TAC TOE
  ========================= */
  const board = document.getElementById('board');
  let cells = Array(9).fill('');

  function createBoard(){
    if(!board) return;

    board.innerHTML='';
    cells.forEach((_,i)=>{
      const cell=document.createElement('div');
      cell.classList.add('cell');
      cell.onclick=()=>move(i);
      board.appendChild(cell);
    });
  }

  function move(i){
    if(cells[i]!=='') return;

    cells[i]='player';
    board.children[i].innerHTML='<img src="Screenshot 2026-02-15 103529.png">';

    if(checkWin('player')){
      document.getElementById('result').innerText='You win';
      return;
    }

    computerMove();
  }

  function computerMove(){
    let empty=cells.map((v,i)=>v===''?i:null).filter(v=>v!==null);
    if(empty.length===0) return;

    let random=empty[Math.floor(Math.random()*empty.length)];
    cells[random]='comp';
    board.children[random].innerHTML='<img src="suman (1).png">';

    if(checkWin('comp')){
      document.getElementById('result').innerText='I win the match';
    }
  }

  function checkWin(p){
    const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    return win.some(c=>c.every(i=>cells[i]===p));
  }

  window.resetGame = function(){
    cells=Array(9).fill('');
    document.getElementById('result').innerText='';
    createBoard();
  };

  createBoard();


  /* =========================
     PAGE 4 – FINAL POPUP
  ========================= */
  window.openFinal = function(){
    const finalPopup = document.getElementById('finalPopup');
    if(finalPopup){
      finalPopup.style.display='block';
    }
  };

});
