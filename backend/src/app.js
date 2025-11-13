import express from "express";
import cors from "cors";
import logisticsRoutes from "./routes/logistics.routes.js";
import accountingRoutes from "./routes/accounting.routes.js";
import financeRoutes from "./routes/finance.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/logistics", logisticsRoutes);
app.use("/api/accounting", accountingRoutes);
app.use("/api/finance", financeRoutes);

export default app;
