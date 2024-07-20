body {
    font-family: 'Roboto', sans-serif;
    background: #f5f5f5;
    color: #333;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    background: #4CAF50;
    color: white;
    padding: 1rem 0;
    text-align: center;
}

footer {
    background: #4CAF50;
    color: white;
    padding: 1rem 0;
    text-align: center;
    margin-top: auto;
}

main {
    padding: 2rem;
    flex: 1;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
}

form label {
    margin-bottom: 0.5rem;
}

form input {
    padding: 0.5rem;
    margin-bottom: 1rem;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

form button {
    padding: 0.5rem 2rem;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
}

form button:hover {
    background: #45a049;
}

#results {
    display: flex;
    justify-content: space-around;
}

.result-column {
    width: 30%;
    background: white;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
}

.result-column h2 {
    text-align: center;
}

.result-column ul {
    list-style: none;
    padding: 0;
}

.result-column li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #ccc;
}
