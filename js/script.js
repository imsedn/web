"use strict";
//BURGER MENU
$(document).ready(function () {
    "use strict";

    $("#mob").click(function () {
        $(this).toggleClass("active");
        $(".header__link").toggleClass('active');
    });

});
//BURGER MENU

//WATER RIPPLE
    $(document).ready(function() {
        try {
            $('body').ripples({
                resolution: 512,
                dropRadius: 20, //px
                perturbance: 0.04,
            });
            $('main').ripples({
                resolution: 128,
                dropRadius: 10, //px
                perturbance: 0.04,
                interactive: true
            });
            $('li').css({
                '-webkit-transform' : 'translateY(0px)',
                '-moz-transform'    : 'translateY(0px)',
                '-o-transform'      : 'translateY(0px)',
                '-ms-transform'     : 'translateY(px)',
                'transform'         : 'translateY(0px)'
            });
            $('.header-logo').css({
                '-webkit-transform' : 'translateX(0px)',
                '-moz-transform'    : 'translateX(0px)',
                '-o-transform'      : 'translateX(0px)',
                '-ms-transform'     : 'translateX(px)',
                'transform'         : 'translateX(0px)'
            });
        }
        catch (e) {
            $('.error').show().text(e);
        }
    
        $('.js-ripples-disable').on('click', function() {
            $('body, main').ripples('destroy');
            $(this).hide();
        });
    
        $('.js-ripples-play').on('click', function() {
            $('body, main').ripples('play');
        });
    
        $('.js-ripples-pause').on('click', function() {
            $('body, main').ripples('pause');
        });
    
        // Automatic drops
        setInterval(function() {
            var $el = $('main');
            var x = Math.random() * $el.outerWidth();
            var y = Math.random() * $el.outerHeight();
            var dropRadius = 20;
            var strength = 0.04 + Math.random() * 0.04;
    
            $el.ripples('drop', x, y, dropRadius, strength);
        }, 400);
    });
    //WATER RIPPLE


    ///MATRIX TEXT
    class TextScramble {
        constructor(el) {
          this.el = el;
          this.chars = '!<>-_\\/[]{}—=+*^?#________';
          this.update = this.update.bind(this);
        }
      
        setText(newText) {
          const oldText = this.el.innerText;
          const length = Math.max(oldText.length, newText.length);
          const promise = new Promise(resolve => this.resolve = resolve);
          this.queue = [];
      
          for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({
              from,
              to,
              start,
              end
            });
          }
      
          cancelAnimationFrame(this.frameRequest);
          this.frame = 0;
          this.update();
          return promise;
        }
      
        update() {
          let output = '';
          let complete = 0;
      
          for (let i = 0, n = this.queue.length; i < n; i++) {
            let {
              from,
              to,
              start,
              end,
              char
            } = this.queue[i];
      
            if (this.frame >= end) {
              complete++;
              output += to;
            } else if (this.frame >= start) {
              if (!char || Math.random() < 0.28) {
                char = this.randomChar();
                this.queue[i].char = char;
              }
      
              output += `<span class="dud">${char}</span>`;
            } else {
              output += from;
            }
          }
      
          this.el.innerHTML = output;
      
          if (complete === this.queue.length) {
            this.resolve();
          } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
          }
        }
      
        randomChar() {
          return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
      
      } // ——————————————————————————————————————————————————
      // Example
      // ——————————————————————————————————————————————————
      
      
      const phrases = ['Веб студия Doblo', 'Landing page', 'Сайт визитка', 'Интернет магазин', 'Корпоративный сайт', 'Уникальный дизайн'];
      const el = document.querySelector('.text');
      const fx = new TextScramble(el);
      let counter = 0;
      
      const next = () => {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 800);
        });
        counter = (counter + 1) % phrases.length;
      };
      
      next();

      ///MATRIX TEXT
