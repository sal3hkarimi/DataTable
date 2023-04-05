const urlAddress = 'https://api.jsonbin.io/v3/b/642d9b99c0e7653a059e5b2d'
const keyApi = '$2b$10$ZZhwsc2vyvxH10jGLCjUDeI.DnbiMG4nEA0ZTHq0g7lQQ6BxpUMI6'

const config = {
    headers: {
      "Content-Type": "application/json",
      "X-ACCESS-KEY": keyApi,
    },
  };

  axios.defaults.headers.common = {
  };

// get
axios({
    method: 'get',
    url: urlAddress,
}).then(response => response.data)
    .then(data => console.log(data))

// create
axios({
    method: 'post',
    url: urlAddress,
    data: {
        "name": "Kurtis Weissnat",
        "email": "Telly.Hoeger@billy.biz",
    },
    headers: config.headers
}).then(response => response)
    .then(data => console.log(data))

// update
axios({
    method: 'put',
    url: urlAddress + 7,
    data: {
        "name": "Azim Karimi",
        "email": "azimkarimi315@gmail.com",
    }
}).then(response => response)
    .then(data => console.log(data))


// delete
axios({
    method: 'delete',
    url: urlAddress + 7,
}).then(response => response)
    .then(data => console.log(data))
