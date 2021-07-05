const newFormHandler = async (event) => {
  event.preventDefault();
  console.log("first stop");
  //DANNY TO-DO: Update/clean ID here and on newGift handlebars
  const recipientName = document.querySelector("#giftGiftee").value.trim();
  const description = document.querySelector("#giftDescription").value.trim();
  //   keep these two just in case we decide to include the budget and notes
  //   const budget = document.querySelector("#giftBudget").value.trim();
  //   const notes = document.querySelector("#giftNotes").value.trim();
  console.log("second stop");

  if (recipientName && description) {
    console.log("Third stop");
    const response = await fetch(`/api/gifts`, {
      method: "PUT",
      body: JSON.stringify({ recipientName, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("fourth stop");

    if (response.ok) {
      console.log("fifth stop");
      document.location.replace("/userlanding");
    } else {
      alert("Failed to update gift");
    }
  }

  const response = await fetch(`/api/gifts/${id}`, {
    method: "PUT",
  });

  if (response.ok) {
    console.log("final stop");
    document.location.replace("/userlanding");
  } else {
    alert("Failed to delete project");
  }
};

document
  .querySelector(".updateGiftForm")
  .addEventListener("submit", newFormHandler);
