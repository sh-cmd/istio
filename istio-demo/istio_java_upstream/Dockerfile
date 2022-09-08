FROM openjdk:11
VOLUME /tmp
COPY target/*.jar app.jar
EXPOSE 7092
ENTRYPOINT ["java","-jar","/app.jar"]
