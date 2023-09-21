const contactInfo = {
    firstName: "SmartCo Innovations Limited",
    email: "smartcoinnovations@gmail.com",
    phone: "+2348180800080",
    address: "Suite BPG 6, Old Banex Plaza, Wuse, Abuja",
    whatsapp: "+2348180800080",
    picture: "./smartcologo.png"
};


function generateVCard(contactInfo) {
    let vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.firstName}
EMAIL:${contactInfo.email}
TEL:${contactInfo.phone}
ADR:${contactInfo.address} // Address field
X-SOCIALPROFILE;type=whatsapp:${contactInfo.whatsapp} // WhatsApp field`;

    if (contactInfo.picture) {
        vCardData += `\nPHOTO;VALUE=uri:${contactInfo.picture}`;
    }

    vCardData += `\nEND:VCARD`;
    return vCardData;
}


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

    URL.revokeObjectURL(url);
    document.body.removeChild(downloadLink);
}

const downloadButton = document.getElementById("downloadBtn");
downloadButton.addEventListener("click", downloadVCard);
