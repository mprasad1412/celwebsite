const main_video = document.querySelector('.main-video iframe');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Alphabets',
        'name': 'https://drive.google.com/file/d/1JyOfl9dRG5zl9T1t4D9Lr3O2fp9rymnq/preview',
        'duration': '4:35',
    },
    {
        'id': 'a2',
        'title': 'Basic Sentence Structure',
        'name': 'https://drive.google.com/file/d/1CFcqu5HrQhnAKQmi40s9pdBIF1DCYj78/preview',
        'duration': '4:15',
    },
    {
        'id': 'a3',
        'title': 'Greetings',
        'name': 'https://drive.google.com/file/d/1mJM5nyEAkBwiSJnNDi0QZg9N9vJ0DFh3/preview',
        'duration': '3:35',
    },
    {
        'id': 'a4',
        'title': 'Food',
        'name': 'https://drive.google.com/file/d/1OBMH97W0103eK9AFSuWDS5rS5VDt8wGT/preview',
        'duration': '1:44',
    },

    {
        'id': 'a5',
        'title': 'Family',
        'name': 'https://drive.google.com/file/d/15SMaABX9fiDLCYuj6g6a7ya_DNCkW3oo/preview',
        'duration': '1:44',
    },
    {
        'id': 'a6',
        'title': 'Numbers',
        'name': 'https://drive.google.com/file/d/19dGxAPFIBMSbgkx6I3oEecXkOMtC-O-T/preview',
        'duration': '3:17',
    },
    {
        'id': 'a7',
        'title': 'Time',
        'name': 'https://drive.google.com/file/d/1EP_jzCi_PH5DPTu-RR9TNXkLW85eSuKs/preview',
        'duration': '3:59',
    },
    {
        'id': 'a8',
        'title': 'Days',
        'name': 'https://drive.google.com/file/d/1EbrtwRtY1GtQkhkKyAOk7rb8gVOGaw9F/preview',
        'duration': '2:02',
    },

    {
        'id': 'a9',
        'title': 'Months',
        'name': 'https://drive.google.com/file/d/19sQVGp3MQRXgdrighM8xlGeMc0aNGOI0/preview',
        'duration': '2:36',
    },
    {
        'id': 'a10',
        'title': 'Seasons',
        'name': 'https://drive.google.com/file/d/1CcXFiALTjPQq6qCF4fnPyxDAthGsW0za/preview',
        'duration': '4:35',
    },
    {
        'id': 'a11',
        'title': 'Pronouns',
        'name': 'https://drive.google.com/file/d/1nicRzhRlcuLX1zJTq1OGn8a1YCvHs9ef/preview',
        'duration': '5:29',
    },
    {
        'id': 'a12',
        'title': 'Tenses',
        'name': 'https://drive.google.com/file/d/1d3Fjdba5f2WHLTDhl3BpuzQqaG56IvWj/preview',
        'duration': '5:05',
    },
    {
        'id': 'a13',
        'title': 'Conversations',
        'name': 'https://drive.google.com/file/d/1gOlUCvqIYimUmapQlHTA2D5REak9ckzR/preview',
        'duration': '3:02',
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
