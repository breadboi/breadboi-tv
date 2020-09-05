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
	"github.com/gin-gonic/contrib/static"
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

	// Serve frontend static files
	router.Use(static.Serve("/", static.LocalFile("public", true)))

	return router
}
