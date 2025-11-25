document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.getElementById('backToTop');

    if (!backBtn) return; // ila ma kaynch button, ma ndir walo

    backBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
