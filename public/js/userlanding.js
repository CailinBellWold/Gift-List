const addButtonHandler = async (event) => {
  document.location.replace('/newGift');
};

const updateButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    document.location.replace(`/api/gifts/${id}`);
  } else {
    alert('Update button did not have a data-id');
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
  } else {
    alert('Delete button did not have a data-id');
  }
};

document
  .getElementById('btn-add-gift')
  .addEventListener('click', addButtonHandler);

document
  .querySelectorAll('.edit-gift-btn')
  .forEach(btn => btn.addEventListener('click', updateButtonHandler));

document
  .querySelectorAll('.delete-gift-btn')
  .forEach(btn => btn.addEventListener('click', deleteButtonHandler));
