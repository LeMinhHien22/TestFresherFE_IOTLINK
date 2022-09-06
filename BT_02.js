const cursor = document.querySelector('.cursor');
const container = document.getElementById('containerBlue');

document.addEventListener('mousemove', e => {

    const heightContainer = container.offsetHeight;
    const widthContainer = container.offsetWidth;
    const X = widthContainer - e.pageX;
    const Y = heightContainer - e.pageY;
    if (X >= 300) {
        if (Y >= 200) {
            cursor.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX}px; `)
        }
        else {
            cursor.setAttribute("style", `top: ${e.pageY - 200}px; left: ${e.pageX}px; `)
        }
    }
    else {
        if (Y >= 200) {
            cursor.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX - 300}px; `)
        }
        else {
            cursor.setAttribute("style", `top: ${e.pageY - 200}px; left: ${e.pageX - 300}px; `)
        }

    }
    //Ẩn hcn màu trắng trên con trỏ
    if (e.target.tagName == "BODY") {
        cursor.setAttribute("style", `display: none;`)
    }

    if (e.target.matches('.normalCursor')) {
        cursor.setAttribute("style", `display: none;`)
    }
})




