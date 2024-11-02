// 1: Lấy tất cả element gnav__item lập qua chúng, gán từng item vào biến item
for(const item of document.querySelectorAll(".gnav__item")) {
  // 2: Gán sự kiện onmousemove cho thẻ item
  item.onmousemove = e => {
    // 3: 
    // e.clientX => vị trí của chuột trên element
    // item.offsetWidth => chiều rộng của phần tử
    // decimal => thể hiện ví trí tương đối của chuột theo chiều ngang 0 --> 1
    const decimal = e.clientX / item.offsetWidth;
    const basePercent = 80, // Phần trăm màu cơ bản hiển thị trên item
          percentRange = 20,// Phần trăm màu có thể điều chỉnh
          // adjustablePercent: Tính toán phần trăm dựa trên vị trí chuột
          // Chuột ở đầu element thì decimal = 0 --> adjustablePercent = 0, decimal = 1 --> = 20
          adjustablePercent = percentRange * decimal;  
    // Tính tổng phần trăm cuối cùng range 80% đến 100%
    const lightOrangePercent = basePercent + adjustablePercent;
    // Thiết lập CSS custom property (variable)
    item.style.setProperty("--light-orange-percent", `${lightOrangePercent}%`)
  }
}