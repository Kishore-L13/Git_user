import React,{useState} from "react";
const Searchbar = ()=>{
    const [input, setInput] = useState("");
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
    const fetchUser = async () => {
  try {
    setLoading(true);
    setError(null);

    const res = await fetch(`https://api.github.com/users/${input}`);

    if (!res.ok) throw new Error("User not found");

    const data = await res.json();
    setUser(data);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};
    return(
        <>
    <input value={input} onChange={(e)=>setInput(e.target.value)} />
    <button onClick={fetchUser}>Search</button>
        {loading && <p>Loading...</p>}
{error && <p>{error}</p>}

{user && (
  <div>
    <img src={user.avatar_url} width="100" />
    <h2>{user.name}</h2>
    <p>Repos: {user.public_repos}</p>
  </div>
)}
   
        </>
    )
}
export default Searchbar