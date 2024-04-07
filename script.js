// This function is for our hamburger menu

// First we define the function
function toggleMenu() {

  //then define a constant which targets an element on our webpage with the class name "menu-links"
  const menu = document.querySelector(".menu-links");
  //same thing for the hamburger icon
  const icon = document.querySelector(".hamburger-icon");

  //now will target the newly made constant (menu) and add a classList method to it, which will toggle the class "open"
  menu.classList.toggle("open");
  //same thing for the hamburger icon
  icon.classList.toggle("open");
}

// JavaScript to control the modals

// Get all timeline items
const timelineItems = document.querySelectorAll('.timeline-item');

// Loop through each timeline item and attach a click event listener
timelineItems.forEach(item => {
    item.addEventListener('click', function() {
        // Get the modal corresponding to this timeline item
        const modalId = this.dataset.modal;
        const modal = document.getElementById(modalId);

        // Display the modal
        modal.style.display = "block";

        // Prevent scrolling on the background content
        document.body.style.overflow = "hidden";
    });
});

// Get all the live demo buttons
const liveDemoButtons = document.querySelectorAll('.project-btn');

// Loop through each timeline item and attach a click event listener
liveDemoButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the modal corresponding to this project's live demo button
        const modalId = this.dataset.modal;
        const modal = document.getElementById(modalId);

        // Display the modal
        modal.style.display = "block";

        // Prevent scrolling on the background content
        document.body.style.overflow = "hidden";
    });
});


// Get all close buttons (X) in modals
const closeButtons = document.querySelectorAll('.close');

// Loop through each close button and attach a click event listener
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the modal containing the close button
        const modal = this.closest('.modal');

        // Hide the modal
        modal.style.display = "none";

        // Allow scrolling on the background content
        document.body.style.overflow = "auto";

        // Pause the video if it exists (incase the media within the modal contains a video element)
        var video = modal.querySelector('video');
        if (video) {
        video.pause();
        }

    });
});

// Get the modals
const modals = document.querySelectorAll('.modal');

// Loop through each modal and attach a click event listener to close it when clicking outside
modals.forEach(modal => {
    modal.addEventListener('click', function(event) {
        // Check if the clicked element is the modal content
        if (event.target === modal) {
            // Hide the modal
            modal.style.display = "none";

            // Allow scrolling on the background content
            document.body.style.overflow = "auto";

            // Pause the video if it exists (incase the media within the modal contains a video element)
            var video = modal.querySelector('video');
            if (video) {
            video.pause();
            }
        }
    });
});











