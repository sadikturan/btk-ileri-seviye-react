export default async function Home() {
  const res = await fetch("http://localhost:3000/api");
  const data = await res.json();

  return (
    <div>
      <h1 className="text-xl text-yellow-500 font-semibold">Blogs</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
