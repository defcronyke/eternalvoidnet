package eternalvoidnet

import (
	"github.com/julienschmidt/httprouter"
	"net/http"
)

func init() {
	
	r := httprouter.New()
	
	r.ServeFiles("/*filepath", http.Dir("static/dist"))
	
	http.Handle("/", r)
}
