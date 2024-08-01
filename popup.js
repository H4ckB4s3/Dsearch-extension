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
        const query = domainInput.value.trim();
        if (query) {
            let domain = query.replace(/^https?:\/\//, '').replace(/^\./, '').replace(/\s+/g, '.');
            const ethPattern = /\.eth$/;
            domain += ethPattern.test(domain) ? '.limo' : '.hns.to';
            const url = `http://${domain}`;
            chrome.tabs.create({ url });
        }
    }
});

