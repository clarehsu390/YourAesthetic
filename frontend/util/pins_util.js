export const getAllPins = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pins'
  })
);

export const getPin = (pin) => (
  $.ajax({
    method: 'GET',
    url: `/api/pins/${pin.id}`
  })
);
