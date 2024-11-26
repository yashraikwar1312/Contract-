document.getElementById('generateBtn').addEventListener('click', generateContact);
document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
document.getElementById('downloadBtn').addEventListener('click', downloadAsTextFile);

function generateContact() {
    const contactType = document.getElementById('contactType').value.toLowerCase();
    const result = document.getElementById('result');
    const copyBtn = document.getElementById('copyBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    let contactInfo = '';

    switch (contactType) {
        case 'harassment':
            contactInfo = `
                Contact Type: Harassment\n
                Relevant IPC Section: Section 354 - Assault or criminal force to woman with intent to outrage her modesty.\n
                Description: It deals with the offense of assault or criminal force to a woman with the intent to outrage her modesty.
            `;
            break;
        case 'theft':
            contactInfo = `
                Contact Type: Theft\n
                Relevant IPC Section: Section 379 - Punishment for theft.\n
                Description: It defines and prescribes punishment for the offense of theft.
            `;
            break;
        case 'assault':
            contactInfo = `
                Contact Type: Assault\n
                Relevant IPC Section: Section 351 - Assault.\n
                Description: It defines the act of assault and its legal implications.
            `;
            break;
        default:
            contactInfo = 'Contact type not recognized. Please enter a valid contact type.';
            break;
    }

    result.textContent = contactInfo;

    if (contactInfo) {
        copyBtn.style.display = 'inline-block';
        downloadBtn.style.display = 'inline-block';
    }
}

function copyToClipboard() {
    const result = document.getElementById('result').textContent;
    navigator.clipboard.writeText(result).then(() => {
        alert('Copied to clipboard');
    });
}

function downloadAsTextFile() {
    const result = document.getElementById('result').textContent;
    const blob = new Blob([result], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'contact_info.txt';
    link.click();
}
