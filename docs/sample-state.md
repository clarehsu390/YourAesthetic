```js
{
  currentUser: {
    id: 1,
    username: "clare",
    image_url:
  },
  errors: [],

  userProfile: {
    1: {
      id: 1,
      username: "clare",
      boards: [1, 2],
      followers: [2],
      following: [2],
      savedPins: [],
      followed: boolean

    }
    2: {
      ...
    }
  },

  pins: {
      1: {
        id: 2,
        title: "Skincare",
        url: "http://www.newskincare.com",
        image_url: "http://www.newskincare.com",
        description: "New ways to take care of your skin"
        user_id: 1
      }
    errors: []
  },

  boards: {
    1: {
      id: 1,
      name: "Self-Care",
      description: "Treat yourself!",
      pins: [1],
      user_id: 1
    }
    errors: []
  }
}
