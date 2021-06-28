const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path=require('path')
const app = express();
const port = 8000;
const mongoose=require('mongoose')
app.use(bodyParser.json());
app.use(cors());
const app_path = __dirname + '/src/App.vue';
app.use(express.static(app_path));
console.log(app_path)

app.use(express.urlencoded({ extended: true }));
process.setMaxListeners(0)
// app.get('/', (req, res) => {
//   res.send(`Hi! Server is listening on port ${port}`)
// });
app.get('/', function (req,res) {
  res.sendFile(app_path);
});

let events = 
[
  {
    id: 1,
    name: 'Charity Ball',
    category: 'Fundraising',
    description: 'Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.',
    featuredImage: 'https://placekitten.com/500/500',
    images: [
      'https://placekitten.com/500/500',
      'https://placekitten.com/500/500',
      'https://placekitten.com/500/500',
    ],
    location: '1234 Fancy Ave',
    date: '12-25-2019',
    time: '11:30'
  },
  {
    id: 2,
    name: 'Rescue Center Goods Drive',
    category: 'Adoptions',
    description: 'Come to our donation drive to help us replenish our stock of pet food, toys, bedding, etc. We will have live bands, games, food trucks, and much more.',
    featuredImage: 'https://placekitten.com/500/500',
    images: [
      'https://placekitten.com/500/500'
    ],
    location: '1234 Dog Alley',
    date: '11-21-2019',
    time: '12:00'
  }
];
app.get('/events', (req, res) => {
  res.send(events);
});
// const EventSchema=mongoose.Schema({
//     title:{
//         type:String,
//         required: true
//     },
//      description:{
//         type:String,
//         required: true
//     },
//     date:{
//         type: Date,
//         required:true
//     }
// })
// mongoose.model('Events',EventSchema)
// mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser: true,useUnifiedTopology: true},()=>console.log('Connected to DB'))

// listen on the port
app.listen(port,()=>console.log('Connected to server'));
