document.addEventListener("DOMContentLoaded", function(event) {
    var text = "Chào mừng đến với Atlantic Island";
    var charIndex = 0;
    var typingEffect = document.getElementById("typing-effect");
  
    function type() {
      if (charIndex < text.length) {
        typingEffect.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(resetText, 10000); // Gọi hàm resetText sau 10 giây
      }
    }
  
    function resetText() {
      typingEffect.textContent = ""; // Xóa nội dung
      charIndex = 0; // Reset lại chỉ số ký tự
      setTimeout(type, 100); // Gọi lại hàm type sau 100ms
    }
  
    type();
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    // Hiển thị hiệu ứng loading khi trang web tải
    var loadingOverlay = document.getElementById("loadingOverlay");
    loadingOverlay.classList.add("active");
  
    // Ẩn hiệu ứng loading khi trang web tải xong
    window.addEventListener("load", function() {
      loadingOverlay.classList.remove("active");
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');
    var navbarToggle = document.querySelector('.navbar-toggler');

    // Bắt sự kiện click trên navbarToggle để mở hoặc đóng menu
    navbarToggle.addEventListener('click', function() {
      navbar.classList.toggle('active');
    });

    // Bắt sự kiện click trên document để đóng menu nếu click bên ngoài vùng menu
    document.addEventListener('click', function(event) {
      var targetElement = event.target;

      // Kiểm tra xem click có diễn ra bên ngoài vùng menu hay không
      if (!navbar.contains(targetElement) && !navbarToggle.contains(targetElement)) {
        navbar.classList.remove('active');
      }
    });
  });
