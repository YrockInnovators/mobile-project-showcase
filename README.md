# One Piece Character Database App

Simple project to showcase react-native, ruby on rails and PostgreSQL

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites 

I only have a Windows machine available so below steps will only be applicable if you will deploy a mobile app in Android:

```
1. Install NodeJS 10.0+ or higher in your local machine.
2. Install PostgreSQL 10.0+ or higher in your local machine.
3. Install Rails 5.1, Ruby 2.3.3+ and RubyDevKit in your local machine.
4. Install React Native 0.56.
5. Install Android Studio 3.0.1 (If you don't prefer a device for testing you can use Android Emulator)
```

### Installation

## 1. PostgreSQL
```
Create a database and name it as listsserver
Note that you can name your database to your prefer but you need to edit configuration in rails.  
```

## 2. Rails 5.1
```
cd listserver on command prompt press enter.
bundle install on command prompt press enter.
```

```
if you want to customize your own database edit /config/database.yml on this section:

default: &default
  adapter: postgresql
  encoding: unicode
  port: <port number> -- edit this one
  username: <db username> --edit this one
  password: <db password> --edit this one

development:
  <<: *default
  database: <db name> --edit this one

```

```
run db:migrate to bind rails model to postgreSQL
```

I used rake faker to put one piece data on the database

```
run db:seed to insert 10 records to your database environment
```

### 2.1. Run the server
```
run rails s command on your project server project folder
```


### 2.2. GET Request
```
/api/v1/items
/api/v1/items?name=<character name>
```

## 3. React Native
Ensure you install the react-native cli first in your npm
```
npm install -g react-native-cli
cd mobilelists on command prompt
run npm install
```
### 3.1 Run build
Since im using my local machine as a server you need to edit /components/CharacterScreen.js with below section to consume the API on your device:
```
http://<local machine ipaddress>:<port>/api/v1/items?name=...
```

```
run react-native run-android on the project folder terminal
```
## Screenshots
![test](https://github.com/YrockInnovators/mobile-project-showcase/blob/master/screenshots/screen1.png =250x250)

## Resources

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
