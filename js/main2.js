
const effects = [
    // Effect 1
    {
        options: {
            shapeColors: ['#6435ea','#295ddc','#9fd7ff','#d65380','#0228f7','#242627']
        },
        hide: {
            lettersAnimationOpts: {
                duration: 800,
                delay: (t,i) => i*40,
                easing: 'easeOutExpo',
                opacity: {
                    value: 0, 
                    duration: 100,
                    delay: (t,i) => i*40,
                    easing: 'linear'
                },
                translateY: ['0%', '100%']
            }
        },
        show: {
            lettersAnimationOpts: {
                duration: 800,
                delay: (t,i) => i*40,
                easing: 'easeOutElastic',
                opacity: [0,1],
                translateY: ['100%', '0%']
            },
            shapesAnimationOpts: {
                duration: 300,
                delay: (t,i) => i*30+100,
                easing: 'easeOutQuad',
                translateY: () => [anime.random(-15,15),anime.random(-200,200)],
                scale: () => [0.2,randomBetween(0.5,1)],
                opacity: [
                    {
                        value: 1, 
                        duration:1, 
                        delay: (t,i) => i*30+100
                    }, 
                    {
                        value: 0,
                        duration: 200, 
                        delay:200,
                        easing: 'linear'}
                ]
            }
        }
    },
    // Effect 2
    {
        options: {
            shapeColors: ['#0671e6'],
            shapeTypes: ['circle'],
            shapeFill: false,
            shapeStrokeWidth: 3
        },
        hide: {
            lettersAnimationOpts: {
                duration: 300,
                delay: (t,i,total) => i*25,
                easing: 'easeOutQuad',
                opacity: {
                    value: 0, 
                    duration: 100, 
                    delay: (t,i,total) => i*25,
                    easing: 'linear'
                },
                translateY: ['0%','-50%']
            },
            shapesAnimationOpts: {
                duration: 300,
                delay: (t,i) => i*20,
                easing: 'easeOutExpo',
                translateX: t => anime.random(-10,10),
                translateY: t => -1*anime.random(400,800),
                scale: [0.3,0.3],
                opacity: [
                    {
                        value: 1, 
                        duration:1, 
                        delay: (t,i) => i*20
                    }, 
                    {
                        value: 0,
                        duration: 300, 
                        easing: 'linear'
                    }
                ]
            }
        },
        show: {
            lettersAnimationOpts: {
                duration: 800,
                delay: (t,i,total) => Math.abs(total/2-i)*60,
                easing: 'easeOutElastic',
                opacity: [0,1],
                translateY: ['50%', '0%']
            },
            shapesAnimationOpts: {
                duration: 700,
                delay: (t,i) => i*60,
                easing: 'easeOutExpo',
                translateX: () => {
                    const rand = anime.random(-100,100);
                    return [rand,rand];
                },
                translateY: () => {
                    const rand = anime.random(-100,100);
                    return [rand,rand];
                },
                scale: () => [randomBetween(0.1,0.3),randomBetween(0.5,0.8)],
                opacity: [{value: 1, duration:1, delay: (t,i) => i*80}, {value:0,duration: 700, easing: 'easeOutQuad',delay: 100}]
            }
        }
    },
    // Effect 3
    {
        options: {
            shapeColors: ['#111']
        },
        hide: {
            shapesAnimationOpts: {
                duration: 200,
                delay: (t,i) => i*20,
                easing: 'easeOutExpo',
                translateX: t => t.dataset.tx,
                translateY: t => t.dataset.ty - anime.random(400,800),
                scale: t => t.dataset.s,
                rotate: 0,
                opacity: {
                    value: 0, 
                    duration: 200, 
                    easing: 'linear'
                }
            }
        },
        show: {
            lettersAnimationOpts: {
                duration: 500,
                delay: (t,i) => i*60,
                easing: 'easeOutExpo',
                opacity: {
                    value: [0,1], 
                    duration: 50,
                    delay: (t,i) => i*60,
                    easing: 'linear'
                },
                translateY: (t,i) => i%2 ? [anime.random(-350,-300),0] : [anime.random(300,350),0]
            },
            shapesAnimationOpts: {
                duration: () => anime.random(1000,4000),
                delay: (t,i) => i*20,
                easing: [0.2,1,0.3,1],
                translateX: t => {
                    const tx = anime.random(-200,200);
                    t.dataset.tx = tx;
                    return [0,tx];
                },
                translateY: t => {
                    const ty = anime.random(-300,300);
                    t.dataset.ty = ty;
                    return [0,ty];
                },
                scale: t => {
                    const s = randomBetween(0.2,0.6);
                    t.dataset.s = s;
                    return [s,s];
                },  
                rotate: () => anime.random(-90,90),
                opacity: {
                    value: 0.6, 
                    duration: 1000, 
                    easing: 'linear'
                }
            }
        }
    },
    // Effect 4
    {
        options: {
            // shape elements will be on top of the letters
            shapesOnTop: true,
            shapeColors: ['#ec4747','#5447ec','#ecb447','#a847ec','#635f65'],
            totalShapes: 20
        },
        hide: {
            lettersAnimationOpts: {
                duration: 200,
                delay: (t,i,total) => (total-i-1)*20,
                easing: 'easeOutExpo',
                opacity: {
                    value: [1,0], 
                    duration: 100, 
                    delay: (t,i,total) => (total-i-1)*20,
                    easing: 'linear'
                },
                scale: [1,0]
            }
        },
        show: {
            lettersAnimationOpts: {
                duration: 400,
                delay: (t,i) => i*60,
                easing: 'easeInOutExpo',
                opacity: [0,1],
                translateY: ['-100%', '0%']
            },
            shapesAnimationOpts: {
                duration: 400,
                delay: (t,i) => i*20,
                easing: 'easeOutBack',
                translateX: {
                    value: () => [anime.random(-100,100),anime.random(-10,10)],
                    easing: 'easeOutExpo',
                },
                translateY: () => [anime.random(-100,0),anime.random(-400,-50)],
                scale: () => {
                    const rand = randomBetween(0.2,0.5);
                    return [rand,rand];
                },
                rotate: () => anime.random(-15,15),
                opacity: [
                    {
                        value: 1, 
                        duration:1, 
                        delay: (t,i) => i*20
                    }, 
                    {
                        value:0,
                        duration: 500, 
                        easing: 'linear'
                    }
                ]
            }
        }
    },
    // Effect 5
    {
        options: {
            shapesOnTop: true,
            shapeColors: ['#ec4747','#5447ec','#ecb447','#a847ec','#635f65'],
            shapeFill: false,
            shapeStrokeWidth: 4,
            totalShapes: 30
        },
        show: {
            lettersAnimationOpts: {
                duration: 300,
                delay: (t,i) => i*100,
                easing: 'easeInExpo',
                opacity: [0,1],
                translateY: ['-50%', '0%']
            },
            shapesAnimationOpts: {
                duration: 400,
                delay: (t,i) => i*5+300,
                easing: [0.2,1,0.3,1],
                translateX: () => [0, anime.random(-100,100)],
                translateY: () => [50,anime.random(-100,150)],
                scale: () => [randomBetween(0.2,0.4),randomBetween(0.2,0.4)],
                rotate: () => anime.random(-25,25),
                opacity: [
                    {value: 1, duration: 1, easing: 'easeOutQuad', delay: (t,i) => i*5+300}, 
                    {value: 0, duration: 250, easing: 'easeOutQuad', delay: 200}
                ]
            }
        }
    },
    // Effect 6
    {
        options: {
            shapeColors: ['#fff','#dedede','#8c8c8c','#545454','#000','#dc2e2e']
        },
        hide: {
            lettersAnimationOpts: {
                duration: 200,
                delay: (t,i,total) => (total-i-1)*20,
                easing: 'easeOutExpo',
                opacity: {
                    value: [1,0], 
                    duration: 100, 
                    delay: (t,i,total) => (total-i-1)*20,
                    easing: 'linear'
                },
                scale: [1,0]
            }
        },
        show: {
            lettersAnimationOpts: {
                duration: 400,
                delay: (t,i) => i*60,
                easing: 'easeInExpo',
                opacity: [0,1],
                scale: [0,1]
            },
            shapesAnimationOpts: {
                duration: 700,
                delay: (t,i) => i*40,
                easing: 'easeOutExpo',
                translateX: () => [0,anime.random(-20,20)],
                translateY: () => [0,anime.random(-400,400)],
                scale: () => [randomBetween(0.2,0.6),randomBetween(0.2,0.6)],  
                rotate: () => [0,anime.random(-16,16)],
                opacity: [
                    {value: 1, duration: 1, easing: 'linear'}, 
                    {value: 0, duration: 700, easing: 'easeOutQuad'}
                ]
            }
        }
    },
    // Effect 7
    {
        options: {
            shapeColors: ['red','#000','#fff'],
            shapeFill: false,
            shapeStrokeWidth: 10
        },
        hide: {
            shapesAnimationOpts: {
                duration: 250,
                delay: (t,i) => i*20,
                easing: 'easeOutExpo',
                translateX: () => [0,anime.random(-200,200)],
                translateY: () => [0,anime.random(-200,200)],
                scale: () => [randomBetween(0.2,0.6),randomBetween(0.2,0.6)],  
                rotate: () => [0,anime.random(-16,16)],
                opacity: [
                    {value: 1, duration: 1, easing: 'linear', delay: (t,i) => i*20}, 
                    {value: 0, duration: 150, delay: 100, easing: 'easeOutQuad'}
                ]
            }
        },
        show: {
            lettersAnimationOpts: {
                duration: 400,
                delay: (t,i) => i*60,
                easing: 'easeOutExpo',
                opacity: {
                    value: [0,1], 
                    duration: 100, 
                    easing: 'linear'
                },
                translateY: (t,i) => i%2 ? [anime.random(-350,-300),0] : [anime.random(300,350),0]
            },
            shapesAnimationOpts: {
                duration: 500,
                delay: (t,i) => i*30,
                easing: 'easeOutExpo',
                translateX: () => [0,anime.random(-200,200)],
                translateY: () => [0,anime.random(-200,200)],
                scale: () => [randomBetween(0.2,0.6),randomBetween(0.2,0.6)],  
                rotate: () => [0,anime.random(-16,16)],
                opacity: [
                    {value: 1, duration: 1, easing: 'linear'}, 
                    {value: 0, duration: 350, delay: 150, easing: 'easeOutQuad'}
                ]
            }
        }
    },
    // Effect 8
    {
        options: {
            shapeColors: ['#35c394','#9985ee','#f54665','#4718f5','#f5aa18'],
            shapesOnTop: true
        },
        hide: {
            lettersAnimationOpts: {
                duration: 300,
                delay: (t,i)  => (t.parentNode.children.length-i-1)*30,
                easing: 'easeOutExpo',
                opacity: 0,
                translateY: (t,i) => i%2 === 0 ? '80%' : '-80%',
                rotate: (t,i) => i%2 === 0 ? -25 : 25
            },
            shapesAnimationOpts: {
                duration: 50,
                easing: 'easeOutExpo',
                translateX: t => t.dataset.tx,
                translateY: t => t.dataset.ty,
                scale: 0,
                rotate: 0,
                opacity: {
                    value: 0, 
                    duration: 50, 
                    easing: 'linear'
                }
            }
        },
        show: {
            lettersAnimationOpts: {
                duration: 400,
                delay: (t,i)  => (t.parentNode.children.length-i-1)*80,
                easing: 'easeOutElastic',
                opacity: {
                    value: [0,1], 
                    duration: 100, 
                    easing: 'linear'
                },
                translateY: (t,i) => i%2 === 0 ? ['-80%', '0%'] : ['80%', '0%'],
                rotate: [90,0]
            },
            shapesAnimationOpts: {
                duration: () => anime.random(1000,3000),
                delay: (t,i) => i*20,
                easing: 'easeOutElastic',
                translateX: t => {
                    const tx = anime.random(-250,250);
                    t.dataset.tx = tx;
                    return [0,tx];
                },
                translateY: t => {
                    const ty = anime.random(-250,250);
                    t.dataset.ty = ty;
                    return [0,ty];
                },
                scale: t => {
                    const s = randomBetween(0.1,0.6);
                    t.dataset.s = s;
                    return [s,s];
                },  
                rotate: () => anime.random(-90,90),
                opacity: {
                    value: 0.6, 
                    duration: 1000, 
                    easing: 'linear'
                }
            }
        }
    },
    // Effect 9
    {
        options: {
            shapeColors: ['#FD74FF','#3771FC','#7C5CE4','#542A95','#ACC7FE'],
            shapeTypes: ['rect','polygon'],
            totalShapes: 1
        },
        hide: {
            lettersAnimationOpts: {
                duration: () => anime.random(800,1000),
                delay: () => anime.random(0,80),
                easing: 'easeInOutExpo',
                opacity: 0,
                translateY: '300%',
                rotateZ: () => anime.random(-50,50)
            },
            shapesAnimationOpts: {
                duration: 350,
                easing: 'easeOutExpo',
                translateX: t => [t.dataset.tx,anime.random(-25,25)],
                translateY: t => [t.dataset.ty,anime.random(-25,25)],
                scale: 1,
                rotate: 0,
                opacity: {
                    value: 0, 
                    duration: 200, 
                    easing: 'linear'
                }
            }
        },
        show: {
            lettersAnimationOpts: {
                duration: 800,
                delay: () => anime.random(0,75),
                easing: 'easeInOutExpo',
                opacity: [0,1],
                translateY: ['-300%','0%'],
                rotate: () => [anime.random(-50,50), 0]
            },
            shapesAnimationOpts: {
                duration: 2000,
                easing: 'easeOutExpo',
                translateY: t => {
                    const ty = anime.random(-300,300);
                    t.dataset.ty = ty;
                    return [anime.random(-25,25),ty];
                },
                scale: t => {
                    const s = randomBetween(1.5,2);
                    t.dataset.s = s;
                    return [s,s];
                },  
                rotate: () => anime.random(-45,45),
                opacity: {
                    value: [0,0.9], 
                    duration: 600,
                    delay: 300,
                    easing: 'linear'
                }
            }
        }
    }
];
let loading = () => {
    document.querySelector('body').style.overflow = 'hidden'
    let random = anime.random(0,effects.length - 1);
    let word = document.querySelector('.word');
    // add class to set font for word
    word.classList.add('word--' + (random + 1));

    // set bg color for word
    document.querySelector('.word__bg--color').classList.add('bg--' + (random + 1))
    
    console.log(random);
    let wordFx = new Word(word, effects[random].options)
    Pace.once('start', function() {
        
    })
    Pace.on('done', function() {
	    let $loading = document.querySelector('.js-loading')
        wordFx.show(effects[random].show).then(() => {
            setTimeout(() => {
            wordFx.hide(effects[random].hide).then(() => {
            anime({
                targets: '.js-loading',
                opacity: {
                    value: 0,
                    duration: 1000,
                    easing: 'easeInOutQuart'
                },
                begin: function(anim) {

                },
                complete: function(anim) {
                    // document.querySelector('body').style.overflow = 'unset'
                    $loading.style.display = 'none'
                },
            });
        });
        }, 2000)
        })
    })
}
let ready = () => {
    // ready start

    // global player
    let players_wrapper = document.querySelectorAll('.p_video-player');
    console.log('video player ready');
    [].forEach.call(players_wrapper, function(player_wrapper, index) {
        let _video = player_wrapper.querySelector('video');
        _video.setAttribute('id', 'player-number-' + index);

        let _video_type = _video.getAttribute('video-type');
        let _video_src = _video.getAttribute('video-src');
        console.log(_video_type, _video_src);

        let _player = videojs('player-number-' + index, {
            fluid: true,
            controls: true
        });
        _player.src({type: `video/${_video_type}`, 'src': _video_src})
        // _player.play();
    });

    // hamburger
    let $hamburger = document.querySelector('.hamburger')
    $hamburger.addEventListener('click', function(e) {
        e.preventDefault()
        this.classList.contains('is-active') ? hideMenu() : showMenu()
    })
    let showMenu = () => {
        $hamburger.classList.add('is-active')
        document.querySelector('.js-logo') && document.querySelector('.js-logo').classList.add('black')
        anime({
            targets: '.js-menu',
            opacity: {
                value: 1,
                duration: 800,
                easing: 'easeInOutQuart'
            },
            width: {
                value: '100%',
                duration: 1000,
                easing: 'easeInOutQuart'
            },
            complete: function() {
                document.querySelector('.js-menu').style.pointerEvents = 'auto'
                document.body.style.overflow = 'hidden'
            }
        })
    }
    let hideMenu = () => {
        $hamburger.classList.remove('is-active')
        document.querySelector('.js-logo') && document.querySelector('.js-logo').classList.remove('black')
        anime({
            targets: '.js-menu',
        opacity: {
                value: 0,
                duration: 800,
                easing: 'easeInOutQuart',
                delay: 200
            },
            width: {
                value: '0',
                duration: 1000,
                easing: 'easeInOutQuart'
            },
            complete: function() {
                document.querySelector('.js-menu').style.pointerEvents = 'none'
                document.body.style.overflow = 'unset'
            }
        })

    }
    // letter toggle
    document.querySelector('.js-toggle-info').addEventListener('click', function() {
        let news_letter = document.querySelector('.js-news-letter');
        news_letter.classList.contains('opened') ? news_letter.classList.remove('opened') : news_letter.classList.add('opened')
    })
    // contact form
    var checkbox_list = document.getElementsByClassName('checkbox-item'),
    	checkbox_number = checkbox_list.length;
	for( var i = 0; i < checkbox_number; i++ ) {
		checkbox_list[i].addEventListener('click', function() {
			this.classList.contains('active') ? this.classList.remove('active') : this.classList.add('active')
		})
	}
    let contact_form_button = document.getElementsByClassName('js-show-contact-form')
    
    for(let i = 0; i < contact_form_button.length; i++) {
        contact_form_button[i].addEventListener('click', function(e) {
            e.preventDefault();
            let contact_form = document.querySelector('.contact--form');
            anime({
                targets: '.contact__form--wrap',
                opacity: {
                    value: 1,
                    duration: 800,
                    easing: 'easeInOutQuart',
                    delay: 200
                },
                backgroundColor: {
                    value: '#fff',
                    durration: 800,
                    easing: 'easeInOutQuart'
                },
                height: {
                    value: '100vh',
                    duration: 1000,
                    easing: 'easeInOutQuart'
                }
            })
            anime({
                targets: '.btn--back._contact',
                opacity: {
                    value: 1,
                    duration: 300,
                    easing: 'easeInOutQuart',
                },
                scale: {
                    value: 1,
                    duration: 300,
                    easing: 'easeInOutQuart'
                },
                delay: 1000
            })
        })
    }

    document.querySelector('.btn--back._contact').addEventListener('click', function(e) {
    	e.preventDefault()
    	anime({
            targets: '.contact__form--wrap',
            opacity: {
                value: 0,
                duration: 800,
                easing: 'easeInOutQuart',
                delay: 200
            },
            backgroundColor: {
            	value: '#272727',
            	duration: 800,
            	easing: 'easeInOutQuart'
            },
            height: {
                value: '0vh',
                duration: 1000,
                easing: 'easeInOutQuart'
            },
            delay: 1000
        })
        anime({
            targets: '.btn--back._contact',
            opacity: {
                value: 0,
                duration: 300,
                easing: 'easeInOutQuart',
            },
            scale: {
                value: .5,
                duration: 300,
                easing: 'easeInOutQuart'
            }
        })
    })
    // ready end
}

// check for document ready
if (document.readyState == 'loading') {
    loading()
}
if (document.readyState === 'complete' || document.readyState !== 'loading') {
    ready();
} else {
    document.addEventListener('DOMContentLoaded', ready);
}