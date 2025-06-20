-- สร้าง user ที่ connect จากภายนอกได้
CREATE USER 'admin'@'%' IDENTIFIED BY 'adminpass';
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%' WITH GRANT OPTION;

-- แก้สิทธิ root ให้ connect จากภายนอกได้เช่นกัน
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'rootpass' WITH GRANT OPTION;
FLUSH PRIVILEGES;
