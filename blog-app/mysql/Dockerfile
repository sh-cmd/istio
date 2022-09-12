FROM mysql
COPY config.sql /tmp
CMD [ "mysqld", "--init-file=/tmp/config.sql" ]
