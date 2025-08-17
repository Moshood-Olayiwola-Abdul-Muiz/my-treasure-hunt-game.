// ---- Gauges logic ----
const gauges = document.querySelectorAll(".gauge");
gauges.forEach(gauge => {
  const progressCircle = gauge.querySelector(".progress");
  const percentText = gauge.querySelector(".percent-text");
  const input = gauge.querySelector("input[type='number']");
  const button = gauge.querySelector(".gauge-btn");

  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  progressCircle.style.strokeDasharray = String(circumference);
  progressCircle.style.strokeDashoffset = String(circumference);

  function setProgress(val) {
    const p = Math.max(0, Math.min(100, Number(val) || 0));
    const offset = circumference * (1 - p / 100);
    progressCircle.style.strokeDashoffset = String(offset);
    percentText.textContent = p + "%";
    if (p < 50) {
      progressCircle.style.stroke = "red";
      percentText.style.color = "red";
    } else if (p < 80) {
      progressCircle.style.stroke = "orange";
      percentText.style.color = "orange";
    } else {
      progressCircle.style.stroke = "limegreen";
      percentText.style.color = "limegreen";
    }
  }

  button.addEventListener("click", () => setProgress(input.value));
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") setProgress(input.value); });

  // initialize
  setProgress(input.value);
});

// ---- Phone image upload ----
const phone = document.getElementById("phone");
const uploadInput = document.getElementById("uploadInput");
const phoneImage = document.getElementById("phoneImage");
const checkBtn = document.getElementById("checkBtn");

// Click the phone to open image picker
phone.addEventListener("click", () => uploadInput.click());
// Allow "Check" button to also open the picker (convenience)
checkBtn.addEventListener("click", () => uploadInput.click());

// When user picks any image, display it inside the phone
uploadInput.addEventListener("change", function() {
  const file = this.files && this.files[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    alert("Please select an image file.");
    this.value = "";
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    phoneImage.src = e.target.result;
    phoneImage.style.display = "block";
  };
  reader.readAsDataURL(file);
  // allow reselecting same file later
  this.value = "";
});
