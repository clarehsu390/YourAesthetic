export const getUsersBoards = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/boards`
  })
);

export const getSingleBoard = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/boards/${id}`
  })
);

export const createBoard = (board, userId) => (
  $.ajax({
    method: 'POST',
    url: `/api/boards`,
    data: {board}

  })
);
