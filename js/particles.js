// Create floating particles for background
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 20; // Number of particles

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random size between 5px and 15px
    const size = Math.random() * 10 + 5;
    
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    // Random animation duration between 15s and 30s
    const duration = Math.random() * 15 + 15;
    
    // Random delay up to 15s
    const delay = Math.random() * 15;
    
    // Random opacity between 0.1 and 0.4
    const opacity = Math.random() * 0.3 + 0.1;
    
    // Random color from gradient
    const colors = ['#3A86FF', '#FF006E', '#00B4D8', '#2EC4B6', '#FF9F1C'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Apply styles
    Object.assign(particle.style, {
      width: `${size}px`,
      height: `${size}px`,
      background: color,
      left: `${posX}%`,
      top: `${posY}%`,
      animation: `floatParticle ${duration}s linear ${delay}s infinite`,
      opacity: opacity,
      borderRadius: '50%',
      position: 'absolute',
      pointerEvents: 'none',
      zIndex: '1'
    });
    
    particlesContainer.appendChild(particle);
  }
}

// Initialize particles when DOM is loaded
document.addEventListener('DOMContentLoaded', createParticles);

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
    // Create ripple element
    const ripple = document.createElement('span');
    ripple.classList.add('btn-ripple');
    
    // Get position of click relative to button
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Position the ripple at click position
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    // Add ripple to button
    this.appendChild(ripple);
    
    // Remove ripple after animation completes
    setTimeout(() => {
      ripple.remove();
    }, 600);
    
    // Add active class for click effect
    this.classList.add('active');
    setTimeout(() => {
      this.classList.remove('active');
    }, 150);
  });
});

// Add hover effect to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    button.style.setProperty('--x', `${x}px`);
    button.style.setProperty('--y', `${y}px`);
  });
});
