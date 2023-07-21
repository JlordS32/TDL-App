const test = await fetch('https://pacificds.servicedesk.comodo.com', {
  method: 'GET',
  headers: {
    'x-auth-type': '1',
    'x-auth-token': 'E8C18685625A902EC4C16B89AC19D6D5'
  }
}).then(res => {
  return res;
})

console.log(test);