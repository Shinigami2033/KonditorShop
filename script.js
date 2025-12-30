document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#orderForm');

    form?.addEventListener('submit', event => {
        event.preventDefault();

        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const product = document.querySelector('#product').value;

        if (!name || !email || !product) {
            alert('Bitte füllen Sie alle Pflichtfelder aus.');
            return;
        }

        alert('Vielen Dank für Ihre Bestellung! Wir melden uns bald.');
        form.reset();
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            target?.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
