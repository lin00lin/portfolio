document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn");

    btn.addEventListener("mouseover", () => {
        btn.style.backgroundColor = "#ffb347"; /* 淺橘色效果 */
    });

    btn.addEventListener("mouseout", () => {
        btn.style.backgroundColor = "#ffcc4d"; /* 恢復黃色 */
    });
});
