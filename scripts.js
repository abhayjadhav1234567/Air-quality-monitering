// Load data from JSON
fetch('data/air-data.json')
  .then(response => response.json())
  .then(data => {
    // Update AQI
    document.getElementById('aqi-value').textContent = data.current_aqi;
    
    // Render health tips
    const tipsList = document.getElementById('health-tips');
    data.health_guidelines.forEach(tip => {
      const li = document.createElement('li');
      li.textContent = tip;
      tipsList.appendChild(li);
    });

    // TODO: Add chart rendering (using Chart.js or similar)
  });
