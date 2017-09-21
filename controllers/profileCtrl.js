var profiles = [
    {
      name: 'Preston McNeil',
      pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
      status: 'Everything is bigger in Texas'
    },
    {
      name: 'Ryan Rasmussen',
      pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
      status: 'RR Rules'
    },
    {
      name: 'Terri Ruff',
      pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
      status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
    },
    {
      name: 'Lindsey Mayer',
      pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
      status: 'OMG MITTENS DID THE CUTEST THING TODAY'
    }
  ];

  const getFriendsProfiles = (req, res, next) => {
      const myFriends = [];
      console.log(req.session.currentUser)
      for(var i = 0; i < req.session.currentUser.friends.length; i++){
          myFriends.push(profiles.find(profile => profile.name === req.session.currentUser.friends[i]))
      }
     
      res.json({
          "currentUser": req.session.currentUser,
          "friends": myFriends
      })
  };

  module.exports = {
      profiles,
      getFriendsProfiles}