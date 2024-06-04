let inputs = document.querySelectorAll('.animated-labels input');

inputs.forEach(function(input) {
    input.addEventListener('focus', function() {
        this.parentNode.classList.add('active');
    });
    input.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            this.parentNode.classList.remove('active');
        }
    });
});