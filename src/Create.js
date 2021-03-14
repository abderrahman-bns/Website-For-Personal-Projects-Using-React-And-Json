import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [link, setLink] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = { title, body, link };

    fetch('http://localhost:8000/projects/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project)
    }).then(() => {
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Project title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Project body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Project link:</label>
        <input 
          type="text" 
          required 
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button>Add Project</button>
      </form>
    </div>
  );
}
 
export default Create;