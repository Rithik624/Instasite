document.getElementById('usernameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    
    // Clear previous results
    document.getElementById('followersList').innerHTML = '';
    document.getElementById('followingList').innerHTML = '';
    document.getElementById('notFollowingBackList').innerHTML = '';
    
    // Example data to demonstrate the UI
    const followers = ['user1', 'user2', 'user3'];
    const following = ['user2', 'user3', 'user4'];
    
    // Populate the lists
    followers.forEach(follower => {
        const li = document.createElement('li');
        li.textContent = follower;
        document.getElementById('followersList').appendChild(li);
    });
    
    following.forEach(follow => {
        const li = document.createElement('li');
        li.textContent = follow;
        document.getElementById('followingList').appendChild(li);
    });
    
    const notFollowingBack = following.filter(user => !followers.includes(user));
    notFollowingBack.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user;
        document.getElementById('notFollowingBackList').appendChild(li);
    });
});
