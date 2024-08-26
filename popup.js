document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const domainInput = document.getElementById('domain-input');

    // Set focus to the input field when the popup opens
    domainInput.focus();

    // Handle button click
    searchButton.addEventListener('click', () => {
        handleSearch();
    });

    // Handle Enter key press
    domainInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Function to handle search
    function handleSearch() {
        let query = domainInput.value.trim();
        if (query) {
            // Remove http://, https://, or leading dots from the input
            query = query.replace(/^https?:\/\//, '').replace(/^\./, '');
            
            // Replace spaces with dots
            query = query.replace(/\s+/g, '.');
            
            // Split the query into domain and path
            const parts = query.split('/');
            let domain = parts.shift();
            const path = parts.join('/');

            // Check for .eth and append .eth.limo or otherwise .hns.to
            const ethPattern = /\.eth$/;
            if (ethPattern.test(domain)) {
                domain += '.limo';
            } else {
                domain += '.hns.to';
            }

            // Construct the URL
            const url = path ? `http://${domain}/${path}` : `http://${domain}`;
            chrome.tabs.create({ url });
        }
    }
});
