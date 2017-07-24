export const addPinToBoard = (pin, board) => {
  $.ajax({method: 'POST',
  url: `api/pinnings`,
  data: {pin, board}
});
};

export const removePinFromBoard = (id) => {
  $.ajax({
    method: 'DELETE',
    url: `api/pinnings/${id}`,
  });
};
