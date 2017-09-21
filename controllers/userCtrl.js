var users = [
    {
      name: 'Preston McNeil',
      password: 'password1',
      friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
      name: 'Ryan Rasmussen',
      password: '$akgfl#',
      friends: ['Lindsey Mayer']
    },
    {
      name: 'Terri Ruff',
      password: 'hunter2',
      friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
      name: 'Lindsey Mayer',
      password: '777mittens777',
      friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
  ];

  const login = (req, res, next) => {
    console.log(req.body.name, req.body.password)
    if(req.body.name && req.body.password){  
    for(var i = 0; i < users.length; i++){
        if(users[i].name === req.body.name && users[i].password === req.body.password){
            req.session.currentUser = users[i];
            
            console.log("AHHHHHH")
            return res.json({userFound: true});
        }
    }  
}
  else{
    return res.send({userFound: false})}
  }
  
  module.exports = {
      users,
      login
      //sorry I didn't want to make this a method :-(
  };