# music_library
This small project uses jquery and ajax to showcase a music library. The [Apple itunes api](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/) was used for this. A separate [country api](https://developer.tuxx.co.uk/api-overview/country-iso) was used for country codes to be used for the itunes api. The api key and the apiId has been deleted for protection. Please use your **own api key** for the service.

Third party libraries like jquery and bootstrap where managed through NPM package install manager and WEBPACK bundle manager. Some of the dependencies could be seen as :
```
"dependencies": {
    "autoprefixer": "^9.7.3",
    "core-js": "^3.5.0",
    "css-loader": "^3.3.2",
    "es6-promise": "^4.2.8",
    "jquery-autocomplete": "^1.2.8",
    "jquery-ui": "^1.12.1",
    "postcss-loader": "^3.0.0",
    "style-loader": "^1.0.1",
    "webpack-dev-server": "^3.9.0",
    "webpack-jquery-ui": "^2.0.1"
  }
  ```
  
  The website's html were dynamically generated except the main search and option boxes. The code was validated using w3c validator. 
