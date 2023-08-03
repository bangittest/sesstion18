// Lấy dữ liệu từ Local Storage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Cập nhật dữ liệu vào Local Storage
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Thêm một todo mới vào danh sách
function addTodoItem(title) {
    todos.push({ title, completed: false });
    saveTodos();
}

// Cập nhật một todo trong danh sách
function updateTodoItem(index, title, completed) {
    todos[index] = { title, completed };
    saveTodos();
}

// Xóa một todo khỏi danh sách
function deleteTodoItem(index) {
    todos.splice(index, 1);
    saveTodos();
}

// Hiển thi danh sách các todo
function renderTodoList() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.classList.add("todo-item");
        if (todo.completed) {
            li.classList.add("completed");
        }
        const span = document.createElement("span");
        span.innerText = todo.title;
        span.addEventListener("click", () => {
            li.classList.toggle("completed");
            updateTodoItem(index, todo.title, !todo.completed);
        });
        li.appendChild(span);
        const editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.innerText = "Edit";
        editButton.addEventListener("click", () => {
            const newTitle = prompt("Enter new title:", todo.title);
            if (newTitle !== null && newTitle !== "") {
                span.innerText = newTitle;
                updateTodoItem(index, newTitle, todo.completed);
            }
        });
        li.appendChild(editButton);
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", () => {
            li.remove();
            deleteTodoItem(index);
        });
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    });
}

// Xử lý sự kiện khi người dùng thêm một todo mới
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = todoInput.value.trim();
    if (title !== "") {
        addTodoItem(title);
        renderTodoList();
        todoInput.value = "";
    }
});

// Hiển thị danh sách todo lần đầu tiên
renderTodoList();