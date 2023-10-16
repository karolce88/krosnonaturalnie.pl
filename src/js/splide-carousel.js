document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel', {

        breakpoints: {
            500: {
                perPage: 1,
            },
			900: {
				perPage: 2,
			},
			1100: {
				perPage: 3,
			},
			1275: {
				perPage: 3,
			},
			1500: {
				perPage: 4,
                width: '100vw',
			},
			1660: {
                width: '99vw',
			},

		},
        perMove: 1,
        gap    : '1rem',
        padding: '3rem',
        type: 'loop',
        width: '93vw',
        drag: 'free',
        snap: true,
        autoplay: true,
        interval: 2600,
        perPage: 5,
    } ).mount();
  } );