const NAVBAR = document.getElementById('navbar');
const MENU = document.getElementById('options');
const CONTAINERCOL = document.getElementById('column-container');
const HEADER = document.getElementById('header');
// Función principal - Recibe el Ancho de Pantalla y toma acciones según si es superior o inferior a los límites marcados
function handleReSize() {
    // Toma el Ancho de pantalla
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        // Las opciones a la izquierda del texto desaparecen
        MENU.style.display = 'none';
        // El título principal y carrusel de texto desaparece
        HEADER.innerHTML = '';
        // El texto en columnas pasa de mostrarse de 3 columnas a 2
        CONTAINERCOL.classList.remove('row-cols-4');
        CONTAINERCOL.classList.add('row-cols-3');
        // Cambia el ordenamiento de elementos del navegador - El buscador se posiciona arriba de los demás elementos
        NAVBAR.innerHTML = `<div class="container-fluid">
        <a class="navbar-brand" href="#">Axel Palombo</a>        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form id="search-div" class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Dolor</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sit</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Amet</a>
                </li>
                <li id="dropdown-relative" class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Options
                    </a>
                    <ul id="optionsInMenu" class="dropdown-menu">
                        <div class="row">
                            <div class="col-4">
                                <div id="list-example" class="list-group">
                                    <a class="list-group-item btn-menu" href="#list-item-1">Option 1</a>
                                    <a class="list-group-item btn-menu" href="#list-item-2">Option 2</a>
                                    <a class="list-group-item btn-menu" href="#list-item-3">Option 3</a>
                                    <a class="list-group-item btn-menu" href="#list-item-4">Option 4</a>
                                </div>
                            </div>
                        </div>
                    </ul>
                </li>
            </ul>
        </div>
    </div>`
    } else {
        // En caso de volver al ancho LG, se vuelve al HTML original
        MENU.style.display = 'block';
        HEADER.innerHTML = `
        <p class="h3">Responsive Web Design</p>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                </div>
                <div class="carousel-item">
                    <p>Provident optio amet vero ad necessitatibus ab alias quasi quod, </p>
                </div>
                <div class="carousel-item">
                    <p>placeat assumenda repellat qui deserunt quos! Sunt deserunt nostrum eaque at saepe?</p>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>`
        NAVBAR.innerHTML = `<div class="container-fluid">
        <a class="navbar-brand" href="#">Axel Palombo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Dolor</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sit</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Amet</a>
                </li>
                <li id="dropdown-relative" class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Options
                    </a>
                    <ul id="optionsInMenu" class="dropdown-menu">
                        <div class="row">
                            <div class="col-4">
                                <div id="list-example" class="list-group">
                                    <a class="list-group-item btn-menu" href="#list-item-1">Option 1</a>
                                    <a class="list-group-item btn-menu" href="#list-item-2">Option 2</a>
                                    <a class="list-group-item btn-menu" href="#list-item-3">Option 3</a>
                                    <a class="list-group-item btn-menu" href="#list-item-4">Option 4</a>
                                </div>
                            </div>
                        </div>
                    </ul>
                </li>
            </ul>
            <form id="search-div" class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>`
    }
}

// Agrega un evento de escucha para el cambio de tamaño de la ventana
window.addEventListener('resize', handleReSize);

// Llama a la función handleResize una vez al cargar la página para obtener el valor inicial
handleReSize();