const factBubbles = document.querySelectorAll('.fact-bubble');

factBubbles.forEach((bubble) => {
  const originalText = bubble.querySelector('p').textContent;
  const link = bubble.getAttribute('href');

  bubble.addEventListener('mouseenter', () => {
    bubble.querySelector('p').textContent = 'Click me!';
    bubble.style.backgroundColor = 'black';
    bubble.style.color = 'white';
  });

  bubble.addEventListener('mouseleave', () => {
    bubble.querySelector('p').textContent = originalText;
    bubble.style.backgroundColor = '#8f54f9';
    bubble.style.color = '#f6f1ff';
  });

  bubble.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = link; // Navigate to the link's URL
  });
});

