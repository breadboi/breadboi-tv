/**
 * @file main.go
 * @author Brett Carney (brettcarney.com)
 * @brief Parses schedule json files
 * @version 1.0
 * @date 2020-02-19
 *
 */

package main

import (
	"encoding/json"
	"fmt"
	"os"
)

// Schedule - This is a test
type Schedule struct {
	Days []struct {
		Date        string `json:"Date"`
		Title       string `json:"Title"`
		GameType    string `json:"GameType"`
		Duration    string `json:"Duration"`
		Description string `json:"Description"`
		StartTime   string `json:"StartTime"`
	} `json:"Days"`
}

// GetSchedule - Loads the configuration file from a path
func GetSchedule() Schedule {
	var schedule Schedule

	scheduleFile, err := os.Open("./uploaded-files/schedule.json")

	defer scheduleFile.Close()

	if err != nil {
		fmt.Println(err.Error())
	}

	jsonParser := json.NewDecoder(scheduleFile)

	jsonParser.Decode(&schedule)

	return schedule
}
