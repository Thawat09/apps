module.exports = {
    apps: [
        // ----------------------------
        // 1. Node.js (Express)
        // ----------------------------
        {
            name: "node-app",
            cwd: "/srv/apps/apps/node-app",
            script: "npm",
            args: "start",
            env: {
                PORT: 3001,
            },
        },

        // ----------------------------
        // 2. Python (FastAPI)
        // ----------------------------
        {
            name: "py-app",
            cwd: "/srv/apps/apps/py-app",
            // ใช้ uvicorn จาก virtualenv ที่เราสร้างไว้
            script: "/srv/apps/apps/py-app/.venv/bin/uvicorn",
            args: "app:app --host 0.0.0.0 --port 3002",
            interpreter: "none", // บอก PM2 ว่านี่เป็น binary ไม่ต้องใช้ node interpreter
        },

        // ----------------------------
        // 3. Go (HTTP)
        // ----------------------------
        {
            name: "go-app",
            cwd: "/srv/apps/apps/go-app",
            // สำหรับ dev ใช้ go run; prod แนะนำ build binary แล้วใช้ script: "./app"
            script: "go",
            args: "run main.go",
            env: {
                PORT: 3003,
            },
            interpreter: "none",
        },

        // ----------------------------
        // 4. Java (Spring Boot)
        // ----------------------------
        {
            name: "java-app",
            cwd: "/srv/apps/apps/java-app",
            script: "java",
            args: "-jar target/java-app-1.0.0.jar --server.port=3004",
            max_memory_restart: "256M",
            autorestart: true,
            interpreter: "none",
        },
    ],
};
