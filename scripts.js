

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
        reload(data.slice(0, 10));
    });

function reload(users) {
    users.forEach((user) => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const p = document.createElement('p');

        img.src = "./img/storisAvatar.png";
        p.classList.add('Nick');
        p.innerHTML = user.name;

        div.appendChild(img);
        div.appendChild(p);
        container.appendChild(div);
    });
}


fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((data) => {
        reloadPosts(data.slice(0, 10))
    })

function reloadPosts(photos) {
    photos.forEach((phot) => {
        const postHeader = document.createElement("div");
        postHeader.classList.add("post_header");

        const circle = document.createElement("div");
        circle.classList.add("circle");

        const names = document.createElement("div");
        names.classList.add("names");

        const nickname = document.createElement("p");
        nickname.classList.add("nam");
        nickname.textContent = "t.e.r.a.e.v";

        const city = document.createElement("p");
        city.classList.add("city");
        city.textContent = "Samarqand , Uzbekistan";

        const imgToch = document.createElement("img");
        imgToch.classList.add("toch");
        imgToch.src = "./img/dou.png";
        imgToch.alt = "";

        names.append(nickname);
        names.append(city);

        postHeader.append(circle);
        postHeader.append(names);
        postHeader.append(imgToch);

        let pho = document.createElement('img')
        pho.src = phot.url
        pho.classList.add('pho')


        const photo = document.createElement("div");
        photo.classList.add("photo");

        const calculate = document.createElement("div");
        calculate.classList.add("calculate");

        const num = document.createElement("p");
        num.classList.add("num");
        num.textContent = "1/8";

        calculate.append(num);
        photo.append(pho, calculate);

        const postInfo = document.createElement('div');
        postInfo.classList.add('post_info');

        const reacts = document.createElement('div');
        reacts.classList.add('reacts');

        const likeImg = document.createElement('img');
        likeImg.classList.add('react');
        likeImg.classList.add('likes')
        likeImg.src = './img/like.png';
        likeImg.alt = '';

        const commentImg = document.createElement('img');
        commentImg.classList.add('react');
        commentImg.src = './img/comment.png';
        commentImg.alt = '';

        const planImg = document.createElement('img');
        planImg.classList.add('react');
        planImg.src = './img/plan.png';
        planImg.alt = '';

        const slider = document.createElement('div');
        slider.classList.add('slider');

        const smallCircleOne = document.createElement('div');
        smallCircleOne.classList.add('small_circle_one');

        const smallCircles = document.createElement('div');
        smallCircles.classList.add('small_circle');

        slider.append(smallCircleOne);
        slider.append(smallCircles);
        slider.append(smallCircles);
        slider.append(smallCircles);
        slider.append(smallCircles);

        const reactEnd = document.createElement('img');
        reactEnd.classList.add('react_end');
        reactEnd.src = './img/Add.svg';
        reactEnd.alt = '';

        reacts.append(likeImg);
        reacts.append(commentImg);
        reacts.append(planImg);
        reacts.append(slider);
        reacts.append(reactEnd);

        const information = document.createElement('div');
        information.classList.add('information');

        const likes = document.createElement('p');
        likes.classList.add('likes');
        likes.textContent = '8,888 likes';

        const texts = document.createElement('div');
        texts.classList.add('texts');

        const nicknam = document.createElement('p');
        nicknam.classList.add('nams');
        nicknam.textContent = 't.e.r.a.e.v';

        const info = document.createElement('p');
        info.classList.add('inf');
        info.textContent = phot.title
        const more = document.createElement('p');
        more.classList.add('more');
        more.textContent = '...more';

        texts.append(nicknam);
        texts.append(info);
        texts.append(more);

        const viewComments = document.createElement('p');
        viewComments.classList.add('comm');
        viewComments.textContent = 'View all 30 comments';

        const comments = document.createElement('div');
        comments.classList.add('coms');

        const commentOne = document.createElement('div');
        commentOne.classList.add('com_one');

        const nickOne = document.createElement('p');
        nickOne.classList.add('nicks');
        nickOne.textContent = 't.e.r.a.e.v.a';

        const commentOneText = document.createElement('p');
        commentOneText.classList.add('co');
        commentOneText.textContent = 'Быстро убериии!!!😡😡😡😡';

        commentOne.append(nickOne);
        commentOne.append(commentOneText);

        const commentTwo = document.createElement('div');
        commentTwo.classList.add('com_two');

        const nickTwo = document.createElement('p');
        nickTwo.classList.add('nicks');
        nickTwo.textContent = 't.e.r.a.e.v';

        const commentTwoText = document.createElement('p');
        commentTwoText.classList.add('co');
        commentTwoText.textContent = 'AUUUUUUUUUUUUUU';

        commentTwo.append(nickTwo);
        commentTwo.append(commentTwoText);

        comments.append(commentOne);
        comments.append(commentTwo);

        const time = document.createElement('div');
        time.classList.add('tim');

        const timeAgo = document.createElement('p');
        timeAgo.classList.add('tams');
        timeAgo.textContent = '12 hours ago';

        time.append(timeAgo);

        const commentSection = document.createElement('div');
        commentSection.classList.add('comment');

        const smileyImg = document.createElement('img');
        smileyImg.src = './img/smail.png';
        smileyImg.alt = '';

        const addComment = document.createElement('p');
        addComment.textContent = 'Add comment...';

        const postButton = document.createElement('button');
        postButton.textContent = 'Post';

        commentSection.append(smileyImg);
        commentSection.append(addComment);
        commentSection.append(postButton);

        information.append(reacts)
        information.append(likes);
        information.append(texts);
        information.append(viewComments);
        information.append(comments);
        information.append(time);
        information.append(commentSection);


        document.body.append(postHeader);
        document.body.append(photo);
        document.body.append(information);

        likeImg.onclick = () => {
            likeImg.src ="./img/heart2.png"
        }
        likeImg.ondblclick = () => {
            likeImg.src ='./img/like.png'
        }

        pho.ondblclick = () => {
            likeImg.src ="./img/heart2.png"
        }
        pho.onclick = () => {
            likeImg.src ="./img/like.png"
        }

        reactEnd.onclick = () => {
            reactEnd.src = './img/favorite.png'
        }
        reactEnd.ondblclick = () => {
            reactEnd.src = './img/Add.svg'
        }
    })
}

