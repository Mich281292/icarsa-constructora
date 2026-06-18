// Obtener ID del servicio de los parámetros de URL
function getServiceIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Cargar datos del servicio
function loadServiceDetails() {
    const serviceId = getServiceIdFromUrl();
    const service = getServiceById(serviceId);

    if (!service) {
        document.body.innerHTML = '<div class="container" style="padding: 5rem 0; text-align: center;"><h1>Servicio no encontrado</h1><p><a href="index.html">Volver a inicio</a></p></div>';
        return;
    }

    // Actualizar título y descripción
    document.title = `ICARSA Constructora - ${service.title}`;
    document.getElementById('service-breadcrumb').textContent = service.title;
    document.getElementById('service-title').textContent = service.title;
    document.getElementById('service-description').textContent = service.shortDescription;
    document.getElementById('service-full-description').textContent = service.fullDescription;

    // Actualizar icono
    const iconElement = document.getElementById('service-icon-large');
    iconElement.innerHTML = `<i class="fas ${service.icon}"></i>`;

    // Cargar características del servicio
    loadServiceFeatures(service.features);

    // Cargar carrusel de imágenes
    initCarousel(service.galleryImages);

    // Cargar servicios relacionados
    loadRelatedServices(serviceId);
}

// Cargar características del servicio
function loadServiceFeatures(features) {
    const featuresList = document.getElementById('service-features');
    featuresList.innerHTML = '';

    features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle"></i> ${feature}`;
        featuresList.appendChild(li);
    });
}

// Inicializar carrusel
function initCarousel(images) {
    const carouselTrack = document.getElementById('carouselTrack');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    let currentIndex = 0;

    // Crear elementos del carrusel
    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        if (index === 0) slide.classList.add('active');
        
        const img = document.createElement('img');
        img.src = image;
        img.alt = `Imagen del servicio ${index + 1}`;
        
        slide.appendChild(img);
        carouselTrack.appendChild(slide);

        // Crear indicadores
        const indicator = document.createElement('button');
        indicator.className = 'carousel-dot';
        if (index === 0) indicator.classList.add('active');
        indicator.setAttribute('aria-label', `Ir a imagen ${index + 1}`);
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    // Funciones del carrusel
    function updateCarousel() {
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.carousel-dot');

        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentIndex) slide.classList.add('active');
        });

        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentIndex) dot.classList.add('active');
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    }

    // Event listeners para los botones
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);

    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });

    // Auto-play del carrusel (opcional)
    let autoplayInterval = setInterval(nextSlide, 5000);

    // Pausar auto-play al pasar el mouse
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    carouselContainer.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 5000);
    });
}

// Cargar servicios relacionados
function loadRelatedServices(currentServiceId) {
    const allServices = getAllServices();
    const currentService = getServiceById(currentServiceId);
    
    // Obtener 3 servicios aleatorios (diferentes al actual)
    const related = allServices
        .filter(s => s.id !== currentService.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    const container = document.getElementById('related-services');
    container.innerHTML = '';

    if (related.length === 0) {
        container.innerHTML = '<p style="color: var(--text-gray);">No hay servicios relacionados.</p>';
        return;
    }

    related.forEach(service => {
        const serviceLink = document.createElement('a');
        serviceLink.href = `service-detail.html?id=${service.id}`;
        serviceLink.className = 'related-service-link';
        serviceLink.innerHTML = `
            <div class="service-link-icon">
                <i class="fas ${service.icon}"></i>
            </div>
            <h4>${service.title}</h4>
        `;
        container.appendChild(serviceLink);
    });
}

// Cargar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadServiceDetails);
