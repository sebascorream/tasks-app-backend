import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectDB } from "./db.js";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // Conectar a la base de datos
    await connectDB();
    console.log("MongoDB conectado correctamente");

    // Levantar servidor
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
  }
};

startServer();
