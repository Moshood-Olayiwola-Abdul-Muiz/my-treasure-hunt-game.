// Function to preview site in phone
function previewSite() {
  const url = document.getElementById("siteUrl").value;
  const iframe = document.getElementById("phoneDisplay");
  const image = document.getElementById("uploadedImage");

  if (url) {
    iframe.src = url;
    iframe.style.display = "block";
    image.style.display = "none";
  }
}

// Function to preview uploaded image
function previewImage(event) {
  const iframe = document.getElementById("phoneDisplay");
  const image = document.getElementById("uploadedImage");

  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      image.src = e.target.result;
      image.style.display = "block";
      iframe.style.display = "none";
    };
    reader.readAsDataURL(file);
  }
}
