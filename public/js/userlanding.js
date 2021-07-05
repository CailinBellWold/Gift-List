const addButtonHandler = async (event) => {
  document.location.replace('/newGift');
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
  .getElementById('btn-add-gift')
  .addEventListener('click', addButtonHandler);

document
  .querySelector('.gift-list')
  .addEventListener('update', updateButtonHandler);

document
  .querySelector('#deleteBtn')
  .addEventListener('click', deleteButtonHandler);
