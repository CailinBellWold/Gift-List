const addButtonHandler = async (event) => {
  event.target.getAttribute('add-gift-btn').onclick = function () {
    document.location.replace('/newGift');
  }
};

//Still working on this. Need to pass ID to update page.
const updateButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    // const response = await fetch(`/api/gifts/${id}`, {
    //   method: 'PUT',
    // });

    if (response.ok) {
      document.location.replace(`/updateGift/${id}`);
    } else {
      alert('Failed to update gift');
    }
  }
};

  const deleteButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/gifts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/userlanding');
      } else {
        alert('Failed to delete project');
      }
    }
  };

  document
    .querySelector('.add-gift-btn')
    .addEventListener('add', addButtonHandler);
  
  document
    .querySelector('.gift-list')
    .addEventListener('update', updateButtonHandler);

  document
    .querySelector('.gift-list')
    .addEventListener('delete', deleteButtonHandler);