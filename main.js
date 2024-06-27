function sendToWebhook(message) {
  const webhookUrl = 'https://discordapp.com/api/webhooks/1255962432921145457/PLRB-dTHp8mXNBsp5N85oGGr2776pyvESiZpTOe032UtLHtVwgbbO5RDYBzD03io256l'; // Replace with your actual Discord webhook URL

  const payload = {
    content: message
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
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

// Extract message from URL parameter 'data'
const myKeysValues = window.location.search;
const urlParams = new URLSearchParams(myKeysValues);
const msg = urlParams.get("data");

// Send the extracted message to Discord webhook
sendToWebhook(msg);
