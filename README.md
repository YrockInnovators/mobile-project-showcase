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

I used Faker to put one-piece data on the database

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
https://github.com/YrockInnovators/mobile-project-showcase/blob/master/screenshots/screen1.png
https://github.com/YrockInnovators/mobile-project-showcase/blob/master/screenshots/screen2.png
https://github.com/YrockInnovators/mobile-project-showcase/blob/master/screenshots/screen3.png
https://github.com/YrockInnovators/mobile-project-showcase/blob/master/screenshots/screen4.png

## Deploy

Download signed apk here:

https://github.com/YrockInnovators/mobile-project-showcase/blob/master/onepiece.apk

## Resources

* [PostgreSQL](https://www.postgresql.org/) - Database I used
* [RubyonRails](http://railsinstaller.org/en) - Backend framework I used
* [ReactNative](https://facebook.github.io/react-native/) - Frontend framework I used
* [GemFaker](https://github.com/stympy/faker) - Sample records I populated to my database

## Versioning

Build 1.0

## Authors

* **Joel Dacuma** - *Initial work*

## Comments

* Happy Coding!
