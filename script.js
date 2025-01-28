const main_video = document.querySelector('.main-video iframe');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Welcome to Our HTML Course',
        'name': 'https://drive.google.com/file/d/1oBc86ON4ybItNWUNsseB6FOG1QWWeyjv/preview',
        'duration': '4:41',
    },
    {
        'id': 'a2',
        'title': 'What is Internet and HTML',
        'name': 'https://drive.google.com/file/d/1i_SoNHADQRcYJXzD3R0lj5qLyAFoTK5d/preview',
        'duration': '6:24',
    },
    {
        'id': 'a3',
        'title': 'HTML Basic Tags',
        'name': 'https://drive.google.com/file/d/1_yWWEfq-M4nyC9k9nFHTH16aRoixJbuY/preview',
        'duration': '8:34',
    },
    {
        'id': 'a4',
        'title': 'HTML Images and Attributes',
        'name': 'https://drive.google.com/file/d/1DoRqFsq-kmha1upTs_TDkmkiMKhCCjsE/preview',
        'duration': '8:25',
    },

    {
        'id': 'a5',
        'title': 'HTML Lists',
        'name': 'https://drive.google.com/file/d/1Ah4IdVsUqL5gVKhp1zVlmYRp0MvMCgiw/preview',
        'duration': '7:00',
    },
    {
        'id': 'a6',
        'title': 'HTML Lists Example',
        'name': 'https://drive.google.com/file/d/1gohhOeff5-ePRv4MVcVq5ER594F9gpkT/preview',
        'duration': '8:24',
    },
    {
        'id': 'a7',
        'title': 'HTML Block Level - Inline Elements',
        'name': 'https://drive.google.com/file/d/1_LLoLN6yvGTFCtPUUXkS3hjSxVtTU1T7/preview',
        'duration': '5:34',
    },
    {
        'id': 'a8',
        'title': 'HTML Tables',
        'name': 'https://drive.google.com/file/d/1FFUByVGV1KaqJv6_7DNJZoRDEhxI_loM/preview',
        'duration': '8:58',
    },

    {
        'id': 'a9',
        'title': 'HTML Table Example',
        'name': 'https://drive.google.com/file/d/1K9yB4tjImebbBOAAxTv89a3Gxo915WGy/preview',
        'duration': '6:03',
    },
    {
        'id': 'a10',
        'title': 'HTML Forms',
        'name': 'https://drive.google.com/file/d/1mzKRLw-mU3xg9-Tm_B9Sye92RBmSzuUm/preview',
        'duration': '12:07',
    },
    {
        'id': 'a11',
        'title': 'HTML Forms Example',
        'name': 'https://drive.google.com/file/d/1g9qXwqKUctFo9jMpBo9g5amklLgS11M-/preview',
        'duration': '7:51',
    },
    {
        'id': 'a12',
        'title': 'What you have learned in HTML',
        'name': 'https://drive.google.com/file/d/1DBtt0qk7e3aGxjdxNge0JWGc4-hLzXt2/preview',
        'duration': '1:46',
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
