'use client';
import { useState, useEffect } from 'react';
import './main.css';
import { Spacing } from '../components/Spacing';

export default function Morpion() {

            const players = ["X", "O"];
            const [gameOver, setGameOver] = useState(false);
            const [currPlayerDisplay, setCurrPlayerDisplay] = useState(players[0]);
            let currPlayer = players[0];
            const [score1, setScore1] = useState(0);
            const [score2, setScore2] = useState(0);
    
    
        function check() {
            const squares = document.querySelectorAll('.cell');
            if (squares[0].innerHTML !== '' && squares[0].innerHTML === squares[1].innerHTML && squares[1].innerHTML === squares[2].innerHTML) {
                squares[0].style.backgroundColor = 'yellow';
                squares[1].style.backgroundColor = 'yellow';
                squares[2].style.backgroundColor = 'yellow';
                winner(squares[0].innerHTML);
                return;
            }
            if (squares[3].innerHTML !== '' && squares[3].innerHTML === squares[4].innerHTML && squares[4].innerHTML === squares[5].innerHTML) {
                squares[3].style.backgroundColor = 'yellow';
                squares[4].style.backgroundColor = 'yellow';
                squares[5].style.backgroundColor = 'yellow';
                winner(squares[3].innerHTML);
                return;
            }
            if (squares[6].innerHTML !== '' && squares[6].innerHTML === squares[7].innerHTML && squares[7].innerHTML === squares[8].innerHTML) {
                squares[6].style.backgroundColor = 'yellow';
                squares[7].style.backgroundColor = 'yellow';
                squares[8].style.backgroundColor = 'yellow';
                winner(squares[6].innerHTML);
                return;
            }
            if (squares[0].innerHTML !== '' && squares[0].innerHTML === squares[3].innerHTML && squares[3].innerHTML === squares[6].innerHTML) {
                squares[0].style.backgroundColor = 'yellow';
                squares[3].style.backgroundColor = 'yellow';
                squares[6].style.backgroundColor = 'yellow';
                winner(squares[0].innerHTML);
                return;
            }
            if (squares[1].innerHTML !== '' && squares[1].innerHTML === squares[4].innerHTML && squares[4].innerHTML === squares[7].innerHTML) {
                squares[1].style.backgroundColor = 'yellow';
                squares[4].style.backgroundColor = 'yellow';
                squares[7].style.backgroundColor = 'yellow';
                winner(squares[1].innerHTML);
                return;
            }
            if (squares[2].innerHTML !== '' && squares[2].innerHTML === squares[5].innerHTML && squares[5].innerHTML === squares[8].innerHTML) {
                squares[2].style.backgroundColor = 'yellow';
                squares[5].style.backgroundColor = 'yellow';
                squares[8].style.backgroundColor = 'yellow';
                winner(squares[2].innerHTML);
                return;
            }
            if (squares[0].innerHTML !== '' && squares[0].innerHTML === squares[4].innerHTML && squares[4].innerHTML === squares[8].innerHTML) {
                squares[0].style.backgroundColor = 'yellow';
                squares[4].style.backgroundColor = 'yellow';
                squares[8].style.backgroundColor = 'yellow';
                winner(squares[0].innerHTML);
                return;
            }
            if (squares[2].innerHTML !== '' && squares[2].innerHTML === squares[4].innerHTML && squares[4].innerHTML === squares[6].innerHTML) {
                squares[2].style.backgroundColor = 'yellow';
                squares[4].style.backgroundColor = 'yellow';
                squares[6].style.backgroundColor = 'yellow';
                winner(squares[2].innerHTML);
                return;
            }
        }
    
        function winner(winner) {
            const scoreX = document.getElementById('playerOne');
            const scoreO = document.getElementById('playerTwo');
            const modal = document.querySelector('.win-display');
            const grid = document.getElementById('grid');
            if (winner === players[0]) {
                grid.setAttribute('class', 'won');
                setScore1(score1 + 1);
                modal.innerHTML = 'Joueur ' + players[0] + ' à gagné !';
                scoreX.innerHTML = score1;
    
            } else {
                grid.setAttribute('class', 'won');
                setScore2(score2 + 1);
                modal.innerHTML = 'Joueur ' + players[1] + ' à gagné !';
                scoreO.innerHTML = score2;
            }
            setGameOver(true);
        }
    
        function setPiece(square) {
            console.log(currPlayer)
            square.innerHTML = currPlayer;
            if (currPlayer === players[0]) {
                console.log('currPlayer is X')
                currPlayer = players[1];
                setCurrPlayerDisplay(players[1]);
            } else {
                currPlayer = players[0];
                setCurrPlayerDisplay(players[0]);
            }
            check();
        }
        useEffect(() => {
            const grid = document.getElementById('grid');
            const restart = document.querySelector('#replay');
            const squares = document.querySelectorAll('.cell');
            squares.forEach((square) => {
                square.addEventListener('click', (e) => {
                    if (gameOver === true) {
                        return;
                    }
                    if (square.innerHTML !== '') {
                        return;
                    }
                    else {
                        setPiece(e.target);
                    }
                });
            });
            restart.addEventListener('click', () => {
                grid.classList.remove('won');
                squares.forEach((square) => {
                    square.removeEventListener('click', (e) => {
    
                    })
                    square.innerHTML = '';
                    square.style.backgroundColor = 'white';
                });
                setGameOver(false);
                currPlayer = players[0];
                
    
            });
        return () => {
            squares.forEach((square) => {
                square.removeEventListener('click', (e) => {
    
                })
            });
            restart.removeEventListener('click', () => {});
        }
        });

    return (<>
    <div id='body'>
        <header>
      <h1>Morpion</h1>
      <div>Joueur {currPlayerDisplay}</div>
    </header>

    <div id="grid">
      <div className="row">
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
      </div>
      <div className="row">
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
      </div>
      <div className="row">
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
      </div>

      <span className="win-display"></span>
    </div>

    <div className="controls">
      <div className="scores">
        <div>
          <span>Joueur 1</span>
          <span id="playerOne">{score1}</span>
        </div>
        <div>
          <span>Joueur 2</span>
          <span id="playerTwo">{score2}</span>
        </div>
      </div>

      <button type="button" id="replay">Rejouer</button>
    </div>
    <Spacing size='lg'/>
    </div>
    </>
    );
}