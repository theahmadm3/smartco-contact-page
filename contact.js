const contactInfo = {
    firstName: "SmartCo Innovations Limited",
    email: "smartcoinnovations@gmail.com",
    phone: "+2348180800080",
    address: "Suite BPG 6, Old Banex Plaza, Wuse, Abuja",
    whatsapp: "+2348180800080", // Add WhatsApp number
};

// Generate vCard content dynamically
function generateVCard(contactInfo) {
    return `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.firstName}
EMAIL:${contactInfo.email}
TEL:${contactInfo.phone}
ADR:${contactInfo.address} // Address field
X-SOCIALPROFILE;type=whatsapp:${contactInfo.whatsapp} // WhatsApp field
END:VCARD`;
}

// Create a function to trigger the download
function downloadVCard() {
    const vCardData = generateVCard(contactInfo);
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "contact.vcf";
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();

    // Clean up the temporary link
    URL.revokeObjectURL(url);
    document.body.removeChild(downloadLink);
}

// Attach the download function to the button
const downloadButton = document.getElementById("downloadBtn");
downloadButton.addEventListener("click", downloadVCard);