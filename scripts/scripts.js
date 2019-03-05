document.addEventListener("DOMContentLoaded", function() {

var app = new Vue({
  el: "#app",
  data: {
    reelPos: 0,
    reelHeight: document.querySelectorAll('.reel')[0].offsetHeight,
    spinOneCount: 0,
    spinTwoCount: 0,
    spinThreeCount: 0,
    spinTime: 10,
    pics: [
      {id: "pic one", src: "pics/3xBAR.png"},
      {id: "pic two", src: "pics/BAR.png"},
      {id: "pic three", src: "pics/2xBAR.png"},
      {id: "pic four", src: "pics/7.png"},
      {id: "pic five", src: "pics/Cherry.png"}
    ],
    balance: 5000,
    rIsSpinning: false,
    fIsSpinning: false,
    gameMode: 'random',
    fmode: 'fixed',
    rmode: 'random',
    randVis: true,
    lineTop: false,
    lineCenter: false,
    lineBottom: false,
    curBalance: 5,
    coins: '',
    balanceAlert: false,
    fixVis: false,
    symbolList: ["1xBAR", "2xBAR", "3xBAR", "7", "CHERRY"],
    symbolLanding: ["Top", "Center", "Bottom"],
    cS1: '',
    cL1: '',
    cS2: '',
    cL2: '',
    cS3: '',
    cL3: '',
    payoutsHeaders: [
      { text: 'Combination', align: 'left', sortable: false, value: 'calories' },
      { text: 'Prize', align: 'right', sortable: false, value: 'calories' }
    ],
    payouts: [
      { combination: "3 CHERRY symbols on top line", prize: 2000 },
      { combination: "3 CHERRY symbols on center line", prize: 1000 },
      { combination: "3 CHERRY symbols on bottom line", prize: 4000 },
      { combination: "3 '7' symbols on any line", prize: 150 },
      { combination: "Any combination of CHERRY and '7' on any line", prize: 75 },
      { combination: "3 3xBAR symbols on any line", prize: 50 },
      { combination: "3 2xBAR symbols on any line", prize: 20 },
      { combination: "3 1xBAR symbols on any line", prize: 10 },
      { combination: "Combination of any 'BAR' symbols on any line", prize: 5 }
    ],
    curPosition: [0,0,0],
    playerWins: 0,
    newWin: 0
  },
  // watch: {
  //   spinOneCount: function (val) {
  //     console.log(val);
  //   }
  // },
  methods: {
    fixedSpin: function () {
      this.spinOneCount = this.spinTwoCount = this.spinThreeCount = 0;
      for (let tr of document.querySelectorAll('.payouts table tbody tr')) {
        tr.style.color = "#000000de";
        tr.style.backgroundColor = "#fff";
      }
      this.fIsSpinning = true;
      this.lineTop = false;
      this.lineCenter = false;
      this.lineBottom = false;
      // reel one fixed
      if (this.cS1 === "CHERRY" && this.cL1 === "Top" || this.cS1 === "3xBAR" && this.cL1 === "Bottom") {
        this.resetReels(); this.spinOne(203);
      } else if (this.cS1 === "CHERRY" && this.cL1 === "Center") {
        this.resetReels(); this.spinOne(204);
      } else if (this.cS1 === "CHERRY" && this.cL1 === "Bottom" || this.cS1 === "7" && this.cL1 === "Top") {
        this.resetReels(); this.spinOne(205);
      } else if (this.cS1 === "7" && this.cL1 === "Center") {
        this.resetReels(); this.spinOne(206);
      } else if (this.cS1 === "7" && this.cL1 === "Bottom" || this.cS1 === "2xBAR" && this.cL1 === "Top") {
        this.resetReels(); this.spinOne(207);
      } else if (this.cS1 === "2xBAR" && this.cL1 === "Center") {
        this.resetReels(); this.spinOne(208);
      } else if (this.cS1 === "2xBAR" && this.cL1 === "Bottom" || this.cS1 === "1xBAR" && this.cL1 === "Top") {
        this.resetReels(); this.spinOne(209);
      } else if (this.cS1 === "1xBAR" && this.cL1 === "Center") {
        this.resetReels(); this.spinOne(200);
      } else if (this.cS1 === "1xBAR" && this.cL1 === "Bottom" || this.cS1 === "3xBAR" && this.cL1 === "Top") {
        this.resetReels(); this.spinOne(201);
      } else if (this.cS1 === "3xBAR" && this.cL1 === "Center") {
        this.resetReels(); this.spinOne(202);
      }

      // reel two fixed
      if (this.cS2 === "CHERRY" && this.cL2 === "Top" || this.cS2 === "3xBAR" && this.cL2 === "Bottom") {
        this.resetReels(); this.spinTwo(203);
      } else if (this.cS2 === "CHERRY" && this.cL2 === "Center") {
        this.resetReels(); this.spinTwo(204);
      } else if (this.cS2 === "CHERRY" && this.cL2 === "Bottom" || this.cS2 === "7" && this.cL2 === "Top") {
        this.resetReels(); this.spinTwo(205);
      } else if (this.cS2 === "7" && this.cL2 === "Center") {
        this.resetReels(); this.spinTwo(206);
      } else if (this.cS2 === "7" && this.cL2 === "Bottom" || this.cS2 === "2xBAR" && this.cL2 === "Top") {
        this.resetReels(); this.spinTwo(207);
      } else if (this.cS2 === "2xBAR" && this.cL2 === "Center") {
        this.resetReels(); this.spinTwo(208);
      } else if (this.cS2 === "2xBAR" && this.cL2 === "Bottom" || this.cS2 === "1xBAR" && this.cL2 === "Top") {
        this.resetReels(); this.spinTwo(209);
      } else if (this.cS2 === "1xBAR" && this.cL2 === "Center") {
        this.resetReels(); this.spinTwo(200);
      } else if (this.cS2 === "1xBAR" && this.cL2 === "Bottom" || this.cS2 === "3xBAR" && this.cL2 === "Top") {
        this.resetReels(); this.spinTwo(201);
      } else if (this.cS2 === "3xBAR" && this.cL2 === "Center") {
        this.resetReels(); this.spinTwo(202);
      }

      // reel two fixed
      if (this.cS3 === "CHERRY" && this.cL3 === "Top" || this.cS3 === "3xBAR" && this.cL3 === "Bottom") {
        this.resetReels(); this.spinThree(203);
      } else if (this.cS3 === "CHERRY" && this.cL3 === "Center") {
        this.resetReels(); this.spinThree(204);
      } else if (this.cS3 === "CHERRY" && this.cL3 === "Bottom" || this.cS3 === "7" && this.cL3 === "Top") {
        this.resetReels(); this.spinThree(205);
      } else if (this.cS3 === "7" && this.cL3 === "Center") {
        this.resetReels(); this.spinThree(206);
      } else if (this.cS3 === "7" && this.cL3 === "Bottom" || this.cS3 === "2xBAR" && this.cL3 === "Top") {
        this.resetReels(); this.spinThree(207);
      } else if (this.cS3 === "2xBAR" && this.cL3 === "Center") {
        this.resetReels(); this.spinThree(208);
      } else if (this.cS3 === "2xBAR" && this.cL3 === "Bottom" || this.cS3 === "1xBAR" && this.cL3 === "Top") {
        this.resetReels(); this.spinThree(209);
      } else if (this.cS3 === "1xBAR" && this.cL3 === "Center") {
        this.resetReels(); this.spinThree(200);
      } else if (this.cS3 === "1xBAR" && this.cL3 === "Bottom" || this.cS3 === "3xBAR" && this.cL3 === "Top") {
        this.resetReels(); this.spinThree(201);
      } else if (this.cS3 === "3xBAR" && this.cL3 === "Center") {
        this.resetReels(); this.spinThree(202);
      }
    },
    randomSpin: function () {
      if (this.curBalance > 0) {
        this.curBalance--;
        this.spinOneCount = this.spinTwoCount = this.spinThreeCount = 0;
        self.rIsSpinning = true;
        this.spinOne(Math.floor(Math.random()*100 + 200));
        this.spinTwo(Math.floor(Math.random()*100 + 250));
        this.spinThree(Math.floor(Math.random()*100 + 300));
        for (let tr of document.querySelectorAll('.payouts table tbody tr')) {
          tr.style.color = "#000000de";
          tr.style.backgroundColor = "#fff";
        }
        this.lineTop = false; this.lineCenter = false; this.lineBottom = false;
      } else {
        this.balanceAlert = true;
      }
    },
    spinOne: function (spinsCount) {
      let reelPics = document.querySelectorAll('#reel1 .pic');
      // spinning function
      const self = this;
      let currentSpinsCount = 0;
      let anim = setInterval(function () {
        if (currentSpinsCount < spinsCount) {
          // reeling function -- moves the reel one position down
          for (let i of reelPics) {
            if (i.offsetTop === self.reelHeight * 1.75) {
              i.style.top = -self.reelHeight * .50 +'px';
              i.style.zIndex = '-2';
            } else {
              i.style.zIndex = '1';
              self.reelPos = i.offsetTop + self.reelHeight * .25;
              i.style.top = self.reelPos +'px';
            }
          }
          currentSpinsCount++;
        } else {
          self.spinOneCount = spinsCount;
          clearInterval(anim);
          currentSpinsCount = 0;
          self.spinFinished();
        }
      }, this.spinTime); // Sets tiem intervals for reel repeats
    },
    spinTwo: function (spinsCount) {
      let reelPics = document.querySelectorAll('#reel2 .pic');
      // spinning function
      this.rIsSpinning = true;
      const self = this;
      let currentSpinsCount = 0;
      let anim = setInterval(function () {
        if (currentSpinsCount < spinsCount) {
          // reeling function -- moves the reel one position down
          for (let i of reelPics) {
            if (i.offsetTop === self.reelHeight * 1.75) {
              i.style.top = -self.reelHeight * .50 +'px';
              i.style.zIndex = '-2';
            } else {
              i.style.zIndex = '1';
              self.reelPos = i.offsetTop + self.reelHeight * .25;
              i.style.top = self.reelPos +'px';
            }
          }
          currentSpinsCount++;
        } else {
          self.spinTwoCount = spinsCount;
          clearInterval(anim);
          currentSpinsCount = 0;
          self.spinFinished();
        }
      }, this.spinTime); // Sets tiem intervals for reel repeats
    },
    spinThree: function (spinsCount) {
      let reelPics = document.querySelectorAll('#reel3 .pic');
      // spinning function
      this.rIsSpinning = true;
      const self = this;
      let currentSpinsCount = 0;
      let anim = setInterval(function () {
        if (currentSpinsCount < spinsCount) {
          // reeling function -- moves the reel one position down
          for (let i of reelPics) {
            if (i.offsetTop === self.reelHeight * 1.75) {
              i.style.top = -self.reelHeight * .50 +'px';
              i.style.zIndex = '-2';
            } else {
              i.style.zIndex = '1';
              self.reelPos = i.offsetTop + self.reelHeight * .25;
              i.style.top = self.reelPos +'px';
            }
          }
          currentSpinsCount++;
        } else {
          self.spinThreeCount = spinsCount;
          clearInterval(anim);
          currentSpinsCount = 0;
          self.spinFinished();
        }
      }, this.spinTime); // Sets tiem intervals for reel repeats
    },
    resetReels: function () {
      document.getElementsByClassName('pic one')[0].style.top = "-25%";
      document.getElementsByClassName('pic two')[0].style.top = "25%";
      document.getElementsByClassName('pic three')[0].style.top = "75%";
      document.getElementsByClassName('pic four')[0].style.top = "125%";
      document.getElementsByClassName('pic five')[0].style.top = "175%";
      document.getElementsByClassName('pic one')[1].style.top = "-25%";
      document.getElementsByClassName('pic two')[1].style.top = "25%";
      document.getElementsByClassName('pic three')[1].style.top = "75%";
      document.getElementsByClassName('pic four')[1].style.top = "125%";
      document.getElementsByClassName('pic five')[1].style.top = "175%";
      document.getElementsByClassName('pic one')[2].style.top = "-25%";
      document.getElementsByClassName('pic two')[2].style.top = "25%";
      document.getElementsByClassName('pic three')[2].style.top = "75%";
      document.getElementsByClassName('pic four')[2].style.top = "125%";
      document.getElementsByClassName('pic five')[2].style.top = "175%";
      this.curPosition = [0,0,0];
      this.lineTop = false; this.lineCenter = false; this.lineBottom = false;
    },
    ModeSelector: function () {
      if (this.gameMode === 'random') {
        this.randVis = true;
        this.fixVis = false;
      } else {
        this.randVis = false;
        this.fixVis = true;
      }
    },
    addBalance: function () {
      if (this.coins > 0 && this.coins <= 5000) {
        this.addCoinsError = false;
        this.curBalance = Number(this.coins);
      }
    },
    spinFinished: function () {
      if (this.spinOneCount !== 0 && this.spinTwoCount !== 0 && this.spinThreeCount !== 0) {
        let posOneDigit = this.spinOneCount % 10;
        let posTwoDigit = this.spinTwoCount % 10;
        let posThreeDigit = this.spinThreeCount % 10;
        this.curPosition[0] = (this.curPosition[0] + posOneDigit) % 10;
        this.curPosition[1] = (this.curPosition[1] + posTwoDigit) % 10;
        this.curPosition[2] = (this.curPosition[2] + posThreeDigit) % 10;
        this.rIsSpinning = false;
        this.fIsSpinning = false;
        this.payout();
        console.log(posOneDigit, posTwoDigit, posThreeDigit, this.curPosition);
      }
    },
    payout: function () {
      this.newWin = 0;
      let payRow;
      for (let i in positions) {
        if (positions[i].pos === this.curPosition.join('')) {
          for (let j of positions[i].det) {
            this.newWin += j.prize;
            for (let comb of this.payouts) {
              if (comb.combination === j.text) {
                console.log();
                payRow = document.querySelectorAll('.payouts table tbody tr')[this.payouts.indexOf(comb)];
                payRow.style.color = "#fff";
                payRow.style.backgroundColor = "#f44336";
                if (j.line === "top") {
                  this.lineTop = true;
                } else if (j.line === "center") {
                  this.lineCenter = true;
                } else {
                  this.lineBottom = true;
                }
              }
            }
          }
          this.playerWins += this.newWin;
          this.curBalance += this.newWin;
        }
      }
    }
  }
});

});
