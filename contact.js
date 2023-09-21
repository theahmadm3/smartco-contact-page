const contactInfo = {
        firstName: "SmartCo Innovations Limited",
        email: "smartcoinnovations@gmail.com",
        phone: "+2348180800080",
        address: "Suite BPG 6, Old Banex Plaza, Wuse, Abuja",
        whatsapp: "+2348180800080",
    };

    function generateVCardWithPicture() {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = "./smartcologo.png";

        img.onload = function () {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, img.width, img.height);

            const pictureData = canvas.toDataURL("image/jpeg");

            contactInfo.picture = pictureData;

            const vCardData = generateVCard(contactInfo);
            const blob = new Blob([vCardData], { type: "text/vcard" });
            const url = URL.createObjectURL(blob);

            const downloadLink = document.createElement("a");
            downloadLink.href = url;
            downloadLink.download = "contact.vcf";

            // Trigger a click event on the download link
            downloadLink.click();
        };
    }

    const downloadButton = document.getElementById("downloadBtn");
    downloadButton.addEventListener("click", generateVCardWithPicture);
