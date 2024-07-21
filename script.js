async function fetchData() {
    const username = document.getElementById('username').value;
    if (!username) {
        alert('Please enter a username.');
        return;
    }

    const accessToken = 'IGQWRNMEgyQVRyZA0psZA2ljSzhWQ2hHcW9MbGRCblg0ZA3lzNW9HeUlhdWJSeFhZASF9SNURFOEpXWkpsTXBQT3JRQ1FxcW8tdlRYTFAwRjlXMGNXZAHdNb243S2tROTZAEdl84S0lnTVEwelRCVW00MGo5bHRYc3JNLWtwdG5LUGRoeTAwc1EZD';
    const userId = '7975999129146870'; // Replace with the actual user ID

    try {
        // Fetch followers
        const followersResponse = await fetch(`https://graph.instagram.com/${userId}/followers?access_token=${accessToken}`);
        const followersData = await followersResponse.json();

        // Fetch following (Note: This endpoint might need adjustments or permissions)
        const followingResponse = await fetch(`https://graph.instagram.com/${userId}/following?access_token=${accessToken}`);
        const followingData = await followingResponse.json();

        // Process and display followers
        const followersList = document.getElementById('followers-list');
        followersList.innerHTML = '';
        followersData.data.forEach(follower => {
            const li = document.createElement('li');
            li.textContent = follower.username;
            followersList.appendChild(li);
        });

        // Process and display following
        const followingList = document.getElementById('following-list');
        followingList.innerHTML = '';
        followingData.data.forEach(following => {
            const li = document.createElement('li');
            li.textContent = following.username;
            followingList.appendChild(li);
        });

        // Compute and display non-mutuals
        const nonMutuals = followersData.data
            .filter(follower => !followingData.data.some(following => following.username === follower.username))
            .map(f => f.username);

        const nonMutualsList = document.getElementById('non-mutuals-list');
        nonMutualsList.innerHTML = '';
        nonMutuals.forEach(nonMutual => {
            const li = document.createElement('li');
            li.textContent = nonMutual;
            nonMutualsList.appendChild(li);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch data. Please try again.');
    }
}
