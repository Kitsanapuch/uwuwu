document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader-wrapper');
    const content = document.querySelector('.content-wrapper');

    // Hide loader and show content after 1.5 seconds
    setTimeout(() => {
        loader.style.opacity = '0';
        content.style.opacity = '1';
        
        // Remove loader from DOM after fade out
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500);
}); 