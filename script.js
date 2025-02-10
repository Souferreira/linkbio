document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', () => {
        alert('Você clicou em um link!');
    });
});