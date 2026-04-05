// 大厂规范：DOM加载完成后执行，避免DOM未渲染导致的错误
document.addEventListener('DOMContentLoaded', function() {
    // 1. 获取所有切换按钮（语义化命名，清晰易懂）
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    // 2. 遍历按钮，给每个按钮添加点击事件
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 获取当前按钮对应的英文介绍（就近获取，避免全局查找，提升性能）
            const intro = this.nextElementSibling;
            
            // 切换显示/隐藏，并修改按钮文本（交互逻辑清晰）
            if (intro.style.display === 'block') {
                intro.style.display = 'none';
                this.textContent = 'Show Introduction';
            } else {
                intro.style.display = 'block';
                this.textContent = 'Hide Introduction';
            }
        });
    });

    // 可选：添加页面加载动画（大厂常用，提升用户体验）
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});
// -------------------------- 新增：悬停图片弹窗交互优化（大厂体验增强） --------------------------
// 给所有时间点添加鼠标悬停事件，优化弹窗显示时机
const timelineMarkers = document.querySelectorAll('.timeline-marker');
const imagePopups = document.querySelectorAll('.image-popup');

timelineMarkers.forEach((marker, index) => {
    const popup = imagePopups[index];
    
    // 鼠标移入时间点，显示弹窗
    marker.addEventListener('mouseenter', () => {
        popup.style.opacity = '1';
        popup.style.visibility = 'visible';
        popup.style.transform = 'translateY(0)';
    });
    
    // 鼠标移出时间点，隐藏弹窗
    marker.addEventListener('mouseleave', () => {
        popup.style.opacity = '0';
        popup.style.visibility = 'hidden';
        popup.style.transform = 'translateY(10px)';
    });
});
