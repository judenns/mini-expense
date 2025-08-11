# TODO: Syntax Cheatsheet cho việc nâng cấp ứng dụng

## 1. Tính tổng và hiển thị tổng chi tiêu kèm thanh progress

### Tính tổng dùng Array.reduce()
```javascript
// Syntax cơ bản
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

// Ví dụ với mảng object
const sum = arrayOfObjects.reduce((total, item) => total + item.value, 0);
```

### Cập nhật DOM với kết quả tính toán
```javascript
// Cập nhật nội dung text
element.textContent = value;

// Format số với Intl.NumberFormat
const formatter = new Intl.NumberFormat('locale', options);
const formattedValue = formatter.format(number);
```

### Cập nhật progress bar dùng style
```javascript
// Thay đổi chiều rộng của progress bar theo phần trăm
element.style.width = `${percentValue}%`;

// Thay đổi màu sắc theo điều kiện
element.style.backgroundColor = condition ? 'color1' : 'color2';
```

## 2. Validate input

### Validate form natively
```javascript
// Validate bằng constraint validation API
input.setCustomValidity('Error message');
input.reportValidity();

// Reset validation message
input.setCustomValidity('');

// Check validity
const isValid = input.checkValidity();
const isFormValid = form.checkValidity();
```

### Event-based validation
```javascript
// Listen cho input event
input.addEventListener('input', validateFunction);

// Listen cho change event
input.addEventListener('change', validateFunction);

// Listen cho submit event
form.addEventListener('submit', (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
  }
});
```

### Regular expression cho validation
```javascript
// Pattern matching
const pattern = /regex-pattern/;
const isValid = pattern.test(inputValue);

// Một số pattern hữu ích
const numberPattern = /^[0-9]+$/;
const namePattern = /^[a-zA-Z\s]{3,50}$/;
```

## 3. Lưu localStorage

### Syntax cơ bản cho localStorage
```javascript
// Lưu dữ liệu
localStorage.setItem('key', 'value');

// Lưu object (cần chuyển sang JSON)
localStorage.setItem('key', JSON.stringify(object));

// Đọc dữ liệu
const value = localStorage.getItem('key');

// Đọc object (cần parse JSON)
const object = JSON.parse(localStorage.getItem('key'));

// Xóa dữ liệu
localStorage.removeItem('key');

// Xóa tất cả
localStorage.clear();
```

### Kiểm tra sự tồn tại của dữ liệu
```javascript
// Kiểm tra key có tồn tại
if (localStorage.getItem('key') !== null) {
  // Key tồn tại
}

// Hoặc sử dụng
const data = localStorage.getItem('key') || defaultValue;
```

### Xử lý ngoại lệ với localStorage
```javascript
try {
  localStorage.setItem('key', value);
} catch (e) {
  // Xử lý khi localStorage đầy hoặc bị disabled
  console.error('localStorage error:', e);
}
```

## 4. Animation

### CSS Transitions
```css
/* Syntax cơ bản */
element {
  transition: property duration timing-function delay;
}

/* Ví dụ */
.element {
  transition: all 0.3s ease-in-out;
  transition: transform 0.2s ease, opacity 0.5s linear;
}
```

### CSS Animations
```css
/* Định nghĩa keyframes */
@keyframes animationName {
  0% { properties: value; }
  50% { properties: value; }
  100% { properties: value; }
}

/* Sử dụng animation */
.element {
  animation: name duration timing-function delay iteration-count direction fill-mode;
}

/* Ví dụ */
.element {
  animation: fadeIn 0.5s ease-out forwards;
}
```

### JavaScript cho animation
```javascript
// Thêm/xóa class để trigger animation
element.classList.add('animated');
element.classList.remove('animated');

// Sử dụng setTimeout cho animation sequence
setTimeout(() => {
  element.classList.add('animated');
}, 300);

// Lắng nghe animation events
element.addEventListener('animationend', () => {
  // Làm gì đó khi animation kết thúc
});
```

### Transform properties hữu ích
```css
/* Common transforms */
.element {
  transform: translateY(-10px); /* Di chuyển */
  transform: scale(1.1); /* Phóng to/thu nhỏ */
  transform: rotate(45deg); /* Xoay */
  transform: translateY(-10px) scale(1.1); /* Kết hợp nhiều transform */
}
```