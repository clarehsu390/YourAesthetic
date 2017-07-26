export const addPinning = (pinning) => (
  $.ajax({
  method: 'POST',
  url: 'api/pinnings',
  data: { pinning }
})
);

export const removePinning = (pinning) => (
  $.ajax({
    method: 'DELETE',
    url: `api/pinnings/0`,
    data: { pinning }
  })
);
