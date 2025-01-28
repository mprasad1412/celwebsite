const main_video = document.querySelector('.main-video iframe');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Animal Classification: Classifying Vertebrates And Invertebrates',
        'name': 'https://drive.google.com/file/d/1Vi8TfybPMNu9o8y2b0zvjmSfYodkmkB5/preview',
        'duration': '6:51',
    },
    {
        'id': 'a2',
        'title': '3 States Of Matter For Kids (Solid, Liquid, Gas)',
        'name': 'https://drive.google.com/file/d/1vbA3wU5MYORhlRqGyQ3rn_06n2Q4ut1t/preview',
        'duration': '4:34',
    },
    {
        'id': 'a3',
        'title': 'All About Volcanoes',
        'name': 'https://drive.google.com/file/d/1tuxQ2uwGqLT4KEVH7-FXviw8PTd-Stj2/preview',
        'duration': '6:35',
    },
    {
        'id': 'a4',
        'title': 'Food Chains',
        'name': 'https://drive.google.com/file/d/1Y9615rt2K9os5JH_Be7BY0jEL9MSTtzC/preview',
        'duration': '4:57',
    },
    {
        'id': 'a5',
        'title': 'The Steps Of The Scientific Method',
        'name': 'https://drive.google.com/file/d/1S460wmrNkP1D9pWJt_KumkdCyIU1G-Z6/preview',
        'duration': '3:15',
    },
    {
        'id': 'a6',
        'title': 'Simple Machines',
        'name': 'https://drive.google.com/file/d/1fa6oehMb_tOrKj0puwakc5Htie11TK-m/preview',
        'duration': '6:11',
    },
    {
        'id': 'a7',
        'title': 'All About Clouds',
        'name': 'https://drive.google.com/file/d/1SWWLWgiQi9rZcS5-2fncS_2uF9MqXR0S/preview',
        'duration': '3:45',
    },
    {
        'id': 'a8',
        'title': 'Understanding Ecosystems',
        'name': 'https://drive.google.com/file/d/1Ke-drtHyFDly2iTlZn38B8GXA3uBS0LE/preview',
        'duration': '6:22',
    },

    {
        'id': 'a9',
        'title': 'Physical And Chemical Changes',
        'name': 'https://drive.google.com/file/d/1pTteH_BsINJGmKC_tQi5B46bvD7e_t46/preview',
        'duration': '5:23',
    },
    {
        'id': 'a10',
        'title': 'What Is A Plant? All About Plants',
        'name': 'https://drive.google.com/file/d/1xPNT6y4XXEz9OXaGXwrzYM9LljKQjxFB/preview',
        'duration': '9:34',
    },
    {
        'id': 'a11',
        'title': '3 Laws Of Motion',
        'name': 'https://drive.google.com/file/d/1xyHzc0cVntZvR4e0-_FSuFgmq_CSiBS9/preview',
        'duration': '4:58',
    },
    {
        'id': 'a12',
        'title': 'All About Cells And Cell Structure',
        'name': 'https://drive.google.com/file/d/1YzV3VTtymHUIvrXw8HCZ_z1Cf092Q-j-/preview',
        'duration': '5:57',
    },
    {
        'id': 'a13',
        'title': 'Living And Nonliving Things',
        'name': 'https://drive.google.com/file/d/1u2OVmHXUhJyD7WbLGEXaq5w9zn3BqkEp/preview',
        'duration': '3:38',
    },
    {
        'id': 'a14',
        'title': 'The Science Of Light And Color',
        'name': 'https://drive.google.com/file/d/1WJs5j93vUCGFG6iH1EFb6j5XgK479PQv/preview',
        'duration': '4:37',
    },
    {
        'id': 'a15',
        'title': 'What Makes Thunder And Lightning',
        'name': 'https://drive.google.com/file/d/12Hsv0B8_jctxp6LdI0ryf4qCqbSzhJwY/preview',
        'duration': '1:09',
    },
    {
        'id': 'a16',
        'title': 'Why Is The Sky Blue',
        'name': 'https://drive.google.com/file/d/1F-r92G5QxWnxWJ71s-bzlNt-koHajQJU/preview',
        'duration': '1:09',
    },
    {
        'id': 'a17',
        'title': 'All About Auroras',
        'name': 'https://drive.google.com/file/d/1xnWGqq9KOKEa72j13theHaedbZMMEGUX/preview',
        'duration': '4:11',
    },
    {
        'id': 'a18',
        'title': 'All About The Water Cycle',
        'name': 'https://drive.google.com/file/d/12eEjvqLmB7oA32VP5o3v1P3890_apKR3/preview',
        'duration': '2:53',
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
