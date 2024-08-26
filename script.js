function deleteAction(button) {
    button.classList.add('active');
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Eliminando...';

    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Eliminado';
        button.classList.add('complete');
    }, 5000);

    setTimeout(() => {
        button.classList.add('hidden');
    }, 8000);
}