import dotenv from "dotenv";
dotenv.config();


import app from './app.js';
import { connectDB } from './db.js';

console.log('MONGO URI =>', process.env.MONGO_URI);

connectDB();

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port', process.env.PORT || 3000);
});
