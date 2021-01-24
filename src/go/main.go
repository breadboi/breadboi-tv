/**
 * @file main.go
 * @author Brett Carney (brettcarney.com)
 * @brief Main entrypoint and router
 * @version 1.0
 * @date 2020-02-19
 *
 */

package main

import (
	"github.com/gin-gonic/gin"
)

func main() {

	config := LoadConfiguration("config.json")

	gin.SetMode(config.Mode)

	router := SetupRouter()

	// Listen and Serve
	router.Run(config.Port)
}

// SetupRouter Sets up our gin router
func SetupRouter() *gin.Engine {

	router := gin.Default()

	// Serve resources
	router.Static("/public", "public")

	// Serve homepage
	router.StaticFile("/", "public/views/home.html")

	// Serve squad
	router.StaticFile("/squad", "public/views/squad.html")

	// Serve pokemon
	router.StaticFile("/pokemon", "public/views/pokemon.html")

	return router
}
