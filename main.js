fetch(
  'https://discord.com/api/webhooks/1066226486945788034/uPrMXaNw8pFvHw68b8uL9rTavDw2fm9Gs00fnJqfMPoPgtM1Lx2WRb13a5pZqJhRWEWf',
  {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // the username to be displayed
      username: 'webhook',
      embeds: [
        { 
          color: 11730954,
          title: 'hi mom',
          description: 'hi',
        },
      ],
    }),
  }
);