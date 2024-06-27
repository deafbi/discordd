async function sendToWebhook(message, referringSite) {
  const webhookUrl = 'https://discordapp.com/api/webhooks/1255986009150062616/NgQ5cwschUI4l281oQqhyYNL7zFxxO-IQwf3N1UuNk6sy7_wbvvVRorkBtpZh0rBVDFt'; // Replace with your actual Discord webhook URL

  const payload = {
    content: `**Message:** ${message}\n**Referring Site:** ${referringSite}`
  };

  try {
    // Fetch IP address from ipinfo.io (optional, as per previous discussion)
    // You may include ipAddress if needed as an additional parameter

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
    window.location.href = referringSite;
  } catch (error) {
    console.error('Error:', error);

    // If there's an error, still attempt to redirect back to the referring URL
    window.location.href = referringSite;
  }
}

// Extract message and referring site from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const message = urlParams.get("message");
const referringSite = urlParams.get("referringSite");

// Send the extracted details to Discord webhook
sendToWebhook(message, referringSite);
