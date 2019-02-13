const coinDesk  = axios.create({
    baseURL: 'http://api.coindesk.com/v1/',
});

coinDesk.get('bpi/historical/close.json')
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log(err);
    });
