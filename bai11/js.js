// Lấy dữ liệu từ Local Storage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Các hàm cập nhật dữ liệu vào Local Storage
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodoItem(todo) {
    todos.push(todo);
    saveTodos();
}

function updateTodoItem(index, todo) {
    todos[index] = todo;
    saveTodos();
}

function deleteTodoItem(index) {
    todos.splice(index, 1);
    saveTodos();
}

// Hàm hiển thị dữ liệu lên trang web
function displayTodoList() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = todo.title;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            deleteTodoItem(index);
            displayTodoList();
        });
        const editButton = document.createElement("button");
        // Tiếp tục đoạn mã JavaScript:

        javascript
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
            const input = document.createElement("input");
            input.type = "text";
            input.value = todo.title;
            const saveButton = document.createElement("button");
            saveButton.textContent = "Save";
            saveButton.addEventListener("click", () => {
                const newTitle = input.value.trim();
                if (newTitle !== "") {
                    updateTodoItem(index, { title: newTitle });
                    displayTodoList();
                }
            });
            const cancelButton = document.createElement("button");
            cancelButton.textContent = "Cancel";
            cancelButton.addEventListener("click", () => {
                displayTodoList();
            });
            li.innerHTML = "";
            li.appendChild(input);
            li.appendChild(saveButton);
            li.appendChild(cancelButton);
        });
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    });
}

// Hàm thêm mới một todo item
function addTodo() {
    const newTitle = document.getElementById("new-todo").value.trim();
    if (newTitle !== "") {
        addTodoItem({ title: newTitle });
        displayTodoList();
        document.getElementById("new-todo").value = "";
    }
}

// Khi trang web được load, hiển thị dữ liệu lên trang web
window.onload = () => {
    displayTodoList();
};

// Khi người dùng click vào nút "Add Task", thêm mới một todo item
document.getElementById("add-todo").addEventListener("click", (event) => {
    event.preventDefault();
    addTodo();
});

// Khi người dùng nhấn phím Enter trong input "Add new task...", thêm mới một todo item
document.getElementById("new-todo").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        addTodo();
    }
});