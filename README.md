Kính chào anh/chị,
Em là Lê Minh Quang, ứng viên ứng tuyển vào vị trí Thực tập sinh PHP. Sau đây, em xin phép hướng dẫn cách setup bài test code như sau:

1. Cài đặt Server và Database
Bước đầu tiên là cấu hình kết nối cơ sở dữ liệu:
Mở file .env và điều chỉnh các thông số sau:
DB_CONNECTION=mysql  
DB_HOST=127.0.0.1  
DB_PORT=3306  
DB_DATABASE=assignment-3  
DB_USERNAME=root  
DB_PASSWORD=

Sau khi đã chỉnh sửa xong file .env, chạy lần lượt các lệnh sau trong Terminal:
php artisan migrate  
php artisan db:seed --class=StudentSeeder  

Tiếp theo, khởi động server bằng lệnh:
php artisan serve  

Sau khi chạy lệnh, server sẽ hoạt động tại địa chỉ: http://127.0.0.1:8000.

2. Cài đặt Frontend
Tiếp theo là cài đặt giao diện Frontend. Thực hiện lần lượt các bước sau trong Terminal:
npm install  để cài đặt các package cần thiết.

Sau đó, khởi động client bằng lệnh:
npm start  
Sau khi chạy lệnh, client sẽ hoạt động tại địa chỉ: http://127.0.0.1:3000.

Em xin cảm ơn anh/chị đã dành thời gian theo dõi phần hướng dẫn này. 
 
