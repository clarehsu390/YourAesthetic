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

export const createBoard = (board, userId) => (
  $.ajax({
    method: 'POST',
    url: `/api/boards`,
    data: {board}

  })
);

export const destroyBoard = (boardId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/boards/${boardId}`,
  })
);
