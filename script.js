body {
    font-family: 'Kanit', sans-serif;
    background-color: #f0f8ff; /* สีฟ้าอ่อน */
    margin: 0;
    padding: 0;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.spinner-box {
    position: relative;
}

.spinner-image {
    width: 150px;
    height: 150px;
    cursor: pointer;
    transition: transform 0.5s ease-in-out;
}

.popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.popup-content {
    text-align: center;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}

#resultText {
    font-size: 18px;
}

#usernameForm {
    margin-top: 20px;
}

#username {
    padding: 10px;
    margin-right: 10px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3;
}
