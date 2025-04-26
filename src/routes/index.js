import { Router } from "express";

import { mysqlConnection, pgClient } from "../db.js";

import {
  renderAboutPage,
  renderIndexPage,
  renderNewEntryPage,
  createNewEntry,
  deleteBook,
} from "../controllers/index.controller.js";

const router = Router();

router.get("/", renderIndexPage);

router.get("/about", renderAboutPage);

router.get("/new-entry", renderNewEntryPage);

router.post("/new-entry", createNewEntry);

router.get("/delete/:id", deleteBook);

router.get("/mysql", async (req, res) => {
  try {
    const [rows] = await mysqlConnection.execute("SELECT NOW() AS now");
    res.json({ success: true, mysql_time: rows[0].now });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Error en MySQL" });
  }
});

router.get("/postgres", async (req, res) => {
  try {
    const result = await pgClient.query("SELECT NOW()");
    res.json({ success: true, postgres_time: result.rows[0].now });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Error en PostgreSQL" });
  }
});

export default router;
