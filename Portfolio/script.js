// 專案數據
const projects = [
    {
        title: "Project 1",
        desc: "Description of Project 1.",
        bg: "images/project1.jpg",
        thumb1: "images/project2.jpg",
        thumb2: "images/project3.jpg"
    },
    {
        title: "Project 2",
        desc: "Description of Project 2.",
        bg: "images/project2.jpg",
        thumb1: "images/project3.jpg",
        thumb2: "images/project1.jpg"
    },
    {
        title: "Project 3",
        desc: "Description of Project 3.",
        bg: "images/project3.jpg",
        thumb1: "images/project1.jpg",
        thumb2: "images/project2.jpg"
    }
];

let currentIndex = 0;

// DOM 選取
const bg = document.getElementById("project-bg");
const title = document.getElementById("project-title");
const desc = document.getElementById("project-desc");
const thumb1 = document.getElementById("thumb-1");
const thumb2 = document.getElementById("thumb-2");
const nextBtn = document.getElementById("next-btn");

// 初始設置
function updateProject(index) {
    const project = projects[index];

    // 變更背景圖片
    bg.style.opacity = 0;
    setTimeout(() => {
        bg.style.backgroundImage = `url(${project.bg})`;
        bg.style.opacity = 1;
    }, 500);

    // 更新標題與描述
    title.textContent = project.title;
    desc.textContent = project.desc;

    // 更新縮略圖
    thumb1.style.backgroundImage = `url(${project.thumb1})`;
    thumb2.style.backgroundImage = `url(${project.thumb2})`;
}

// 切換到下一個專案
function nextProject() {
    currentIndex = (currentIndex + 1) % projects.length;
    updateProject(currentIndex);
}

// 綁定按鈕點擊事件
nextBtn.addEventListener("click", nextProject);

// 初始化頁面
updateProject(currentIndex);
