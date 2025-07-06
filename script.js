// Smooth scrolling for internal anchor links (if any are added)
document.addEventListener('DOMContentLoaded', function() {
    // Animate section appearance
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, i) => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(32px)';
        setTimeout(() => {
            section.style.transition = 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)';
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }, 250 + i * 180);
    });

    // Animate hobbies
    const hobbies = document.querySelectorAll('.hobby');
    hobbies.forEach((el, i) => {
        el.style.opacity = 0;
        el.style.transform = 'scale(0.8)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1), transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)';
            el.style.opacity = 1;
            el.style.transform = 'scale(1)';
        }, 850 + i * 180);
    });

    // Contact hover effect
    document.querySelectorAll('.contact-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.background = '#f7f3ff';
            item.style.borderRadius = '7px';
            item.style.transition = 'background 0.25s';
        });
        item.addEventListener('mouseleave', () => {
            item.style.background = 'transparent';
        });
    });

    // Add copy-to-clipboard for email and phone
    function addCopyFeature(selector, value, msg) {
        const el = document.querySelector(selector);
        if (el) {
            el.style.cursor = 'pointer';
            el.title = 'Click to copy';
            el.addEventListener('click', function() {
                navigator.clipboard.writeText(value);
                el.style.background = '#baf0cf';
                setTimeout(() => {
                    el.style.background = '';
                }, 700);
            });
        }
    }
    addCopyFeature('.contact-item:nth-child(1)', '+359 87 981 4377');
    addCopyFeature('.contact-item:nth-child(2)', 'magy.h.f@gmail.com');

    // Highlight nav link on scroll
    const navLinks = document.querySelectorAll('.nav-bar a');
    const sectionIds = ['about', 'contact', 'work', 'education', 'software', 'hobbies'].map(id => '#' + id);
    const sectionEls = sectionIds.map(id => document.querySelector(id));
    function setActiveLink() {
        let scrollPos = window.scrollY + 120; // adjust offset for header
        let found = false;
        for (let i = sectionEls.length - 1; i >= 0; i--) {
            if (sectionEls[i] && sectionEls[i].offsetTop <= scrollPos) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLinks[i].classList.add('active');
                found = true;
                break;
            }
        }
        if (!found) navLinks.forEach(link => link.classList.remove('active'));
    }
    window.addEventListener('scroll', setActiveLink, {passive: true});
    setActiveLink();

    // Smooth scroll (override for all nav links)
    document.querySelectorAll('.nav-bar a').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    window.scrollTo({top: target.offsetTop - 64, behavior: 'smooth'});
                }
            }
        });
    });
});