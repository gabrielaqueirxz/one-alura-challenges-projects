let friends = []
const friendName = ""

function add() {
    const input = document.getElementById("friendName")
    const name = input.value.trim()

    if (name === "") {
        alert("Por favor, insira um nome válido.")
        return
    }


    if (friends.includes(input.value)) {
        alert('Nome já adicionado!');
        return
    }

    if (name && !friends.includes(name)) {
        friends.push(name)
        input.value = ""
        updateListFriends()
    }
}

function sort() {
    if (friends.length < 4) {
        alert("Adicione pelo menos 4 amigos!");
        return;
    }

    if (friends.length > 0) {
        const indexRandom = Math.floor(Math.random() * friends.length)
        const sortFriend = friends[indexRandom]
        document.getElementById("sortResult").textContent = sortFriend
    }
}

function restart() {
    friends = []
    document.getElementById("friendName").value = ""
    document.getElementById("sortResult").textContent = ""
    updateListFriends()
}

function updateListFriends() {
    const list = document.getElementById("friendsList")
    list.textContent = friends.join(", ")
}

document.getElementById("friendName").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault()
        add()
    }
})