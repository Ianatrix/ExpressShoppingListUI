import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "database.json");

app.use(express.json());

app.get("/api/users", (req, res) => {
    const data = fs.readFileSync(dataPath, "utf-8");
    res.json(JSON.parse(data));
});

// POST: Neuen Nutzer hinzufügen
app.post("/api/users", (req, res) => {
    const users = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    const newUser = req.body;

    // Höchste existierende ID suchen
    const maxId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;
    newUser.id = maxId + 1;

    users.push(newUser);

    fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));

    res.status(201).json(newUser);


});


app.delete("/api/users/:id", (req, res) => {
    const users = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    const id = Number(req.params.id);
    const filteredUsers = users.filter(user => user.id !== id);
    fs.writeFileSync(dataPath, JSON.stringify(filteredUsers, null, 2));
    res.json({ message: `User ${id} gelöscht` });
});



app.use("/ui", express.static("public"));

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
