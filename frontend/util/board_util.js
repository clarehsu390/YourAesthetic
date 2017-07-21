export const getUsersBoards = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/boards`
  })
);

export const getSingleBoard = (userId, id) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/boards/${id}`
  })
);
