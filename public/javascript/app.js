// Add click event to fact to show answer
(() => {
  const answerWrapper = document.querySelectorAll(".answer-wrapper");
  const toggleBtns = document.querySelectorAll(".answer-toggle");

  for (const ans of answerWrapper) {
    ans.style.display = "none";
  }

  for (const btn of toggleBtns) {
    btn.addEventListener("click", (e) => {
      const answer = e.target.parentElement.parentElement.nextElementSibling;
      answer.style.display = answer.style.display === "none" ? "block" : "none";
    });
  }
  /* // Check if event listeners are already attached
if (!toggleBtns[0].hasEventListener) {
  for (const btn of toggleBtns) {
    btn.hasEventListener = true; // Mark that the event listener is added
    btn.addEventListener("click", (e) => {
      const answer = e.target.parentElement.parentElement.nextElementSibling;
      answer.style.display = answer.style.display === "none" ? "block" : "none";
    });
  }
} */
})();
