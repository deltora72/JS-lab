# Slot machine game

This is a little slot machine game I designed last week for fun. The rules are very simple:

    1) You need some coins for playing the game, otherwise the machine will show you an error.

    2) There are two game modes: "Random" and "Fixed".

    3) In the "Random" mode, you press the spin button and the reels will start spinning, each one for a random
       number of times:
        --The first reel will spin for min "200" and max "299" times
        --The second reel will spin for min "250" and max "349" times
        --The first reel will spin for min "300" and max "399" times
       so you can expect the reels to stop spinning from left to right with 500 milliseconds delay.

    4) In the "Fixed" mode, you choose the picture and the position you want it to land at one each reel.

    5) There are 3 horizontal win lines on each reel: "Top", "Center" and "Bottom" and reels will only stop
       at this exact positions.

    6) Wins will only happen in one of the following ways:
        --The reel is stopped in the center line
        --Or the reel is stopped in top and bottom lines(which means the middle line is not showing).

    7) Each reel is made of 5 different pics, organized in special order(3xBAR, 1xBAR, 2xBAR, 7, CHERRY).

    8) By every spin, the reels will move one position ahead in the sequence. For example, if "CHERRY" is
       at the center, after one spin it will go to bottom line.

    9) By every spin, the reels will move one position ahead in the sequence. For example, if "CHERRY" is
       at the center, after one spin it will go to bottom line.

    10) There is a pay-out table on the right side of the screen. Here you can find all the possible combinations
        of the reels which will be considered "win" and will provide you with prizes.

That's it! You can now start playing and win yourself some prizes ;)

    *please note*
        --This game was designed only as prototype and with the minimum effort. I only used
          "Vue.js" and "Vuetify" library and plain JavaScript in a very simple way to just showcase
          some of the powers of Vue and Vuetify. In a real-life, production ready example of this game,
          things can be done in a much more structured and optimized way.
