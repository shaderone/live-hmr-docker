import express from "express";
import cors from "cors";
const port = 3100

var app = express();
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your React app's origin
    optionsSuccessStatus: 200 // For legacy browser support
};
app.use(cors(corsOptions)); // Use the cors middleware with options

app.get('/', (req, res) => {
    res.json({ message: 'is it ready ?' });
})

app.listen(port, () => {
    console.log("listening on port " + port)
})