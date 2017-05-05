$(() => {
    $('.top').vegas({
        slides: [
            { src: 'assets/images/slides/01.jpg' },
            { src: 'assets/images/slides/02.jpg' },
            { src: 'assets/images/slides/03.jpg' },
            { src: 'assets/images/slides/04.jpg' },
            { src: 'assets/images/slides/05.jpg' },
            { src: 'assets/images/slides/06.jpg' },
            { src: 'assets/images/slides/07.jpg' },
        ],
        shuffle: true,
        transition: 'blur',
        animation: 'kenburnsRight',
        overlay: 'assets/images/overlays/08.png',
        timer: false,
    });
    $('.bottom').vegas({
        slides: [
            { src: 'assets/images/slides/01.jpg' },
            { src: 'assets/images/slides/02.jpg' },
            { src: 'assets/images/slides/03.jpg' },
            { src: 'assets/images/slides/04.jpg' },
            { src: 'assets/images/slides/05.jpg' },
            { src: 'assets/images/slides/06.jpg' },
            { src: 'assets/images/slides/07.jpg' },
        ],
        shuffle: true,
        transition: 'blur',
        animation: 'kenburnsLeft',
        overlay: 'assets/images/overlays/08.png',
    });
});
