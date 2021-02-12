/**
 * @file main.go
 * @author Brett Carney (brettcarney.com)
 * @brief Interfaces with website config file
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

// Config options
type Config struct {
	Port string `json:"port"`
	Mode string `json:"mode"`
	API  string `json:"api"`
}

// LoadConfiguration Loads the configuration file from a path
func LoadConfiguration(file string) Config {
	var config Config

	configFile, err := os.Open(file)

	defer configFile.Close()

	if err != nil {
		fmt.Println(err.Error())
	}

	jsonParser := json.NewDecoder(configFile)

	jsonParser.Decode(&config)

	return config
}