const header = document.createElement('header');
header.classList.add('head');

const logo = document.createElement('img');
logo.classList.add('logo');
logo.src = './img/e18fcd2b0d9bea85eb29a20e209518f8.png';
logo.alt = '';
header.append(logo);


const inputCont = document.createElement('div');
inputCont.classList.add('inputCont');

const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.name = 'search';
searchInput.placeholder = 'Search';
searchInput.classList.add('Search');
inputCont.append(searchInput);

const searchIcon = document.createElement('img');
searchIcon.src = './img/Search.png';
searchIcon.alt = 'search-icon';
searchIcon.classList.add('searchIcon');
inputCont.append(searchIcon);

header.append(inputCont);

const leftDiv = document.createElement('div');
leftDiv.classList.add('left');

const hedSaray = document.createElement('img');
hedSaray.src = './img/saray.png';
hedSaray.alt = '';
leftDiv.append(hedSaray);

const chat = document.createElement('img');
chat.src = './img/chat.png';
chat.alt = '';
chat.classList.add('chat')
leftDiv.append(chat);

const interesting = document.createElement('img');
interesting.src = './img/interesting.png';
interesting.alt = '';
leftDiv.append(interesting);

const lik = document.createElement('img');
lik.src = './img/like.png';
lik.alt = '';
lik.classList.add('lik')
leftDiv.append(lik);

const headCircle = document.createElement('div');
headCircle.classList.add('head_circle');
leftDiv.append(headCircle);

headCircle.onclick = () => {
    window.location.href = "./index2.html";
}



header.append(leftDiv);

const users = document.createElement('div');
users.classList.add('users');

const circleMain = document.createElement('div');
circleMain.classList.add('circle_main');

const plusIcon = document.createElement('img');
plusIcon.src = './img/plus.png';
plusIcon.alt = '';
plusIcon.classList.add('plus')
circleMain.append(plusIcon);

const pStory = document.createElement('p');
pStory.textContent = 'You story';
circleMain.append(pStory);

users.append(circleMain);

const container = document.createElement('div');
container.classList.add('c');



users.append(container)




document.body.append(header);
document.body.append(users);


let main = document.querySelector('.logo')

main.onclick = () => {
    window.location.href = "./index.html";
}
