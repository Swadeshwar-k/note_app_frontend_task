const db = require("../config/db");

exports.getTasks = (req, res) => {
  db.query(
    "SELECT * FROM tasks WHERE user_id = ?",
    [req.user.id], 

    (err, results) => {
      if (err) return res.status(500).json({ message: "Server error" });
      res.json(results);
    }
  );
};

exports.createTask = (req, res) => {
  const { title, description } = req.body;

  if (!title) {

    return res.status(400).json({ message: "Title is required" });
  }

  db.query(
    
    "INSERT INTO tasks (user_id, title, description) VALUES (?, ?, ?)",
    [req.user.id, title, description],
    (err) => {
      if (err) return res.status(500).json({ message: "Server error" });
      res.status(201).json({ message: "Task created" });
    }
  );
};


exports.updateTask = (req, res) => {
  const { title, description, status } = req.body;

  db.query(
    "UPDATE tasks SET title=?, description=?, status=? WHERE id=? AND user_id=?",
    [title, description, status, req.params.id, req.user.id],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Server error" });
      res.json({ message: "Task updated" });
    }
  );
};


exports.deleteTask = (req, res) => {
  db.query(
    "DELETE FROM tasks WHERE id=? AND user_id=?",
    [req.params.id, req.user.id],
    (err) => {
      if (err) return res.status(500).json({ message: "Server error" });
      res.json({ message: "Task deleted" });
    }
  );
};
