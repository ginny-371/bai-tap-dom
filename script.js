console.log("RUN SCRIPT");

// Đổi style của tiêu đề Our companies thành chữ in đậm và kích thước 32px
// Gợi ý: Sử dụng .style.fontWeight và .style.fontSize

// Đổi màu nền của phần footer thành màu #0984e3
// Gợi ý: Sử dụng .style.backgroundColor

// Đổi đoạn text ở footer từ "© 2020 One Mount Group, JSC." thành "© 2021 One Mount Group, JSC."
// Gợi ý: Sử dụng .innerText

// Đổi ảnh đầu tiên thành ảnh onhousing.png
// Gợi ý: Sử dụng .src

document.getElementsByTagName("title")[0].innerText = "Our companies"

//Yeu cầu đầu tiên
document.getElementsByTagName("h2")[0].style.fontSize = "32px"
//document.querySelector("h2").style.fontSize = "100px"
document.getElementsByTagName("h2")[0].style.fontWeight ="Bold"

//Yêu cầu thứ 2.
document.getElementsByTagName("footer")[0].style.backgroundColor ="#0984e3"

//Yêu cầu thứ 3
document.getElementsByTagName("p")[2].innerText = "© 2021 One Mount Group, JSC."
//document.querySelectorAll("p")[2].innerText = "© 2021 One Mount Group, JSC."

//Yêu cầu thứ 4
document.getElementsByTagName("img")[0].src = "img/onhousing.png"