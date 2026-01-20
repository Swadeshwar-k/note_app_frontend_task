import { useEffect, useState, useContext } from "react";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
import "../styles/dashboard.css";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const [search, setSearch] = useState("");


  const fetchNotes = async () => {
    const res = await api.get("/tasks");
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  
  const addNote = async (e) => {
    e.preventDefault();
    if (!title || !description) return;

    await api.post("/tasks", {
      title,
      description,
    });

    setTitle("");
    setDescription("");
    fetchNotes();
  };


  const updateNote = async (id) => {
    await api.put(`/tasks/${id}`, {
      title: editTitle,
      description: editDescription,
    });

    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
    fetchNotes();
  };

  
  const deleteNote = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchNotes();
  };

  return (
    <>
    <nav className="navbar">
            <h2 className="logo">Notes App</h2>
          </nav>
    
    <div className="dashboard">
      
      <header className="dashboard-header">
        <h2>Welcome, {user?.name}</h2>
        <button className="primary-btn" onClick={logout}>Logout</button>
      </header>

   
      <form className="note-form" onSubmit={addNote}>
        <input
          type="text"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Note description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="primary-btn">Add Note</button>
      </form>




      <ul className="note-list">
        {notes
          .filter(
            (note) =>
              note.title.toLowerCase().includes(search.toLowerCase()) ||
              note.description.toLowerCase().includes(search.toLowerCase())
          )
          .map((note) => (
            <li key={note.id} className="note-card">
              {editingId === note.id ? (
                <>
                  <input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <textarea
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                  />
                  <button onClick={() => updateNote(note.id)}>💾 Save</button>
                </>
              ) : (
                <>
                  <h4>{note.title}</h4>
                  <p>{note.description}</p>
                  <div className="note-actions">
                    <button className="primary-btn"
                      onClick={() => {
                        setEditingId(note.id);
                        setEditTitle(note.title);
                        setEditDescription(note.description);
                      }}
                    >
                      Edit
                    </button>
                    <button className="primary-btn" onClick={() => deleteNote(note.id)}>Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
      </ul>
    </div>
    </>
  );
};

export default Dashboard;
