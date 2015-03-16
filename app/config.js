System.config({
  "baseURL": "/",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.14",
    "angular-mocks": "github:angular/bower-angular-mocks@1.3.14",
    "angular-route": "github:angular/bower-angular-route@1.3.14",
    "angular/bower-angular-loader": "github:angular/bower-angular-loader@1.3.14",
    "components/html5-boilerplate": "github:components/html5-boilerplate@4.3.0",
    "h5bp/html5-boilerplate": "github:h5bp/html5-boilerplate@5.0.0",
    "github:angular/bower-angular-mocks@1.3.14": {
      "angular": "github:angular/bower-angular@1.3.14"
    },
    "github:angular/bower-angular-route@1.3.14": {
      "angular": "github:angular/bower-angular@1.3.14"
    }
  }
});

