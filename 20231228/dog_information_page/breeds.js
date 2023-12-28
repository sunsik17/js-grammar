const GET_DOG_RANDOM_IMAGES_URL = "https://dog.ceo/api/breeds/image/random/42";
const GET_DOG_BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const dog_imgs_request = new XMLHttpRequest();
const dog_breeds_request = new XMLHttpRequest();

const header = document.getElementById("header");
const main = document.getElementById("main");
const input = document.getElementById("filter-text");
const button = document.getElementById("filter-button");
const select = document.getElementById("filter-select");
const more = document.getElementById("more");
const toTheTop = document.getElementById("tothetop");
const resetButton = document.getElementById("reset");

// 변경: 로컬 스토리지에서 데이터 가져오기
const storedDogs = localStorage.getItem("currentDogs");
const currentDog = storedDogs ? JSON.parse(storedDogs) : [];

function displayDogs(item) {
    const dogImgDiv = document.createElement("div");
    dogImgDiv.classList.add("flex-item");
    dogImgDiv.innerHTML = `<img src=${item}>`;
    main.appendChild(dogImgDiv);
}

window.addEventListener("load", () => {
    // 강아지 사진 뿌리기
    if (currentDog.length === 0) {
        dog_imgs_request.open("GET", GET_DOG_RANDOM_IMAGES_URL);
        dog_imgs_request.addEventListener("load", () => {
            const response = JSON.parse(dog_imgs_request.response);
            response.message.forEach((item) => {
                currentDog.push(item);
                displayDogs(item);
            });
            // 변경: 로컬 스토리지에 데이터 저장
            localStorage.setItem("currentDogs", JSON.stringify(currentDog));
        });
        dog_imgs_request.send();
    } else {
        // 이미 데이터가 있다면 로컬 스토리지에서 가져와서 표시
        currentDog.forEach((item) => {
            displayDogs(item);
        });
    }

    // 셀렉트에 견종 정보 뿌리기
    dog_breeds_request.open("GET", GET_DOG_BREEDS_URL);
    dog_breeds_request.addEventListener("load", () => {
        const response = JSON.parse(dog_breeds_request.response);
        Object.keys(response.message).forEach((item) => {
            const option = document.createElement("option");
            option.textContent = item;
            option.value = item;
            select.appendChild(option);
        });
    });
    dog_breeds_request.send();
});

button.addEventListener("click", () => {
    main.innerHTML = "";
    let filteredDogs = currentDog.filter((item) => {
        return item.indexOf(input.value) !== -1;
    });

    input.value = "";

    filteredDogs.forEach((item) => {
        displayDogs(item);
    });
});

select.addEventListener("change", () => {
    main.innerHTML = "";
    let filteredDogs = currentDog.filter((item) => {
        return item.indexOf(select.value) !== -1;
    });

    filteredDogs.forEach((item) => {
        displayDogs(item);
    });
});

more.addEventListener("click", () => {
    dog_imgs_request.open("GET", GET_DOG_RANDOM_IMAGES_URL);
    dog_imgs_request.addEventListener("load", () => {
        const response = JSON.parse(dog_imgs_request.response);
        response.message.forEach((item) => {
            currentDog.push(item);
            displayDogs(item);
        });
        // 변경: 로컬 스토리지에 데이터 저장
        localStorage.setItem("currentDogs", JSON.stringify(currentDog));
    });
    dog_imgs_request.send();
});

toTheTop.addEventListener("click", () => {
    window.scrollTo({ top: 0 });
});

resetButton.addEventListener("click", () => {
    main.innerHTML = "";
    dog_imgs_request.open("GET", GET_DOG_RANDOM_IMAGES_URL);
    dog_imgs_request.addEventListener("load", () => {
        const response = JSON.parse(dog_imgs_request.response);
        currentDog.splice(0, currentDog.length - 1); // 변경: 배열 비우기
        response.message.forEach((item) => {
            currentDog.push(item);
            displayDogs(item);
        });
        // 변경: 로컬 스토리지에 데이터 저장
        localStorage.setItem("currentDogs", JSON.stringify(currentDog));
    });
    dog_imgs_request.send();
});
