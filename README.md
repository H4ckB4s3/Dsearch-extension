# Dsearch Chrome Extension

## Introduction
The Dsearch Chrome Extension provides a simple and efficient way to resolve web3 domains using web2 bridges. It supports ENS (Ethereum Name Service) and HNS (Handshake) domains, making it easy to access these decentralized domains through your browser.

## Features
- Input field to resolve ENS and HNS domains
- Automatically uses `hns.to` for HNS domains and `limo.eth` for ENS domains
- Opens resolved domains in a new browser tab
- Checks the availability of the bridges (`hns.to` and `limo.eth`) on page load

## Installation
To install the Dsearch Chrome Extension, follow these steps:

1. Clone or download the repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top-right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage
1. Click on the Dsearch extension icon in your browser to open the popup.
2. Enter an ENS or HNS domain in the input field.
3. Click the "Go" button to resolve the domain. The resolved URL will open in a new browser tab.

## Code Overview

### HTML Structure
The extension consists of a simple HTML structure with an input field and a button.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dsearch Extension</title>
    <link rel="stylesheet" href="popup.css">
</head>
<body>
    <div class="search-container">
        <input type="text" id="domain-input" class="search-input" placeholder="Enter ENS/HNS domain">
        <button id="search-button" class="search-button">Go</button>
    </div>
    <script src="popup.js"></script>
</body>
</html>
## JavaScript Functionality
The JavaScript code handles the domain resolution logic and UI interactions.

### Domain Resolution
The script listens for the button click, processes the input, and constructs the appropriate URL based on the domain type.

```javascript
document.getElementById('search-button').addEventListener('click', function() {
    let query = document.getElementById('domain-input').value.trim();

    // Remove http://, https://, or leading dots from the input
    query = query.replace(/^https?:\/\//, '').replace(/^\./, '');

    // Replace spaces with dots
    query = query.replace(/\s+/g, '.');

    if (query) {
        const parts = query.split('/');
        let domain = parts.shift();
        const path = parts.join('/');

        // Check for .eth and append .limo
        const ethPattern = /\.eth$/;
        if (ethPattern.test(domain)) {
            domain += '.limo';
        } else {
            domain += '.hns.to';
        }

        // Construct the URL
        const url = path ? `http://${domain}/${path}` : `http://${domain}`;
        window.open(url, '_blank');
    }
});
### Checking Bridge Availability
The script checks if the `hns.to` and `limo.eth` bridges are online and updates the UI indicators accordingly.

```javascript
async function checkSite(url, indicatorId) {
    try {
        // Making a request to the URL
        const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });

        // Check if response is successful
        if (response.ok || response.type === 'opaque') {
            document.getElementById(indicatorId).classList.add('green');
            document.getElementById(indicatorId).classList.remove('red');
        } else {
            document.getElementById(indicatorId).classList.add('red');
            document.getElementById(indicatorId).classList.remove('green');
        }
    } catch (error) {
        document.getElementById(indicatorId).classList.add('red');
        document.getElementById(indicatorId).classList.remove('green');
    }
}

// Check both sites on page load
window.onload = () => {
    checkSite('https://hns.to', 'hns-indicator');
    checkSite('https://eth.limo', 'limo-indicator');
};
## License
This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.

## Contributing
We welcome contributions from the community. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with a clear description.
4. Push your branch to your forked repository.
5. Open a pull request to the main repository.

## Contact
For any questions or support, please reach out to us at [info@dsearch.org](mailto:info@dsearch.org).
