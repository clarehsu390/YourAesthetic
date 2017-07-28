export const createFollow = (follow) => (
  $.ajax({
    method: 'POST',
    url: `api/follow`,
    data: { follow }
  })
);

export const destroyFollow = (follow) => (
  $.ajax({
    method: 'DELETE',
    url: `api/follow`,
    data: { follow }
  })
);
