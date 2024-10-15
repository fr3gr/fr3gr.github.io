// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        document.querySelector(event.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize map
const map = document.getElementById('map');
const mapOptions = {
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 12
};
const mapInstance = new google.maps.Map(map, mapOptions);