async function fetchTents() {
    try {
        const response = await fetch('src/public/json/tents.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const tents = await response.json();
        const tentList = document.getElementById('tentList').querySelector('ul');
        tentList.innerHTML = ''; // Clear previous entries

        tents.forEach(tent => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="product_pages/${tent.Id.toLowerCase()}.html">${tent.Name}</a>`;
            tentList.appendChild(listItem);
        });

        // Show the tent list
        document.getElementById('tentList').style.display = 'block';
    } catch (error) {
        console.error('Error fetching tents:', error);
        const tentList = document.getElementById('tentList').querySelector('ul');
        tentList.innerHTML = '<li>Error loading tents. Please try again later.</li>';
        document.getElementById('tentList').style.display = 'block'; // Show error message
    }
}

function toggleTentList() {
    const tentList = document.getElementById('tentList');
    if (tentList.style.display === 'block') {
        tentList.style.display = 'none'; // Hide if already displayed
    } else {
        fetchTents(); // Fetch and display tents
    }
}

