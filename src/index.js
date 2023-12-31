require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');

const usersRouters = require('./routes/users');
const garduRouters = require('./routes/gardu');
const towergroupRouters = require('./routes/towergroup');
const towerRouters = require('./routes/tower');
const dokumenRouters = require('./routes/dokumen');
const dokumentowerRouters = require('./routes/dokumentower');
const dokumentowerpostRouters = require('./routes/dokumentowerpost');
const middlewareLogRequest = require('./middleware/log');
const upload = require('./middleware/multer');

const app = express();
// Cross Origin Resource Sharing
app.use(cors(corsOptions));

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets',express.static('public/images'));

app.use('/gardu', garduRouters);
app.use('/towergroup', towergroupRouters);
app.use('/tower', towerRouters);
app.use('/dokumen', dokumenRouters);
app.use('/dokumentower', dokumentowerRouters);
app.use('/dokumentowerpost', dokumentowerpostRouters);
app.use('/users', usersRouters);
app.post('/upload', upload.single('photo'), (req, res) => {
    // console.log(req.file)
    // console.log(req.body)
    res.json({
        message: 'data berhasil disimpan'
    })
});

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Jalan di port ${PORT}`);
});

// app.use((req, res, next) => {
//     console.log('Log trjadi ke API 2');
//     next();
// })

//app.method(path, handler);
// app.use("/", (req, res, next) => {
//     res.send('Hello Word')
// });

// req = get, post, put, patch, delete dll
//response = berupa text, html <h1>hello</h1>, json


// app.get("/", (req, res) => {
//     res.send('Hello Get Method');
// });

// app.get("/html", (req, res) => {
//     res.send('<h1>Hello Get Method</h1>');
// });

// app.get("/json", (req, res) => {
//     res.json({
//         name: 'danang',
//         ttl: 'skh'
//     });
// });

// app.post("/", (req, res) => {
//     res.send('Hello Post Method');
// });


