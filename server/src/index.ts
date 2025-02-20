import express from 'express';
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dashboardRoutes from "./routes/dashboardRoutes"
import productRoutes from "./routes/productRoutes"
import userRoutes from "./routes/userRoutes"
import expenseRoutes from "./routes/expenseRoutes"


// configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());

// Routes
app.use("/api/dashboard", dashboardRoutes)
app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)
app.use("/api/expenses", expenseRoutes)

// Server
const PORT = Number(process.env.PORT) || 8001;
app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

// Error handling middleware