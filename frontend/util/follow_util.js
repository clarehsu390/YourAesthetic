export const createFollow = (userId) => (
  $.ajax({
    method: 'POST',
    url: `api/users/${userId}/follow`
  })
);

export const destroyFollow = (userId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/users/${userId}/follow`
  })
);
