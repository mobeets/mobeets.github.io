---
layout: post
title: "Landslide (game)"
description: ""
category: made
tags: []
---
{% include JB/setup %}
<!-- https://deck-of-cards.js.org/ -->

## Brief Overview

Players take turns playing and moving cards to form sequences of cards called stacks. Players can place a bid next to each stack indicating how they think a stack will end. When a player's bid card can be added to the top of its stack, the player wins the stack, getting to collect the stack of cards and the bid. The object of the game is to have won the most cards by the time the deck runs out twice.

## Set up

<img style="width: 30%; min-width: 150px; float: left; margin-right: 20px;" src="/assets/images/landslide/setup.png">

- Deal 6 cards to each player.
- Place the remaining cards face down to form the deck.
- Flip the top card over, face up, in between the two players. This forms the first stack.
- Players now take turns playing back and forth until the deck is empty. As soon as the deck is empty, any cards in the discard pile are shuffled to form a second deck. As soon as the second deck is empty, the game ends.

<div style="clear: both;"></div>

## How to play

Each turn consists of four phases. These phases must be played in order, but only the first phase is required. When your turn is over, play passes to the other player.

1. __Play a card__ (required): You must either a) start a new stack, b) add to an existing stack, or c) bid on an existing stack.
2. __Move stacks__: You may move one stack on top of another, provided the stacks would form a legal sequence when connected, and as long as you already had a bid on both stacks.
3. __Win stacks__: If your bid card could be played on top of a stack, you collect the cards in the stack and your bid card.
4. __Draw cards__: You may draw cards from the deck until you have six cards in your hand.

## How to win

The player who has won the most cards by the end of the game is the winner. Because the game involves some luck, players should play best-of-three to decide the overall winner.

## More details on playing a turn

### 1. Play a card (required)

For this phase, choose one (and only one) of three actions:

1. __Start a new stack__ by playing a single card from your hand.
2. __Add to a stack__ by playing a card (or sequence of cards) onto only _one_ of the existing stacks. You can play any number of cards, as long as each card in the stack matches the previous card in number, or is the same color and +/- 1 away in value. (Similar to Uno rules.) For example, if the top card on a stack is the King of Hearts, the next card could be another King (of any color), or a red Queen, or a red Ace. (Aces are considered one away from both Kings and Twos.)
3. __Bid on a stack__ by playing a single card below the stack. You can bid on a stack at any time, but when you play a bid card it cannot match the current top card of the stack in color or number. Once you have placed a bid on a stack, that bid cannot be removed or replaced. Your opponent can make their own bid on each stack. Your goal is to win a stack of cards by getting your bid card to finish the stack. (See the "Win stacks" section below.)

<img style="width: 30%; min-width: 150px; float: left; margin-bottom: 10px; margin-right: 10px;" src="/assets/images/landslide/play-1.png">
<img style="width: 30%; min-width: 150px; float: left; margin-bottom: 10px; margin-right: 10px;" src="/assets/images/landslide/play-2.png">
<img style="width: 30%; min-width: 150px; float: left; margin-bottom: 10px; margin-right: 10px;" src="/assets/images/landslide/play-3.png">
<div style="clear: both;"></div>

### 2. Move stacks

You can move a stack onto another stack only if you already have a bid on both, and if the resulting stack would form a legal sequence of cards. Any bid cards from the moved stack are sent to the discard pile. Any number of stacks can be moved in the same turn.

<img style="width: 30%; min-width: 150px; float: left; margin-bottom: 10px; margin-right: 10px;" src="/assets/images/landslide/move-1.png">
<img style="width: 30%; min-width: 150px; float: left; margin-bottom: 10px; margin-right: 10px;" src="/assets/images/landslide/move-2.png">
<img style="width: 30%; min-width: 150px; float: left; margin-bottom: 10px; margin-right: 10px;" src="/assets/images/landslide/move-3.png">
<div style="clear: both;"></div>

### 3. Win stacks

<img style="width: 30%; min-width: 150px; float: left; margin-bottom: 10px; margin-right: 10px;" src="/assets/images/landslide/win.png">

For each stack that you have a bid on, if the bid card would be a legal play on top of that stack, you win the bid card and the cards in the stack. Collect these cards and place them aside. If the other player had a bid card on that same stack, move that card to the discard pile. Any number of stacks can be won in the same turn.

If there are no more stacks left at this point, the next card from the deck is automatically flipped up to become the first card of a new stack (as at the beginning of the game).

<div style="clear: both;"></div>

### 4. Draw cards

Finally, you may choose to draw cards from the deck until you have six cards in your hand. If the first deck is empty before you have drawn the required number of cards, you must shuffle the discard pile to form a second deck, and then draw the remaining number of cards you need from that new deck. The game ends as soon as the second deck is empty!

<br><br>
Landslide was created with Jess Graves in September, 2018.
