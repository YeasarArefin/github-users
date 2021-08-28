const username = () => {

    const userInput = document.getElementById('user-input');
    const userInputValue = userInput.value;
    const url = `https://api.github.com/users/${userInputValue}`;

    fetch(url)
        .then(respons => respons.json())
        .then(data => displayData(data));

    userInput.value = '';

    const displayData = user => {

        // console.log(user.name);

        if (user.name == undefined) {

            const userDiv = document.getElementById('show-user');
            const div = document.createElement('div');

            userDiv.innerHTML = '';

            div.innerHTML = `<p class="text-center text-danger">Results Not Found</p>`;
            userDiv.appendChild(div);

        }
        else {

            const userDiv = document.getElementById('show-user');
            userDiv.innerHTML = '';

            const div = document.createElement('div');
            div.innerHTML = `
            <div class="card mx-auto" style="width: 18rem;">
                <img src="${user.avatar_url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="card-text">${user.bio}</p>
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary">Profile</a>
                </div>
            </div>`;

            userDiv.appendChild(div);

        }

    };

};

