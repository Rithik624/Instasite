document.getElementById('submit').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter a username.');
        return;
    }

    // Placeholder function for fetching data
    fetchData(username).then(data => {
        displayData(data.followers, data.following);
    }).catch(error => {
        console.error('Error fetching data:', error);
    });
});

async function fetchData(username) {
    // Replace this URL with your actual API or scraping endpoint
    const response = await fetch(`https://api.example.com/instagram?username=${username}`);
    if (!response.ok) {
        throw new Error('Network response was not ok.');
    }
    return await response.json();
}

function displayData(followers, following) {
    const followersList = document.getElementById('followers-list');
    const followingList = document.getElementById('following-list');
    const notFollowingBackList = document.getElementById('not-following-back-list');

    // Clear previous content
    followersList.innerHTML = '';
    followingList.innerHTML = '';
    notFollowingBackList.innerHTML = '';

    // Display followers
    followers.forEach(follower => {
        const li = document.createElement('li');
        li.textContent = follower;
        followersList.appendChild(li);
    });

    // Display following
    following.forEach(follow => {
        const li = document.createElement('li');
        li.textContent = follow;
        followingList.appendChild(li);
    });

    // Calculate non-mutual followers
    const notFollowingBack = followers.filter(f => !following.includes(f));
    notFollowingBack.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user;
        notFollowingBackList.appendChild(li);
    });
}
