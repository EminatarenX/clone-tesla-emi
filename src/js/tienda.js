const playeras = [
    {
        id: 1,
        nombre: "Men's Plaid Quarter Mile Tee",
        precio: '$800',
        img1: '',
        img2: '',
    },
    {
        id: 2,
        nombre: "Playera Cybertruck Owl para Hombre",
        precio: '$800',
        img1: '',
        img2: '',
    },
    {
        id: 3,
        nombre: "Playera Para Hombre Let the Sun Shine",
        precio: '$800',
        img1: '',
        img2: '',
    },
    {
        id: 4,
        nombre: "Playera con Logo 3D T para Hombre",
        precio: '$700',
        img1: '',
        img2: '',
    },
    {
        id: 5,
        nombre: "Playera 3D Small Wordmark Para Hombre",
        precio: '$700',
        img1: '',
        img2: '',
    },
    {
        id: 6,
        nombre: "Playera Powerwall Para Hombre",
        precio: '$500',
        img1: '',
        img2: '',
    },
    {
        id: 7,
        nombre: "Playera Plaid Mode para Hombre",
        precio: '$500',
        img1: '',
        img2: '',
    },
    {
        id: 8,
        nombre: `Playera Cybertruck "A Prueba de Balas"`,
        precio: '$500',
        img1: '',
        img2: '',
    },
]

const sudaderas = [
    {
        id: 1,
        nombre: "Sudadera con Capucha y Cremallera Completa Chill para Hombre",
        precio: '$1,900',
        img1: '',
        img2: '',
    },
    {
        id: 2,
        nombre: "Sudadera con Cierre Chill Quarter para Hombre",
        precio: '$1,500',
        img1: '',
        img2: '',
    },
    {
        id: 3,
        nombre: "Sudadera Unisex con Capucha 3D Large Wordmark",
        precio: '$1,700',
        img1: '',
        img2: '',
    },
    {
        id: 4,
        nombre: "Chamarra Corp para Hombre",
        precio: '$2,000',
        img1: '',
        img2: '',
    },

]
document.addEventListener('DOMContentLoaded', () => {
    const contenedorPlayeras = document.getElementById('playeras');
    const contenedorSudaderas = document.getElementById('sudaderas')
    const path = window.location.pathname;
    
    if(path === '/tienda.html') {
        const header = document.querySelector('.header');
        header.style.background = 'white';
    }

    contenedorPlayeras.innerHTML = `${playeras.map(playera => {
      return `
      <article class="contSudaderas" id="${`playera-${playera.id}`}">
        <div class="contImagenPlayera">
            <img class="imagen-playera" src="src/img/playera-${playera.id}.jpg" alt="playera-${playera.id}">
            <button class="botonProducto">
                Adicion Rapida +
            </button>
        </div>
        <p>${playera.nombre}</p>
        <p>${playera.precio}</p>
      </article>
      `;
    }).join('')}`;

    contenedorSudaderas.innerHTML = `${sudaderas.map(sudadera => {
        return `
        <article id="${`sudadera-${sudadera.id}`}">
          <div>
            <img class="imagen-playera" src="src/img/sudadera-${sudadera.id}.jpg" alt="sudadera-${sudadera.id}">

          </div>
          <p>${sudadera.nombre}</p>
          <p>${sudadera.precio}</p>
        </article>
        `;
      }).join('')}`;


      const articuloSudaderas = document.querySelectorAll('.contSudaderas');

      articuloSudaderas.forEach( (articulo, i) => {
        articulo.addEventListener('mouseenter', () => {
            const imagenArticulo = articulo.querySelector('.imagen-playera');
            const botonProducto = articulo.querySelector('.botonProducto');

            botonProducto.style.display = 'block';

            
            imagenArticulo.setAttribute('src', `src/img/playera-${i+1}.1.jpg`)

           
            imagenArticulo.style.boxShadow = '0px 5px 5px 0px rgba(0,0,0,0.2)'
        })

        articulo.addEventListener('mouseleave', () => {
            const imagenArticulo = articulo.querySelector('.imagen-playera');
            const botonProducto = articulo.querySelector('.botonProducto');

            botonProducto.style.display = 'none';
            imagenArticulo.setAttribute('src', `src/img/playera-${i+1}.jpg`)
            imagenArticulo.style.boxShadow = '0px 0px 0px 0px '



        })
      })
      
    
  });

