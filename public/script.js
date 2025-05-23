async function fetchUsers() {
    const res = await fetch("/api/users");
    const users = await res.json();
    const list = document.getElementById("userList");
    list.innerHTML = "";
    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (ID: ${user.id})`;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Löschen";
        delBtn.onclick = () => deleteUser(user.id);

        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

async function addUser() {
    const input = document.getElementById("input");
    const name = input.value.trim();
    if (!name) return alert("Bitte einen Namen eingeben");

    await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name })
    });

    input.value = "";
    fetchUsers();
}

async function deleteUser(id) {
    const res = await fetch("/api/users/" + id, { method: "DELETE" });
    if (!res.ok) {
        alert("Fehler beim Löschen");
        return;
    }
    fetchUsers();
}

document.getElementById("addBtn").addEventListener("click", addUser);
document.getElementById("input").addEventListener("keyup", e => {
    if (e.key === "Enter") addUser();
});

fetchUsers();
