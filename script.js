/**
 * Aral Cavlak Landing Page
 * Dark Neon Aesthetic
 */

// ===== Theme Toggle =====
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme or system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
  html.setAttribute('data-theme', savedTheme);
} else if (!systemPrefersDark) {
  html.setAttribute('data-theme', 'light');
}

themeToggle?.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  if (newTheme === 'dark') {
    html.removeAttribute('data-theme');
  } else {
    html.setAttribute('data-theme', newTheme);
  }

  localStorage.setItem('theme', newTheme);
});

// ===== Smooth Scroll =====
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

// ===== Intersection Observer for Scroll Animations =====
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeInObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add fade-in class to sections
document.querySelectorAll('.section').forEach(section => {
  section.classList.add('fade-in-section');
  fadeInObserver.observe(section);
});

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
  .fade-in-section {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .fade-in-section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Stagger children animations */
  .fade-in-section.visible .section-header {
    animation: fadeInUp 0.6s ease forwards;
    animation-delay: 0.1s;
  }

  .fade-in-section.visible .about-text,
  .fade-in-section.visible .about-skills,
  .fade-in-section.visible .project-card,
  .fade-in-section.visible .contact-content {
    animation: fadeInUp 0.6s ease forwards;
  }

  .fade-in-section.visible .project-card:nth-child(1) { animation-delay: 0.1s; }
  .fade-in-section.visible .project-card:nth-child(2) { animation-delay: 0.2s; }
  .fade-in-section.visible .project-card:nth-child(3) { animation-delay: 0.3s; }

  .fade-in-section.visible .about-text { animation-delay: 0.15s; }
  .fade-in-section.visible .about-skills { animation-delay: 0.25s; }
`;
document.head.appendChild(style);

// ===== Navbar Background on Scroll =====
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    nav.style.background = 'rgba(5, 5, 5, 0.9)';
    nav.style.backdropFilter = 'blur(10px)';
    nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
  } else {
    nav.style.background = 'linear-gradient(to bottom, rgba(5, 5, 5, 1), transparent)';
    nav.style.backdropFilter = 'none';
    nav.style.borderBottom = 'none';
  }

  lastScroll = currentScroll;
});

// ===== Typing Effect for Code Window =====
const codeOutput = document.querySelector('.window-content code');
if (codeOutput) {
  const originalHTML = codeOutput.innerHTML;
  const lines = originalHTML.split('\n');

  // We'll keep the static version for simplicity
  // but add a subtle glow animation to the cursor
}

// ===== Mouse Glow Effect =====
const createGlowEffect = () => {
  const glow = document.createElement('div');
  glow.className = 'mouse-glow';
  document.body.appendChild(glow);

  const glowStyle = document.createElement('style');
  glowStyle.textContent = `
    .mouse-glow {
      position: fixed;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(218, 119, 86, 0.08), transparent 60%);
      pointer-events: none;
      z-index: 0;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease;
      opacity: 0;
    }

    body:hover .mouse-glow {
      opacity: 1;
    }
  `;
  document.head.appendChild(glowStyle);

  document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  });
};

// Only enable on desktop
if (window.matchMedia('(min-width: 1024px)').matches) {
  createGlowEffect();
}

// ===== Project Card Tilt Effect =====
const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// ===== Skill Tags Hover Glow =====
const skillTags = document.querySelectorAll('.skill-tags span');

skillTags.forEach(tag => {
  tag.addEventListener('mouseenter', () => {
    tag.style.boxShadow = '0 0 20px rgba(218, 119, 86, 0.3)';
  });

  tag.addEventListener('mouseleave', () => {
    tag.style.boxShadow = 'none';
  });
});

// ===== Private Repos Blur Reveal =====
const privatePreview = document.getElementById('private-preview');
if (privatePreview) {
  privatePreview.addEventListener('click', () => {
    privatePreview.classList.remove('blurred');
    privatePreview.classList.add('revealed');
  });
}

// ===== Glitch Text Effect =====
const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/\\~`0123456789';

document.querySelectorAll('.repo-name.glitch').forEach(el => {
  const originalText = el.getAttribute('data-text') || el.textContent;
  el.setAttribute('data-text', originalText);

  const glitchText = () => {
    const text = originalText.split('');
    const numGlitches = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < numGlitches; i++) {
      const pos = Math.floor(Math.random() * text.length);
      text[pos] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
    }

    el.textContent = text.join('');

    // Revert after short delay
    setTimeout(() => {
      el.textContent = originalText;
    }, 100);
  };

  // Random glitch intervals
  const scheduleGlitch = () => {
    const delay = Math.random() * 2000 + 500; // 0.5-2.5s
    setTimeout(() => {
      glitchText();
      scheduleGlitch();
    }, delay);
  };

  scheduleGlitch();
});

// ===== Console Easter Egg =====
console.log(`
%c
    _             _    ____            _       _
   / \\   _ __ __ _| |  / ___|__ ___   _| | __ _| | __
  / _ \\ | '__/ _\` | | | |   / _\` \\ \\ / / |/ _\` | |/ /
 / ___ \\| | | (_| | | | |__| (_| |\\ V /| | (_| |   <
/_/   \\_\\_|  \\__,_|_|  \\____\\__,_| \\_/ |_|\\__,_|_|\\_\\

%cHey there! Curious about the code? Check out my GitHub: https://github.com/AralCA
`, 'color: #da7756; font-family: monospace;', 'color: #e8b968;');

// ===== Preloader (optional) =====
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
