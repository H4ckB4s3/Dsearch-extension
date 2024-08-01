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

## JavaScript Functionality
The JavaScript code handles the domain resolution logic and UI interactions.

### Domain Resolution
The script listens for the button click, processes the input, and constructs the appropriate URL based on the domain type.

### Checking Bridge Availability
The script checks if the `hns.to` and `limo.eth` bridges are online and updates the UI indicators accordingly.

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
