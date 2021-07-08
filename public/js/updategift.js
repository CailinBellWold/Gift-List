const newFormHandler = async (event) => {
  event.preventDefault();
  const url = window.location.href;
  // https://stackoverflow.com/questions/3730359/get-id-from-url-with-jquery
  const id = url.substring(url.lastIndexOf("/") + 1);
  const recipientName = document.getElementById("giftGiftee").value.trim();
  const description = document.getElementById("giftDescription").value.trim();
  const purchased = document.getElementById("giftPurchased").checked;

  if (recipientName && description) {
    const response = await fetch(`/api/gifts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ recipientName, description, purchased }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/userlanding");
    } else {
      alert("Failed to update gift");
    }
  }
};

const cancelButtonHandler = async () => {
  document.location.replace('/userlanding');
}

document
  .querySelector('.updateGiftForm')
  .addEventListener('submit', cancelButtonHandler);

document
  .querySelector(".updateGiftForm")
  .addEventListener("submit", newFormHandler);
