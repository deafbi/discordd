function sendToWebhook(message, referringSite, ipAddress) {
  const webhookUrl = 'https://discordapp.com/api/webhooks/1255962432921145457/PLRB-dTHp8mXNBsp5N85oGGr2776pyvESiZpTOe032UtLHtVwgbbO5RDYBzD03io256l'; // Replace with your actual Discord webhook URL

  const payload = {
    content: `**Message:** ${message}\n**Referring Site:** ${referringSite}\n**IP Address:** ${ipAddress}`
  };

  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .then(response => {
    if (!response.ok) {
      console.error('Failed to send message to Discord webhook:', response.status, response.statusText);
    } else {
      console.log('Message sent successfully to Discord webhook');
    }

    // After fetch completes, redirect back to the referring URL
    window.location.href = document.referrer;
  })
  .catch(error => {
    console.error('Error:', error);

    // If there's an error, still attempt to redirect back to the referring URL
    window.location.href = document.referrer;
  });
}

// Extract message, referring site, and IP address from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const message = urlParams.get("message");
const referringSite = urlParams.get("referringSite");
const ipAddress = urlParams.get("ipAddress");

// Send the extracted details to Discord webhook
sendToWebhook(message, referringSite, ipAddress);
