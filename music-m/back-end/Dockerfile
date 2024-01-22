FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

COPY target/music-m-0.0.1-SNAPSHOT.jar /app/music-m.jar

ENTRYPOINT ["java","-jar", "music-m.jar"]
