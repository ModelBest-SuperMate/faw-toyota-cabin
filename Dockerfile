# 静态页面模板（HTML/CSS/JS/图片）。CNAP 基线：非 root、只读根文件系统、只写 /tmp。
# unprivileged 镜像：uid 101 运行、pid 与缓存默认在 /tmp、监听 8080（Docker 18.09 语法）。
FROM nginxinc/nginx-unprivileged:1.27-alpine
COPY nginx-mdou2.conf /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html
EXPOSE 8080
