const changeColor = document.querySelectorAll('.change-color')
const paths = document.querySelectorAll('.change-color path')

const hoverContent = `
<div class="contItems">
    <div class="item">
    <img src="src/img/accesorios-v.jpeg" alt="img">
    <p>Accesorios para vehiculo</p>
    </div>
    <div class="item">
    <img src="src/img/carga.jpeg" alt="img">
    <p>Carga</p>
    </div>
    <div class="item" onclick="goTiendita()">
    <img src="src/img/ropa.png" alt="img">
    <p>Ropa</p>
    </div>
    <div class="item">
    <img src="src/img/estilo.jpeg" alt="img">
    <p>Estilo de vida</p>
    </div>

</div>

      

`

const hoverContainer = document.createElement('div')
hoverContainer.innerHTML = hoverContent
hoverContainer.classList.add('tienda')

document.addEventListener('scroll', function () {
    if (window.scrollY < 500) {
        changeColor.forEach(element => {
            element.style.color = 'white'

        })
        paths.forEach(element => {
            element.style.fill = 'white'
        })
    }
    else if (window.scrollY > 600 && window.scrollY < 2500) {
        changeColor.forEach(element => {
            element.style.color = 'black'
        })
        paths.forEach(element => {
            element.style.fill = 'black'
        })

    }
    else if (window.scrollY < 3200 && window.scrollY > 2500) {
        changeColor.forEach(element => {
            element.style.color = 'white'
        })
        paths.forEach(element => {
            element.style.fill = 'white'
        })
    } else {
        changeColor.forEach(element => {
            element.style.color = 'black'
        })
        paths.forEach(element => {
            element.style.fill = 'black'
        })
    }

})

const header = document.querySelector('.header')
const headerHover = document.querySelector('.contHeader')
const tienditaHover = document.getElementById('tiendita')


headerHover.addEventListener('mouseenter', () => {
    header.style.backgroundColor = 'white'
    tienditaHover.addEventListener('mouseenter', () => {
        headerHover.appendChild(hoverContainer)

    })
    




    changeColor.forEach(element => {
        element.style.color = 'black'

    })
    paths.forEach(element => {
        element.style.fill = 'black'
    })

})


headerHover.addEventListener('mouseleave', () => {
    header.style.backgroundColor = 'transparent'
    const existeTienda = document.querySelector('.contHeader .tienda')

    if (existeTienda) {
        existeTienda.remove()
    }

   
    if (window.scrollY < 500) {
        changeColor.forEach(element => {
            element.style.color = 'white'

        })
        paths.forEach(element => {
            element.style.fill = 'white'
        })
    }
    else if (window.scrollY > 600 && window.scrollY < 2500) {
        changeColor.forEach(element => {
            element.style.color = 'black'
        })
        paths.forEach(element => {
            element.style.fill = 'black'
        })

    }
    else if (window.scrollY < 3200 && window.scrollY > 2500) {
        changeColor.forEach(element => {
            element.style.color = 'white'
        })
        paths.forEach(element => {
            element.style.fill = 'white'
        })
    } else {
        changeColor.forEach(element => {
            element.style.color = 'black'
        })
        paths.forEach(element => {
            element.style.fill = 'black'
        })
    }
})

