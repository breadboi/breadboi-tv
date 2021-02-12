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
	"io/ioutil"
	"net/http"

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

	// Serve pokemon
	router.StaticFile("/schedule", "public/views/schedule.html")

	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "pong",
			})
		})
		api.POST("/uploadschedule", UploadScheduleHandler)
		api.GET("/schedule", ScheduleHandler)
	}

	return router
}

// UploadScheduleHandler - Handles the /uploadschedule api call
func UploadScheduleHandler(c *gin.Context) {
	body, err := ioutil.ReadAll(c.Request.Body)

	if err != nil {
		c.String(http.StatusBadRequest, "Cannot read response body")
	}

	err = ioutil.WriteFile("./uploaded-files/schedule.json", body, 0644)

	if err != nil {
		c.String(http.StatusBadRequest, "Write Failed...")
	} else {
		c.String(http.StatusOK, "Successful Upload...")
	}
}

// ScheduleHandler - Handles the /schedule api call
func ScheduleHandler(c *gin.Context) {

	schedule := GetSchedule()

	c.Header("Content-Type", "application/json")

	c.JSON(http.StatusOK, schedule)
}
