# geekyrn-cli

## Installation

```
npm install -g geekyrn-cli
```

## Usage

### To create a React Native App

Creates a React Native Application with installed dependencies and basic Login, SignUp and Home screens.

```
geekyrn init <project name>
```

### To add a splash screen to the created React Native project

Select an image that you want to set as the splash screen image. The image should be in png format. Migrate to the project directory and run the command with the entire path to the image.

```
cd <project name>
geekyrn add-splashscreen <path to image>
```

### To create a type in Mobx state store

Creates a model in store.

```
cd <project name>
geekyrn create-type <type name>
```