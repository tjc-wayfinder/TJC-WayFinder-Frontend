export async function postMessageAndGetImage({currentLocation, destinationLocation}: {currentLocation: string, destinationLocation: string}) {
  // const url = "http://127.0.0.1:5000/api/wayfinder";
  const url = "https://tjc-wayfinder-backend.onrender.com/api/wayfinder";
  const message = {
      "currentLocation": currentLocation,
        "destinationLocation": destinationLocation
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const blob = await response.blob();
  const urlCreator = window.URL || window.webkitURL;
  const imageUrl = urlCreator.createObjectURL(blob);

  return imageUrl;
}
