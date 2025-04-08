import format from "./node_modules/date-fns/esm/format/index.js";

export function displayTime() {
  const clock = document.getElementById('clock');

  function updateClock() {
    const now = new Date();
    const formattedTime = format(now, "MMMM do yyyy, h:mm:ss a");

    // Generate random colors
    const randomColor = () => Math.floor(Math.random()*16777215).toString(16);
    clock.style.color = `#${randomColor()}`;
    clock.style.backgroundColor = `#${randomColor()}`;

    clock.textContent = formattedTime;
  }

  // Initial update
  updateClock();

  // Update every second
  setInterval(updateClock, 1000);
}

// Start the clock when loaded
if (typeof document !== 'undefined') {
  displayTime();
}
