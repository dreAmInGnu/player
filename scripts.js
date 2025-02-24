document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audio-player');
    const playlist = document.getElementById('playlist');

    const tracks = [
        {
            title: 'Song 1',
            src: 'songs/song1.mp3'
        },
        {
            title: 'Song 2',
            src: 'songs/song2.mp3'
        },
        {
            title: 'Song 3',
            src: 'songs/song3.mp3'
        }
    ];

    tracks.forEach((track, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = track.title;
        listItem.dataset.src = track.src;
        listItem.addEventListener('click', () => {
            audioPlayer.src = track.src;
            audioPlayer.play();
            highlightPlayingTrack(index);
        });
        playlist.appendChild(listItem);
    });

    function highlightPlayingTrack(index) {
        const items = playlist.getElementsByTagName('li');
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('playing');
        }
        items[index].classList.add('playing');
    }
});