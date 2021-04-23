/**
 * @file main.go
 * @author Brett Carney (brettcarney.com)
 * @brief Interaction with bingo lockout endpoints
 * @version 1.0
 * @date 2020-02-19
 *
 */

package utility

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// Bingo - Represents a Bingo Board
type Bingo []struct {
	Slot   string `json:"slot"`
	Name   string `json:"name"`
	Colors string `json:"colors"`
}

// GetBingo - Makes a request to bingosync and returns a Bingo object
func GetBingo() Bingo {
	var bingo Bingo

	bingoResponse, err := http.Get("https://bingosync.com/room/l0FWPAqeQB-JNrykDilBIg/board")

	if err != nil {
		fmt.Println(err.Error())
	}

	defer bingoResponse.Body.Close()

	jsonParser := json.NewDecoder(bingoResponse.Body)

	jsonParser.Decode(&bingo)

	return bingo
}
