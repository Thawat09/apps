package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
public class DemoApplication {

    @GetMapping("/health")
    public Object health() {
        return java.util.Map.of("status", "ok", "app", "java-app");
    }

    @GetMapping("/")
    public String root() {
        return "Hello from java-app";
    }

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
