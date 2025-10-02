document.querySelectorAll(".switchable").forEach(img => {
    img.addEventListener("click", () => {
        let path = img.src;
        let filename = path.substring(path.lastIndexOf("/") + 1); // ekspetasi1.jpeg
        let prefix = filename.replace(/[0-9]+\.jpeg$/, "");      // ekspetasi
        let index = parseInt(filename.match(/[0-9]+/)[0]);       // 1

        index++; // coba gambar berikut
        let newSrc = `assets/img/materi/pembukaan/${prefix}${index}.jpeg`;

        let tester = new Image();
        tester.onload = () => img.src = newSrc;
        tester.onerror = () => img.src = `assets/img/materi/pembukaan/${prefix}1.jpeg`;
        tester.src = newSrc;
    });
});
