const express = require('express');
const cors = require('cors');
const {default: axios} = require('axios');
const PORT = process.env.PORT || /*your Port */;

const app = express();
app.use(express.json());
app.use(cors({origin:true}));
  
app.post('/authenticate', async (req, res) => {
    const {username} = req.body;
    try{
        const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username : username, secret : username,first_name : username},
        { headers : {'Private-Key': '//Your project key'} }
        );
        return res.status(r.status).json(r.data);
    }catch(e){
        return res.status(400).json({message:e.message});
    }
}); 
   

app.listen(PORT,() => console.log(`server started ${PORT}`));
