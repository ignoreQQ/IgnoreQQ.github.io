// 假設這是動態生成的公告資訊
const announcements = [
    { title: "校慶活動", content: "我們的校慶將於下個月舉行，敬請期待！" },
    { title: "新課程開設", content: "我們將開設一門新的課程，詳細信息請查看課程頁面。" },
    // 可以添加更多的公告
];

// 將公告動態插入到網頁中
const announcementBoard = document.getElementById('announcement-board');
announcements.forEach(announcement => {
    const announcementItem = document.createElement('div');
    announcementItem.classList.add('announcement-item');
    announcementItem.innerHTML = `<h3>${announcement.title}</h3><p>${announcement.content}</p>`;
    announcementBoard.appendChild(announcementItem);
});

// 這裡可以添加其他 JavaScript 互動的部分，例如表單驗證等

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  // 將所有照片設為不可見
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // 自增索引，顯示下一張照片
  slideIndex++;
  
  // 如果超過照片總數，重新從頭開始
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // 顯示當前照片
  slides[slideIndex - 1].style.display = "block";
  
  // 設定下一次顯示的時間間隔（這裡是3000毫秒，即3秒）
  setTimeout(showSlides, 3000);
}
