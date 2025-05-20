# Image Color Picker

## Description

A simple web application that allows users to upload an image and pick colors from it. The application displays the selected color along with its RGB and HEX codes.

## Features

* Upload an image (supports common image formats like JPG, PNG, GIF).
* Display the uploaded image on a canvas.
* Click on any part of the image to pick a color.
* Show a live preview of the picked color.
* Display the RGB (Red, Green, Blue) value of the picked color.
* Display the HEX (Hexadecimal) code of the picked color.
* Responsive design for use on different screen sizes.

## Technologies Used

* **HTML5:** For the basic structure of the web page.
* **CSS3:** For styling the user interface and responsiveness.
* **JavaScript (ES6+):** For all the client-side logic, including:
    * Image uploading and reading (FileReader API).
    * Drawing the image onto a Canvas (Canvas API).
    * Pixel data manipulation (`getImageData`) for color picking.
    * DOM manipulation to display results.

## How to Use Locally

1.  **Clone the repository (if applicable) or download the files:**
    * If you have this project in a Git repository:
        ```bash
        git clone <repository-url>
        cd <repository-directory>
        ```
    * Otherwise, ensure you have `index.html`, `style.css`, and `script.js` in the same folder.

2.  **Open `index.html` in your web browser:**
    * Navigate to the project folder in your file explorer.
    * Double-click the `index.html` file, or right-click and choose "Open with" your preferred web browser.

3.  **Using the App:**
    * Click the "Upload an Image" button (or the label next to it) to select an image from your computer.
    * Once the image is loaded, click anywhere on the image to pick a color.
    * The color preview box, RGB value, and HEX code will update with the selected color's details.

## How to Deploy

This is a static web application and can be deployed using various static site hosting services. Some popular options include:

* **GitHub Pages:** Host directly from a GitHub repository.
* **Netlify:** Offers easy drag-and-drop deployment.
* **Vercel:** Another excellent platform for static sites and frontend frameworks.
* **Cloudflare Pages:** Provides robust hosting with a global CDN.
* Traditional web hosting via FTP/cPanel.

Simply upload the `index.html`, `style.css`, and `script.js` files to your chosen hosting provider.

## Live Demo

*(Optional: If you've deployed your app, add a link here!)*
* **Example:** `[Live Demo](https://your-username.github.io/your-repository-name/)`

## Future Enhancements (Ideas)

* **Eyedropper Tool:** A more interactive eyedropper that shows color preview on hover before clicking.
* **Color Palette:** Ability to save picked colors to a palette.
* **Copy to Clipboard:** Buttons to easily copy RGB/HEX codes.
* **Zoom Functionality:** Allow users to zoom into the image for more precise color picking.
* **Support for pasting image URLs.**
* **Color format conversions (e.g., to HSL, CMYK).**

---
