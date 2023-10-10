document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel', {
        perPage: 2,
        breakpoints: {
            700: {
				width: '100vw',
			},
			1000: {
				perPage: 1,
			},
		},
        perMove: 1,
        gap    : '1rem',
        padding: '3.5rem',
        type: 'loop',
        width: '70vw',
        drag: 'free',
        snap: true,
        autoplay: true,
    } ).mount();
  } );