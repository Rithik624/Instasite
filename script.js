document.getElementById('usernameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    
    if (username) {
        fetchInstagramData(username);
    }
});

function fetchInstagramData(username) {
    // Placeholder function to simulate fetching data from Instagram
    console.log(`Fetching data for username: ${username}`);

    // Example data (replace this with actual Instagram API calls)
    const followers = ['follower1', 'follower2', 'follower3'];
    const following = ['following1', 'following2', 'following3', 'follower1'];

    displayData(followers, following);
}

function displayData(followers, following) {
    const followersContainer = document.getElementById('followers');
    const followingContainer = document.getElementById('following');
    const notMutualContainer = document.getElementById('not-mutual');

    followersContainer.innerHTML = '<h2>Followers</h2>';
    followingContainer.innerHTML = '<h2>Following</h2>';
    notMutualContainer.innerHTML = '<h2>Not Mutual</h2>';

    followers.forEach(follower => {
        followersContainer.innerHTML += `<p>${follower}</p>`;
    });

    following.forEach(followingUser => {
        followingContainer.innerHTML += `<p>${followingUser}</p>`;
    });

    const notMutual = following.filter(user => !followers.includes(user));
    notMutual.forEach(user => {
        notMutualContainer.innerHTML += `<p>${user}</p>`;
    });
}
