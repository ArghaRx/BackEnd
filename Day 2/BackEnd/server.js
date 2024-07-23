const express = require ('express');

const app = express();
const port = process.env.PORT || 3008;

// app.get('/', (req, res) => {
//     res.send("server is ready");
// });

// Endpoint to get jokes
app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'This is title',
            description: 'This is joke',
        },
        {
            id: 2,
            title: 'This is also joke',
            description: 'This is another joke',
        },
        {
            id: 3,
            title: 'This is title',
            description: 'This is joke',
        },
        {
            id: 4,
            title: 'This is also joke',
            description: 'This is another joke',
        },
    ];
    res.send(jokes);
});


app.listen(port, () =>{
console.log(`Server run at http://localhost:${port}/jokes`);
});


