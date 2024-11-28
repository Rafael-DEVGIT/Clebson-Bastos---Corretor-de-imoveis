const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}


setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);


showSlide(currentSlide);


document.querySelectorAll('.toggle').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 


        document.querySelectorAll('.content').forEach(content => {
            content.classList.remove('active');
        });


        const targetId = this.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);


        targetContent.classList.add('active');
    });
});


const imageSets = [
    ["https://girafatur.com.br/wp-content/uploads/2022/07/22-e1485876206802.webp", 
        "https://www.viagensecaminhos.com/wp-content/uploads/2013/03/lagoinha-ceara.jpg", 
        "https://kerolviajar.com.br/wp-content/uploads/2022/04/Lagoinha.jpg", 
        "https://seguenaviagem.com/wp-content/uploads/2021/03/IMG_2784-1024x576.jpg"],


    ["https://via.placeholder.com/600x400?text=Imagem+1", 
        "https://via.placeholder.com/600x400?text=Imagem+2", 
        "https://via.placeholder.com/600x400?text=Imagem+3", 
        "https://via.placeholder.com/600x400?text=Imagem+4"],


    ["https://via.placeholder.com/600x400?text=Imagem+1", 
        "https://via.placeholder.com/600x400?text=Imagem+2",
        "https://via.placeholder.com/600x400?text=Imagem+3",
        "https://via.placeholder.com/600x400?text=Imagem+4"],

    ["https://via.placeholder.com/600x400?text=Imagem+1",
        "https://via.placeholder.com/600x400?text=Imagem+2", 
        "https://via.placeholder.com/600x400?text=Imagem+3", 
        "https://via.placeholder.com/600x400?text=Imagem+4"]
];

function updateMainImage(index, setId) {
    const mainImage = document.getElementById(`mainImage${setId}`);
    mainImage.src = imageSets[setId - 1][index];
}


document.querySelectorAll('.thumbnail').forEach((thumbnail, index) => {
    const setId = parseInt(thumbnail.closest('.image-gallery').querySelector('.image-container img').id.slice(-1)); // Pega o ID do conjunto
    thumbnail.addEventListener('click', () => {
        updateMainImage(index, setId);
    });
});


function autoChangeImage(setId) {
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % imageSets[setId - 1].length;
        updateMainImage(currentIndex, setId);
    }, 5000);
}


[1, 2, 3, 4].forEach(setId => autoChangeImage(setId));