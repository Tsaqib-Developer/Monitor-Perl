document.querySelectorAll(".switchable").forEach(img => {
    img.addEventListener("click", () => {
        let path = img.src;  
        let filename = path.substring(path.lastIndexOf("/") + 1); // misal: ekspetasi1.jpeg
        let folder = path.substring(0, path.lastIndexOf("/") + 1); // simpan path folder lengkap

        let prefix = filename.replace(/[0-9]+\.jpeg$/, ""); // ekspetasi
        let index = parseInt(filename.match(/[0-9]+/)[0]);  // 1

        index++; // coba gambar berikut
        let newSrc = `${folder}${prefix}${index}.jpeg`;

        let tester = new Image();
        tester.onload = () => img.src = newSrc;
        tester.onerror = () => img.src = `${folder}${prefix}1.jpeg`; // balik ke 1 kalau habis
        tester.src = newSrc;
    });
});

document.addEventListener("DOMContentLoaded", () => {
  // Fade in when page loads
  document.body.classList.remove("fade-out");

  // Fade out when leaving
  document.querySelectorAll("a").forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", e => {
        e.preventDefault();
        const href = link.getAttribute("href");
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location = href;
        }, 500); // match transition time
      });
    }
  });
});