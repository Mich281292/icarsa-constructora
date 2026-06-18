// Obtener ID del proyecto de los parámetros de URL
function getProjectIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Cargar datos del proyecto
function loadProjectDetails() {
    const projectId = getProjectIdFromUrl();
    const project = getProjectById(projectId);

    if (!project) {
        document.body.innerHTML = '<div class="container" style="padding: 5rem 0; text-align: center;"><h1>Proyecto no encontrado</h1><p><a href="index.html">Volver a inicio</a></p></div>';
        return;
    }

    // Actualizar título y descripción
    document.title = `ICARSA Constructora - ${project.title}`;
    document.getElementById('project-breadcrumb').textContent = project.title;
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-description').textContent = project.shortDescription;
    document.getElementById('project-full-description').textContent = project.fullDescription;
    document.getElementById('project-features').innerHTML = project.features.map(feature => `<li><i class="fas fa-check-circle"></i> ${feature}</li>`).join('');
    // Cargar carrusel de imágenes
    initCarousel(project.galleryImages);

    // Cargar proyectos relacionados
    loadRelatedProjects(projectId);
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
        img.alt = `Imagen del proyecto ${index + 1}`;
        
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

// Cargar proyectos relacionados
function loadRelatedProjects(currentProjectId) {
    const allProjects = getAllProjects();
    const currentProject = getProjectById(currentProjectId);
    
    // Obtener 3 proyectos aleatorios (diferentes al actual)
    const related = allProjects
        .filter(p => p.id !== currentProject.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    const container = document.getElementById('related-projects');
    container.innerHTML = '';

    if (related.length === 0) {
        container.innerHTML = '<p style="color: var(--text-gray);">No hay proyectos relacionados.</p>';
        return;
    }

    related.forEach(project => {
        const projectCard = document.createElement('a');
        projectCard.href = `project-detail.html?id=${project.id}`;
        projectCard.className = 'related-project-link';
        projectCard.innerHTML = `
            <img src="${project.mainImage}" alt="${project.title}">
            <h4>${project.title}</h4>
        `;
        container.appendChild(projectCard);
    });
}

// Cargar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadProjectDetails);
