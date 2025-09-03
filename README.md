# 🛒 Frontend - E-commerce Website

## 👨‍💻 Người thực hiện
- **Lê Đức Huy** – Frontend Developer  

---

## 📌 Giới thiệu
Đây là phần **Frontend** của hệ thống website bán hàng, cung cấp giao diện trực quan để người dùng có thể:  
- Xem danh sách sản phẩm  
- Tìm kiếm & lọc sản phẩm  
- Thêm sản phẩm vào giỏ hàng  
- Đăng ký / Đăng nhập tài khoản  
- Thanh toán trực tuyến  
- Xem lịch sử đơn hàng  

---

## 🖼️ Giao diện chính

### 🔹 Trang chủ (Home)
- Thanh điều hướng (Navbar) với logo, menu, giỏ hàng, đăng nhập.  
- Banner giới thiệu.  
- Danh sách sản phẩm nổi bật.  

### 🔹 Trang danh sách sản phẩm (Product List)
- Hiển thị toàn bộ sản phẩm.  
- Bộ lọc (theo danh mục, giá, tên).  
- Chức năng tìm kiếm.  

### 🔹 Trang chi tiết sản phẩm (Product Detail)
- Ảnh sản phẩm lớn.  
- Thông tin sản phẩm: tên, giá, mô tả, số lượng.  
- Nút thêm vào giỏ hàng.  

### 🔹 Trang giỏ hàng (Cart)
- Danh sách sản phẩm đã chọn.  
- Chỉnh sửa số lượng hoặc xóa sản phẩm.  
- Tổng tiền & nút tiến hành thanh toán.  

### 🔹 Trang thanh toán (Checkout)
- Nhập thông tin người mua.  
- Chọn phương thức thanh toán.  
- Xác nhận đơn hàng.  

### 🔹 Trang tài khoản (User)
- Đăng ký / Đăng nhập.  
- Quản lý thông tin cá nhân.  
- Xem lịch sử đơn hàng.  

---

## 🛠️ Công nghệ sử dụng
- **React.js**  
- **React Router** – điều hướng trang  
- **Axios** – gọi API Backend  
- **Tailwind CSS / SCSS** – thiết kế giao diện  
- **Redux / Context API** – quản lý state  

---

## ⚙️ Cài đặt & Chạy
```bash
# clone repo
git clone <link-repo-frontend>

# di chuyển vào thư mục frontend
cd frontend

# cài dependencies
npm install

# chạy ở môi trường dev
npm run dev

# build production
npm run build
