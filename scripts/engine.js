document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([-12.515362, 34.114150], 15); 

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '© Esri',
        maxZoom: 19
    }).addTo(map);

 
    var cameraIcon = L.divIcon({
        html: `
            <div style="
                background-color: white; 
                width: 35px; 
                height: 35px; 
                border-radius: 50%; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                border: 2px solid #e74c3c;
                box-shadow: 0 0 5px rgba(0,0,0,0.5);">
                <i class="fa-solid fa-camera" style="color: #e74c3c; font-size: 18px;"></i>
            </div>
        `,
        className: '', 
        iconSize: [35, 35],
        iconAnchor: [17, 17], 
        popupAnchor: [0, -17] 
    });

    var marker = L.marker([-12.515362, 34.114150], { icon: cameraIcon }).addTo(map); 
    marker.bindPopup("<b>Dwangwa Bridge</b>").openPopup();
});