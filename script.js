document.addEventListener('DOMContentLoaded', () => {
    const followButton = document.querySelector('button');
    if (followButton) {
        followButton.addEventListener('click', () => {
            alert('Thanks for your interest! Please follow on the platforms listed.');
        });
    }
});
