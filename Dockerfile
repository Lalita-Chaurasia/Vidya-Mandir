# Step 1: Build stage using Maven
FROM maven:3.8.4-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

# Step 2: Runtime stage using the OFFICIAL Oracle 17 Image
FROM container-registry.oracle.com/java/jdk:17
COPY --from=build /target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]