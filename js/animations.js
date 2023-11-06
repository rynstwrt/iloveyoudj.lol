anime.timeline({
    targets: 'path',
    easing: 'easeInOutSine',
    loop: true
}).add({
    strokeDashoffset: [anime.setDashoffset, 0],
    delay: 650,
    strokeWidth: 8
}).add({
    strokeDashoffset: [0, anime.setDashoffset],
    strokeWidth: 0
}, 5000);