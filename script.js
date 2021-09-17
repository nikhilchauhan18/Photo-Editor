const inputs = document.querySelectorAll('.options input');

function updateCss() {
    const sizing = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + sizing);
}

inputs.forEach((input) => { input.addEventListener('change', updateCss) });