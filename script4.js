const main_video = document.querySelector('.main-video iframe');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Kids : Meet the Numbers and Bars',
        'name': 'https://drive.google.com/file/d/1CQNi_AfPOnOM0mox6BPqX3L4p1XXP6g1/preview',
        'duration': '4:28',
    },
    {
        'id': 'a2',
        'title': 'Parents : Meet the Numbers and Bars',
        'name': 'https://drive.google.com/file/d/10XU3iY7Ao1Qr71ozjGYxv7iLJlgiiKps/preview',
        'duration': '4:16',
    },
    {
        'id': 'a3',
        'title': 'Kids : Adding with Numbers and Bars',
        'name': 'https://drive.google.com/file/d/11w5FESiN6VgMMcL982ArRjrGIDu68cwR/preview',
        'duration': '6:13',
    },
    {
        'id': 'a4',
        'title': 'Parents : Adding Drills Part 1',
        'name': 'https://drive.google.com/file/d/1uSB92v8ExP-QV12hYdWeV_EFihOypaqz/preview',
        'duration': '3:49',
    },
    {
        'id': 'a5',
        'title': 'Parents : Adding Drills Part 2',
        'name': 'https://drive.google.com/file/d/17NRXFBBULy6Ci3Qhz-J6lh8iBLnQM-Lk/preview',
        'duration': '4:25',
    },
    {
        'id': 'a6',
        'title': 'Parents : Adding Drills Part 3',
        'name': 'https://drive.google.com/file/d/1PTSQtY6GEiCp8emqAOcPl759QXzn6QpG/preview',
        'duration': '6:00',
    },
    {
        'id': 'a7',
        'title': 'Parents : Adding Drills Part 4',
        'name': 'https://drive.google.com/file/d/1vIjL9Wm4xgn8Tt-tBdBqinfhM1QXdn5A/preview',
        'duration': '4:06',
    },
    {
        'id': 'a8',
        'title': 'Parents : Adding Drills Part 5',
        'name': 'https://drive.google.com/file/d/1SO1pI-DouITq82gH4HArPqOFs8ShitRZ/preview',
        'duration': '3:08',
    },

    {
        'id': 'a9',
        'title': 'Kids : Subtracting with Numbers and Bars',
        'name': 'https://drive.google.com/file/d/1bbVAtNm7BHIOfVuaAe5pGSyDtiq-l6iz/preview',
        'duration': '5:16',
    },
    {
        'id': 'a10',
        'title': 'Parents : Subtracting Drills',
        'name': 'https://drive.google.com/file/d/16a4zdi2-7a9Lnzj2t7jKLx-nkzQ5pV7Y/preview',
        'duration': '4:47',
    },
    {
        'id': 'a11',
        'title': 'Kids : Multiplying with Numbers and Bars',
        'name': 'https://drive.google.com/file/d/1GdkS3JQUulsFPpZDw7SrmernXNe-fmg2/preview',
        'duration': '6:10',
    },
    {
        'id': 'a12',
        'title': 'Parents : Multiplying Drills',
        'name': 'https://drive.google.com/file/d/1gxO8goCJhiK3Ms9KiAjdN_EKSOdgqzdk/preview',
        'duration': '7:00',
    },
    {
        'id': 'a13',
        'title': 'Kids : Dividing with Numbers and Bars',
        'name': 'https://drive.google.com/file/d/1bvx5Dq0osYbBlkDMJu2_6gUPhvMiKVCu/preview',
        'duration': '4:43',
    },
    {
        'id': 'a14',
        'title': 'Kids : Dividing Skills',
        'name': 'https://drive.google.com/file/d/1M8frdWKzYmx7BlPk6XaSWmicxHE5-Dcp/preview',
        'duration': '7:18',
    },
    {
        'id': 'a15',
        'title': 'Parents : Dividing Drills Part 1',
        'name': 'https://drive.google.com/file/d/1H86CxIj-w7ya49blllfBORGyhODSDI2d/preview',
        'duration': '5:36',
    },
    {
        'id': 'a16',
        'title': 'Parents : Dividing Drills Part 2',
        'name': 'https://drive.google.com/file/d/1Qo3me1Ocp9KDRctCNNo07oBw8QaEZDmK/preview',
        'duration': '5:32',
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
