// Store the current audio element to control playback
let currentAudio = null;

// Listen for runtime messages to play audio
chrome.runtime.onMessage.addListener(msg => {
  if ('play' in msg) {
    playAudio(msg.play);
  }
});

// Play sound with access to DOM APIs
function playAudio({ source, volume }) {
  // Stop any existing audio
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Create and play new audio
  currentAudio = new Audio(source);
  currentAudio.volume = volume;
  currentAudio.addEventListener('ended', () => {
    currentAudio = null;
  });
  currentAudio.play().catch(err => console.error('[playAudio] Error:', err));
}

// Handle notification dismissal to stop audio
chrome.notifications.onClosed.addListener((notificationId, byUser) => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
});

// Optional: Handle notification button clicks or other interactions
chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
});
