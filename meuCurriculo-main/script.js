// Efeito de digitação no tagline
const taglineText = "Desenvolvedor Front-End | Especialista em Tecnologias Web e Mobile";
const taglineElement = document.getElementById('tagline');
let charIndex = 0;

function typeWriter() {
    if (charIndex < taglineText.length) {
        taglineElement.textContent += taglineText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50);
    }
}

// Inicia o efeito após um pequeno delay
setTimeout(typeWriter, 1500);

// Contador animado para anos de experiência
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Efeito parallax suave no header
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('header');
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Animação suave ao rolar para seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de entrada dos cards de habilidades com delay progressivo
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .experience-item').forEach(card => {
    observer.observe(card);
});

// Efeito de brilho nos cards ao passar o mouse
// Efeito de brilho nos cards atualizado para azul profissional
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Brilho azul bem suave sobre o fundo branco
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(59, 130, 246, 0.1), transparent)`;
        card.style.borderColor = '#3b82f6';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.background = '#ffffff';
        card.style.borderColor = '#e2e8f0';
    });
});

// Adiciona efeito de clique na foto de perfil
document.getElementById('profileImg').addEventListener('click', () => {
    const img = document.getElementById('profileImg');
    img.style.transform = 'scale(1.2) rotate(360deg)';
    setTimeout(() => {
        img.style.transform = 'scale(1) rotate(0deg)';
    }, 600);
});

// Efeito de scroll reveal para seções
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

// Prepara seções para animação
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s ease';
});

window.addEventListener('scroll', revealSections);
revealSections(); // Chama uma vez ao carregar

// Função para trocar imagens (você pode usar isso para adicionar suas próprias imagens)
function updateImages() {
    // Substitua pelos caminhos das suas imagens reais
    // document.getElementById('profileImg').src = 'caminho/para/sua/foto.jpg';
    // document.getElementById('familyImg').src = 'caminho/para/foto/familia.jpg';
}

// Chame a função quando necessário
// updateImages();