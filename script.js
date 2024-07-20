function fetchData() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter a username.');
        return;
    }

    // Dummy data for demonstration purposes
    const followers = ['user1', 'user2', 'user3', 'user4'];
    const following = ['user2', 'user3', 'user5'];

    const nonMutuals = followers.filter(user => !following.includes(user));
    
    // Populate followers list
    const followersList = document.getElementById('followers-list');
    followersList.innerHTML = '';
    followers.forEach(follower => {
        const li = document.createElement('li');
        li.textContent = follower;
        followersList.appendChild(li);
    });

    // Populate following list
    const followingList = document.getElementById('following-list');
    followingList.innerHTML = '';
    following.forEach(follow => {
        const li = document.createElement('li');
        li.textContent = follow;
        followingList.appendChild(li);
    });

    // Populate non-mutuals list
    const nonMutualsList = document.getElementById('non-mutuals-list');
    nonMutualsList.innerHTML = '';
    nonMutuals.forEach(nonMutual => {
        const li = document.createElement('li');
        li.textContent = nonMutual;
        nonMutualsList.appendChild(li);
    });
}
