document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('resolution');
    const images = document.querySelectorAll('.image img');

    dropdown.addEventListener('change', function() {
        // Hide all images first
        images.forEach(img => img.style.display = 'none');

        // Show the selected image
        switch (dropdown.value) {
            case '144p':
                document.querySelector('.img1').style.display = 'block';
                document.querySelector('.image').style.display = 'block';
                break;
            case '240p':
                document.querySelector('.img2').style.display = 'block';
                document.querySelector('.image').style.display = 'block';
                break;
            case '360p':
                document.querySelector('.img3').style.display = 'block';
                document.querySelector('.image').style.display = 'block';
                break;
            case '480p':
                document.querySelector('.img4').style.display = 'block';
                document.querySelector('.image').style.display = 'block';
                break;
            case '720p':
                document.querySelector('.img5').style.display = 'block';
                document.querySelector('.image').style.display = 'block';
                break;
            case '1080p':
                document.querySelector('.img6').style.display = 'block';
                break;
            default:
                // No image is shown if no valid option is selected
                break;
        }
    });
});
