package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
    	fmt.Fprint(w, `{"status":"ok","app":"go-app"}`)
	})
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    	fmt.Fprint(w, "Hello from go-app")
	})

	port := os.Getenv("PORT")
	if port == "" { port = "3003" }
	log.Printf("go-app listening on %s", port)
	log.Fatal(http.ListenAndServe("0.0.0.0:"+port, nil))
}
