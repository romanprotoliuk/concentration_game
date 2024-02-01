# Marvel Match Game

## Pitch:

Game rules!

Look for pairs of cards by turning them over 2 at a time. If you find a match, you get 10 points. When a match is unsuccessful, 1 point is deducted from your scoreboard. The goal is to have highest number of points in the shortest amount of time!

This game also comes in two difficulty levels. Level easy consists of a four by four grid of tiles. Level hard is a six by six grid. I gave it a marvel theme and for images I gathered comics artwork of marvel superheroes and villains.

[Link to game here](https://romanprotoliuk.github.io/marvel_match_game/)

## Tech Stack:

React

## MVP GOALs

When I began to brainstorm on this project my initial MVP goals were:

- To have 6x6 grid layed out
- with cards upside down,
- on click cards turn over 2 at a time,
- if not a match turn two cards over and try again,
- after three unsuccessful match shave some time off the timer,
- timer working,
- reset button,
- when timer is done show some kind of a popup for players results,
- keep a point system of how many maches a player got,
- after each reset shuffle cards.

I met all my MVP goals with a slight change of direction. For example, at the time I didn't know for sure what to do with my time feature. I didn’t know If I should have a set time that counts down and the user has to get as many matches as possible for that set amount of time. I decided to actually start the time and have it running for the whole game until it’s over.

## STRETCH Goals

- two levels: Hard - 6x6 grid, Easy - 4x4 grid.
- mobile friendly layout
- Marvel themed
- Sound when there's a match

## Potential Roadblocks

- reshuffling cards algorithm,
- after three unsuccessful match shave some time off the timer,
- if not a match turn two cards over and try again.

The process of making this game started off with just a 6x6 grid. Then I started to implement basic styling, and right after that basic DOM. In a matter of a few days I had the 6x6 grid and inside it with the help of CSS I got the tiles to turn over on click. Next I started to think about the logic of the game and how it would actually function under the hood. In the beginning I hard coded an array with 18 unique number (36 in total). I found the Fisher-Yates Algorithm that can randomly shuffle the array.

```javascript
const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};
```
