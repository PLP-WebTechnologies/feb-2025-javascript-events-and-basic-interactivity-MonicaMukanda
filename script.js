// --- 1. Event Handling ---

// Button Click
const clickButton = document.getElementById('clickButton');
const clickOutput = document.getElementById('clickOutput');

clickButton.addEventListener('click', function() {
    clickOutput.textContent = 'Hello guest!';
});

// Hover Effect
const hoverArea = document.getElementById('hoverArea');
const hoverOutput = document.getElementById('hoverOutput');

hoverArea.addEventListener('mouseover', function() {
    hoverOutput.textContent = 'Mouse over the area.';
});

hoverArea.addEventListener('mouseout', function() {
    hoverOutput.textContent = 'Mouse left the area.';
});

// Keypress Detection
const keypressInput = document.getElementById('keypressInput');
const keypressOutput = document.getElementById('keypressOutput');

keypressInput.addEventListener('keypress', function(event) {
    keypressOutput.textContent = `You pressed: ${event.key}`;
});

// Bonus: Secret Action (Double Click)
const secretButton = document.getElementById('secretButton');
const secretOutput = document.getElementById('secretOutput');

secretButton.addEventListener('dblclick', function() {
    secretOutput.textContent = 'Hello there and welcome to my secret action';
    secretOutput.style.backgroundColor = 'pink';
    secretOutput.style.padding = '10px';
});

// --- 2. Interactive Elements ---

// Button Changes Text/Color
const changeButton = document.getElementById('changeButton');
const changeOutput = document.getElementById('changeOutput');
let isOriginal = true;

changeButton.addEventListener('click', function() {
    if (isOriginal) {
        changeButton.textContent = 'Changed!';
        changeButton.style.backgroundColor = 'purple';
        changeOutput.textContent = 'Text and color changed.';
    } else {
        changeButton.textContent = 'Change Me';
        changeButton.style.backgroundColor = '#007bff';
        changeOutput.textContent = 'Back to original.';
    }
    isOriginal = !isOriginal;
});

// Image Gallery / Slideshow (Basic)
const galleryImage = document.getElementById('galleryImage');
const prevImageButton = document.getElementById('prevImage');
const nextImageButton = document.getElementById('nextImage');
const images = [
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg"
];
let currentImageIndex = 0;

function updateGalleryImage() {
    galleryImage.src = images[currentImageIndex];
}

prevImageButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    updateGalleryImage();
});

nextImageButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    updateGalleryImage();
});

// Tabs (Basic)
const tabButtons = document.querySelectorAll('.tab-buttons .tab-button');
const tabContents = document.querySelectorAll('.tabs .tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        const tabId = this.dataset.tab;

        // Deactivate all buttons and content
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Activate the clicked button and corresponding content
        this.classList.add('active');
        document.getElementById(`${tabId}-content`).classList.add('active');
    });
});

// Bonus: CSS Animation (already in style.css for #animatedBox on hover)

// --- 3. Form Validation ---

const myForm = document.getElementById('myForm');
const requiredField = document.getElementById('requiredField');
const emailField = document.getElementById('emailField');
const passwordField = document.getElementById('passwordField');
const requiredFieldError = document.getElementById('requiredFieldError');
const emailFieldError = document.getElementById('emailFieldError');
const passwordFieldError = document.getElementById('passwordFieldError');
const formOutput = document.getElementById('formOutput');

myForm.addEventListener('submit', function(event) {
    let isValid = true;

    // Required field check
    if (requiredField.value.trim() === '') {
        requiredFieldError.textContent = 'This field is required.';
        isValid = false;
    } else {
        requiredFieldError.textContent = '';
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailField.value.trim() !== '' && !emailRegex.test(emailField.value)) {
        emailFieldError.textContent = 'Invalid email format.';
        isValid = false;
    } else {
        emailFieldError.textContent = '';
    }

    // Password rules (min 8 characters)
    if (passwordField.value.length < 8) {
        passwordFieldError.textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    } else {
        passwordFieldError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
        formOutput.textContent = 'Form validation failed. Please correct the errors.';
        formOutput.style.color = 'red';
    } else {
        formOutput.textContent = 'Form submitted successfully!';
        formOutput.style.color = 'green';
        // In a real scenario, you would send the form data to a server here
    }
});
