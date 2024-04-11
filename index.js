
// Функция для получения данных о пользователе
function getUserData(userID) {
    return fetch('https://api.example.com/users/' + userID)
        .then(response => {
            if (!response.ok) {
                throw new Error('Пользователь с указанным ID не найден');
            }
            return response.json();
        });
}

// Функция для отправки данных о пользователе на сервер
function saveUserData(userData) {
    return fetch('https://api.example.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при сохранении данных пользователя');
            }
        });
}

// Пример использования функции
const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

saveUserData(user)
    .then(() => {
        console.log('Данные о пользователе успешно сохранены');
    })
    .catch(error => {
        console.log(error.message);
    });