// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements we'll need to interact with
    const imageUpload = document.getElementById('imageUpload');
    const imageCanvas = document.getElementById('imageCanvas');
    const uploadedImage = document.getElementById('uploadedImage'); // We'll use this to easily get image data
    const ctx = imageCanvas.getContext('2d'); // Get the 2D rendering context for the canvas

    const colorPreview = document.getElementById('colorPreview');
    const rgbValue = document.getElementById('rgbValue');
    const hexValue = document.getElementById('hexValue');

    // Event listener for when a file is selected in the input field
    imageUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                uploadedImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            ctx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
            uploadedImage.src = "#";
            colorPreview.style.backgroundColor = 'transparent';
            rgbValue.textContent = '-';
            hexValue.textContent = '-';
            imageCanvas.width = 0; // Reset canvas size
            imageCanvas.height = 0; // Reset canvas size
        }
    });

    // This function runs when the content of the <img> tag (our image) has loaded
    uploadedImage.onload = () => {
        // Set the canvas dimensions to match the image dimensions
        imageCanvas.width = uploadedImage.naturalWidth;
        imageCanvas.height = uploadedImage.naturalHeight;

        // Draw the image onto the canvas
        ctx.drawImage(uploadedImage, 0, 0, uploadedImage.naturalWidth, uploadedImage.naturalHeight);

        // Reset previous color pick info
        colorPreview.style.backgroundColor = 'transparent';
        rgbValue.textContent = '-';
        hexValue.textContent = '-';
    };

    // Function to convert an RGB color component to its 2-digit hex representation
    function componentToHex(c) {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    // Function to convert RGB to HEX color format
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    // Event listener for clicks on the canvas to pick a color
    imageCanvas.addEventListener('click', (event) => {
        // Check if an image is loaded (canvas has width and height)
        if (imageCanvas.width === 0 || imageCanvas.height === 0) {
            // No image loaded or image failed to load, do nothing
            return;
        }

        // Get the click coordinates relative to the canvas
        // event.offsetX and event.offsetY give the coordinates within the target element (canvas)
        const x = event.offsetX;
        const y = event.offsetY;

        // Get the color data for the single pixel at the clicked coordinates
        // getImageData(x, y, width, height) returns an ImageData object
        // The .data property is a Uint8ClampedArray containing color data in RGBA order
        const pixel = ctx.getImageData(x, y, 1, 1);
        const data = pixel.data; // Array: [R, G, B, A]

        const r = data[0];
        const g = data[1];
        const b = data[2];
        // const a = data[3]; // Alpha value (0-255), we're not using it here but it's available

        // Format the RGB string
        const rgbString = `rgb(${r}, ${g}, ${b})`;

        // Update the color preview box
        colorPreview.style.backgroundColor = rgbString;

        // Update the RGB value display
        rgbValue.textContent = `${r}, ${g}, ${b}`;

        // Convert RGB to HEX and update the HEX value display
        hexValue.textContent = rgbToHex(r, g, b).toUpperCase();
    });
});