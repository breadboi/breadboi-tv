# breadboi-tv

My personal website for all things streaming and social. You may view the live site [here](https://breadboi.tv/)

## Requirements

- NPM
- Go
- Gulp
- config.json ( For config.go )

## config.json
```
{
  "port" : <port>,
  "mode" : <debug/release>
  "api"  : <user-chosen-key>
}
```
## schedule.json
This file is saved in the uploaded-files directory and can be updated manually, or via the /uploadschedule api. Below is an example of a json body you can use. Also note, you need to create an api key in your config.json to use this api and send the key with the "api-key" header.
```
{
  "Days": [
		{
      "Date": "2021-02-17 4:45:00 AM",
      "Title": "Shovel Knight",
      "GameType": "Single Player",
      "Duration": "1:00:00",
      "Description": "Game about shovels and knights"
    },
		{
      "Date": "2021-02-17 3:00:00 AM",
      "Title": "Shovel Knight",
      "GameType": "Single Player",
      "Duration": "0:10:00",
      "Description": "Game about shovels and knights"
    }
  ]
}
```

## Getting Started

```bash
> npm install
> gulp babel
> go get -d ./...
> go run *.go
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
