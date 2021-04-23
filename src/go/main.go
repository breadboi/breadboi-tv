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

	"breadboi.tv/utility"

	"github.com/gin-gonic/gin"
)

func main() {

	config := utility.LoadConfiguration("config.json")

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
		api.GET("/bingo", BingoHandler)
	}

	return router
}

// UploadScheduleHandler - Handles the /uploadschedule api call
func UploadScheduleHandler(c *gin.Context) {
	config := utility.LoadConfiguration("config.json")

	if c.Request.Header.Get("api-key") == config.API {

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
	} else {
		c.String(http.StatusUnauthorized, "Your api key is invalid...")
	}
}

// ScheduleHandler - Handles the /schedule api call
func ScheduleHandler(c *gin.Context) {

	schedule := utility.GetSchedule()

	c.Header("Content-Type", "application/json")

	c.JSON(http.StatusOK, schedule)
}

// BingoHandler - Handles the /bingo api call
func BingoHandler(c *gin.Context) {

	bingoJson := utility.GetBingo()

	c.Header("Content-Type", "application/json")

	c.JSON(http.StatusOK, bingoJson)
}
