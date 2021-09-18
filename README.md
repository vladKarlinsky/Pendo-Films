# Pendo Films

A simple films app.

## Summary 

:white_check_mark:Built using React Native - Cross Platform Framework (with Android in mind).   
:white_check_mark:The application includes all requested display features and screens: Main Screen, Movie Screen, Movie Cell, Navigation, and so on.  
:white_check_mark:Added Bonus Features: Search Screen and Search autocomplete suggestions.  
:white_check_mark:Designed the app using Pendo's brand colors for style points. :wink:

## Expo project

For fast hands-on testing: https://expo.dev/@vlad_k/pendo-films  
(Preferably with an Android device)

## Screenshots

More can be found here: https://imgur.com/gallery/3n89DK0

![alt text](https://i.imgur.com/XYMXzFM.png)

## Usage

```npm start```

## Navigation Structure

Root/  
├─ HomeStackScreen/  
│  ├─ MainScreen  
│  ├─ MovieScreen  
├─ SearchScreen/  

## If I had the time, what would I change?

:ballot_box_with_check:Implement a smarter keyword suggestion search using ``` debounce(func,[wait]) ``` and ``` useCallback(fn,[deps]) ``` or  
``` useMemo(() => fn, deps) ```.  
:ballot_box_with_check:Update the current method of fetching data in a way that keeps the secret API key confidential.    
:ballot_box_with_check:A bit more code refactoring.
