// // Meal reminders with start and end times
// const reminders = [
//   { startTime: 7, endTime: 8, message: 'Breakfast' },
//   { startTime: 10, endTime: 11, message: 'Mid morning snack' },
//   { startTime: 12, endTime: 13, message: 'Lunch' },
//   { startTime: 14, endTime: 15, message: 'Mid lunch snack' },
//   { startTime: 17, endTime: 18, message: 'Dinner' },
//   { startTime: 20, endTime: 21, message: 'Late night light snack' },
// ];

// // Motivational messages for each day (0 = Sunday, 6 = Saturday)
// const motivationalMessages = [
//   'Start your week strong! Get plenty of rest',
//   'Happy Monday! Embrace the new opportunities this week!',
//   "It's Tuesday! Keep up the momentum",
//   'Halfway through the week! You are doing great!',
//   'Almost there! Stay focused!',
//   'Happy Friday! The weekend is near!',
//   'Enjoy your Saturday and recharge for the week ahead!',
// ];

// // Track last motivational message day to avoid repeats
// let lastMotivationalMessageDay = null;

// // Create a function that displays our message on the HTML page
// const displayMessage = (message, reminders) => {
//   const messageDisplay = document.getElementById('message-display');
//   //check if the element exists
//   if(!messageDisplay){
//     console.error('Element with id "message-display" not found.');
//     return;
//   }

//   messageDisplay.textContent = ''; // Clear previous messages

//   const p = document.createElement('p'); // Create a new paragraph element
//   p.textContent = message; // Set its content
//   messageDisplay.appendChild(p); // Add the new paragraph to the display
// };

// // Create a function to clear the message from the HTML page
// const clearMessage = () => {
//   const messageDisplay = document.getElementById('message-display');
//   if(messageDisplay){
//   messageDisplay.textContent = ' '; // Clear the display
//   }
// };

// // Function to check reminders and show motivational message
// setInterval(() => {
//   const now = new Date(); // Gives the current date
//   const currentDayIndex = now.getDay(); // Gets current day as an index based on local time
//   const currentHour = now.getHours(); // Gets current hour based on local time

//   // Display the daily motivational message if not shown today
//   let messageToDisplay = ''; // Initialize the message to display

//   if (lastMotivationalMessageDay !== currentDayIndex) {
//     messageToDisplay += `Motivation for today: ${motivationalMessages[currentDayIndex]} `;
//     lastMotivationalMessageDay = currentDayIndex; // Update the last shown day
//   }

// //   // Display the daily motivational message if not shown today
// //   if (lastMotivationalMessageDay !== currentDayIndex) {
// //     displayMessage(
// //       `Motivation for today: ${motivationalMessages[currentDayIndex]}`
// //     );
// //     lastMotivationalMessageDay = currentDayIndex;
// //   }

//   let activeReminder = null;

//   // Check to see if the current hour is within our reminder range
//   for (let i = 0; i < reminders.length; i++) {
//     const { startTime, endTime, message } = reminders[i]; // Correct destructuring

//     if (currentHour >= startTime && currentHour < endTime) {
//       activeReminder = message; // Store the active reminder message
//       break; // Stop checking after we find the current active reminder
//     }
//   }

// // If there's an active reminder, append it to the message
// if (activeReminder) {
//     messageToDisplay += `Reminder: ${activeReminder}`;
//   }

//   // Display the combined message if it contains any content
//   if (messageToDisplay) {
//     displayMessage(messageToDisplay);
//   } else {
//     clearMessage(); // Clear the message if no active reminders
//   }
// }, 5000); // Runs every hour

// Meal reminders with start and end times
const reminders = [
  { startTime: 7, endTime: 8, message: 'Breakfast' },
  { startTime: 10, endTime: 11, message: 'Mid morning snack' },
  { startTime: 12, endTime: 13, message: 'Lunch' },
  { startTime: 14, endTime: 15, message: 'Mid lunch snack' },
  { startTime: 17, endTime: 18, message: 'Dinner' },
  { startTime: 20, endTime: 21, message: 'Late night light snack' },
];

// Motivational messages for each day (0 = Sunday, 6 = Saturday)
const motivationalMessages = [
  'Start your week strong! Get plenty of rest',
  'Happy Monday! Embrace the new opportunities this week!',
  "It's Tuesday! Keep up the momentum!",
  'Halfway through the week! You’re doing great!',
  'Almost there! Stay focused!',
  'Happy Friday! The weekend is near!',
  'Enjoy your Saturday and recharge for the week ahead!',
];

// Track last motivational message day to avoid repeats
let lastMotivationalMessageDay = null;

// Variable to store the current message displayed
let currentDisplayedMessage = '';

// Variable to track the currently active reminder
let activeReminderMessage = '';

// Create a function that displays our message on the HTML page
const displayMessage = (message) => {
  const messageDisplay = document.getElementById('message-display');
  messageDisplay.innerHTML = message; // Set the displayed message
};

// Function to check reminders and show motivational message
const checkRemindersAndMotivation = () => {
  const now = new Date(); // Gives the current date
  const currentDayIndex = now.getDay(); // Gets current day as an index based on local time
  const currentHour = now.getHours(); // Gets current hour based on local time

  // Variable to store the message to display
  let messageToDisplay = '';

  // Check if the motivational message for the current day should be shown
  if (lastMotivationalMessageDay !== currentDayIndex) {
    messageToDisplay += `Motivation for today: ${motivationalMessages[currentDayIndex]} `;
    lastMotivationalMessageDay = currentDayIndex; // Update the last shown day
  }

  let newActiveReminder = null; // Temporary variable to hold the current active reminder

  // Check to see if the current hour is within our reminder range
  for (let i = 0; i < reminders.length; i++) {
    const { startTime, endTime, message } = reminders[i];

    if (currentHour >= startTime && currentHour < endTime) {
      newActiveReminder = message; // Store the new active reminder message
      break; // Stop checking after we find the current active reminder
    }
  }

  // If there's a new active reminder, update the active reminder message
  if (newActiveReminder) {
    activeReminderMessage = newActiveReminder; // Update the active reminder message
  }

  // Combine motivational message with active reminder
  if (activeReminderMessage) {
    messageToDisplay += `Reminder: ${activeReminderMessage}`;
  }

  // If there's a message to display and it's different from the current displayed message
  if (messageToDisplay && messageToDisplay !== currentDisplayedMessage) {
    currentDisplayedMessage = messageToDisplay; // Update current displayed message
    displayMessage(currentDisplayedMessage); // Display the message
  }

  // Clear the message if no active reminder is set and current hour is out of range
  if (!newActiveReminder && !messageToDisplay) {
    displayMessage(''); // Clear the display if no messages
  }
};

// Initial call to display the message right away
checkRemindersAndMotivation();

// Set the interval to check every minute (60000 milliseconds)
setInterval(checkRemindersAndMotivation, 60000); // Update every minute

// displayMessage();
