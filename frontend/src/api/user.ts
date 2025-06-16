export async function getUsers() {
    const res = await fetch('http://localhost:3000/users');
    return res.json();
}