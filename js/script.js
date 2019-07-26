(function(Vue) {
  new Vue({
    el: '#app',
    data: {
      cards: [
        {
          suit: 'spade',
          num: 1,
          src: 'images/spade/card-spade-1.svg'
        },
        {
          suit: 'spade',
          num: 2,
          src: 'images/spade/card-spade-2.svg'
        },
        {
          suit: 'spade',
          num: 3,
          src: 'images/spade/card-spade-3.svg'
        },
        {
          suit: 'spade',
          num: 4,
          src: 'images/spade/card-spade-4.svg'
        },
        {
          suit: 'spade',
          num: 5,
          src: 'images/spade/card-spade-5.svg'
        },
        {
          suit: 'spade',
          num: 6,
          src: 'images/spade/card-spade-6.svg'
        },
        {
          suit: 'spade',
          num: 7,
          src: 'images/spade/card-spade-7.svg'
        },
        {
          suit: 'spade',
          num: 8,
          src: 'images/spade/card-spade-8.svg'
        },
        {
          suit: 'spade',
          num: 9,
          src: 'images/spade/card-spade-9.svg'
        },
        {
          suit: 'spade',
          num: 10,
          src: 'images/spade/card-spade-10.svg'
        },
        {
          suit: 'spade',
          num: 11,
          src: 'images/spade/card-spade-11.svg'
        },
        {
          suit: 'spade',
          num: 12,
          src: 'images/spade/card-spade-12.svg'
        },
        {
          suit: 'spade',
          num: 13,
          src: 'images/spade/card-spade-13.svg'
        },
        {
          suit: 'heart',
          num: 1,
          src: 'images/heart/card-heart-1.svg'
        },
        {
          suit: 'heart',
          num: 2,
          src: 'images/heart/card-heart-2.svg'
        },
        {
          suit: 'heart',
          num: 3,
          src: 'images/heart/card-heart-3.svg'
        },
        {
          suit: 'heart',
          num: 4,
          src: 'images/heart/card-heart-4.svg'
        },
        {
          suit: 'heart',
          num: 5,
          src: 'images/heart/card-heart-5.svg'
        },
        {
          suit: 'heart',
          num: 6,
          src: 'images/heart/card-heart-6.svg'
        },
        {
          suit: 'heart',
          num: 7,
          src: 'images/heart/card-heart-7.svg'
        },
        {
          suit: 'heart',
          num: 8,
          src: 'images/heart/card-heart-8.svg'
        },
        {
          suit: 'heart',
          num: 9,
          src: 'images/heart/card-heart-9.svg'
        },
        {
          suit: 'heart',
          num: 10,
          src: 'images/heart/card-heart-10.svg'
        },
        {
          suit: 'heart',
          num: 11,
          src: 'images/heart/card-heart-11.svg'
        },
        {
          suit: 'heart',
          num: 12,
          src: 'images/heart/card-heart-12.svg'
        },
        {
          suit: 'heart',
          num: 13,
          src: 'images/heart/card-heart-13.svg'
        },
        {
          suit: 'diamond',
          num: 1,
          src: 'images/diamond/card-diamond-1.svg'
        },
        {
          suit: 'diamond',
          num: 2,
          src: 'images/diamond/card-diamond-2.svg'
        },
        {
          suit: 'diamond',
          num: 3,
          src: 'images/diamond/card-diamond-3.svg'
        },
        {
          suit: 'diamond',
          num: 4,
          src: 'images/diamond/card-diamond-4.svg'
        },
        {
          suit: 'diamond',
          num: 5,
          src: 'images/diamond/card-diamond-5.svg'
        },
        {
          suit: 'diamond',
          num: 6,
          src: 'images/diamond/card-diamond-6.svg'
        },
        {
          suit: 'diamond',
          num: 7,
          src: 'images/diamond/card-diamond-7.svg'
        },
        {
          suit: 'diamond',
          num: 8,
          src: 'images/diamond/card-diamond-8.svg'
        },
        {
          suit: 'diamond',
          num: 9,
          src: 'images/diamond/card-diamond-9.svg'
        },
        {
          suit: 'diamond',
          num: 10,
          src: 'images/diamond/card-diamond-10.svg'
        },
        {
          suit: 'diamond',
          num: 11,
          src: 'images/diamond/card-diamond-11.svg'
        },
        {
          suit: 'diamond',
          num: 12,
          src: 'images/diamond/card-diamond-12.svg'
        },
        {
          suit: 'diamond',
          num: 13,
          src: 'images/diamond/card-diamond-13.svg'
        },
        {
          suit: 'club',
          num: 1,
          src: 'images/club/card-club-1.svg'
        },
        {
          suit: 'club',
          num: 2,
          src: 'images/club/card-club-2.svg'
        },
        {
          suit: 'club',
          num: 3,
          src: 'images/club/card-club-3.svg'
        },
        {
          suit: 'club',
          num: 4,
          src: 'images/club/card-club-4.svg'
        },
        {
          suit: 'club',
          num: 5,
          src: 'images/club/card-club-5.svg'
        },
        {
          suit: 'club',
          num: 6,
          src: 'images/club/card-club-6.svg'
        },
        {
          suit: 'club',
          num: 7,
          src: 'images/club/card-club-7.svg'
        },
        {
          suit: 'club',
          num: 8,
          src: 'images/club/card-club-8.svg'
        },
        {
          suit: 'club',
          num: 9,
          src: 'images/club/card-club-9.svg'
        },
        {
          suit: 'club',
          num: 10,
          src: 'images/club/card-club-10.svg'
        },
        {
          suit: 'club',
          num: 11,
          src: 'images/club/card-club-11.svg'
        },
        {
          suit: 'club',
          num: 12,
          src: 'images/club/card-club-12.svg'
        },
        {
          suit: 'club',
          num: 13,
          src: 'images/club/card-club-13.svg'
        }
      ],
      suitClass: ['spade', 'heart', 'club', 'diamond'],
      timer: null,
      second: 0,
      minute: 0,
      isPause: false,
      theInit: true,
      finishArea: [[], [], [], []],
      tempArea: [[], [], [], []],
      // cardArea: [[], [], [], [], [], [], [], []],
      cardArea: Array.from({ length: 8 }, () => []),
      target: null
    },
    mounted() {
      this.setTimer();
      this.shuffle(this.cards);
      this.dealCards();
    },
    methods: {
      suitName(index) {
        return this.suitClass[index];
      },
      shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      },
      dealCards() {
        for (let i = 0; i < this.cards.length; i++) {
          switch (i % 8) {
            case 0:
              this.cardArea[0].push(this.cards[i]);
              break;
            case 1:
              this.cardArea[1].push(this.cards[i]);
              break;
            case 2:
              this.cardArea[2].push(this.cards[i]);
              break;
            case 3:
              this.cardArea[3].push(this.cards[i]);
              break;
            case 4:
              this.cardArea[4].push(this.cards[i]);
              break;
            case 5:
              this.cardArea[5].push(this.cards[i]);
              break;
            case 6:
              this.cardArea[6].push(this.cards[i]);
              break;
            case 7:
              this.cardArea[7].push(this.cards[i]);
              break;
          }
        }
      },
      dragStart(e) {
        dom = e.currentTarget;
        e.currentTarget.classList.add('drag-start');
        // console.log('dom', dom);
      },
      dragEnd(e) {
        e.currentTarget.classList.remove('drag-start');
      },
      dropStorage(e) {
        e.preventDefault();
        dom.classList.remove('drag-start');
        e.target.classList.remove('drag-start');
        e.target.appendChild(dom);
        console.log('e.target', e.target);
      },
      dropPlay(e) {
        e.preventDefault();
        dom.classList.remove('drag-start');
        e.currentTarget.appendChild(dom);
        console.log(dom);
      },
      allowDrop(e) {
        e.preventDefault();
      },
      setTimer() {
        this.isPause = false;
        this.timer = setInterval(() => {
          if (this.second < 60) {
            this.second += 1;
          } else {
            this.second = 0;
            this.minute += 1;
          }
        }, 1000);
      },
      pause() {
        let pause = document.querySelector('.btn-pause');
        if (this.isPause === true) {
          this.isPause = false;
          pause.classList.remove('active');
          this.setTimer();
        } else {
          clearInterval(this.timer);
          this.isPause = true;
          pause.classList.add('active');
        }
      },
      restart() {
        this.$confirm('是否重新開始?', {
          confirmButtonText: '確定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            let cards = document.querySelectorAll('.card');
            cards.forEach(function(cardItem) {
              cardItem.remove();
            });
            this.second = 0;
            this.minute = 0;
            this.isPause = false;
            let pause = document.querySelector('.btn-pause');
            pause.classList.remove('active');
            clearInterval(this.timer);
            this.setTimer();
            this.shuffle(this.cards);
            this.dealCards();
          })
          .catch(() => {
            console.log('已取消');
          });
      }
    },
    computed: {
      displayTimer() {
        let second = this.second < 10 ? '0' + this.second : this.second;
        let minute = this.minute < 10 ? '0' + this.minute : this.minute;
        return minute + ':' + second;
      }
    }
  });
})(Vue);
