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
