# Flixors TV Show Search Application

Flixors is an informational website where users can search for their favorite tv shows to find out information on them

# Structure

Flixors was made with React.js library, along with Jest/Enzyme for testing, and Axios for API calls.

React was chosen for this app for its simpliciy and efficiency. This is a very simple SPA without complicated database interactions. Primarly the app is concerned with the View component in MVC and purely displaying info without modifying it. React specializes in easy display and update of the  in SPA with its Virtual DOM.

# Design

## App
App is the primary component that governs the state and transmission of that state throughout its child components. Leaving all state information solely in App allows the site to have one source of information. This way when setState is called the children will recieve the new state. If the children have their own states based on their parent states, the changes don't happen in sync and the rendering of one may not force the other to change causing lots of issues on update. This way eveytime there is a change, every component is aware of it and gets the changed info. App has two children: Header and ShowDisplay.

## Header
Header governs the items in the page header at the top of the screen. Namely a Logo button for returning to the main page from a search result and a SearchBar for searching specific shows.

## SearchBar
SearchBar handles the update of text in the search box, the triggering of a search and page change, and the Axios GET calls to the API. Using callback functions from App it updates the state of App

## ShowDisplay
ShowDisplay is for everything displayed in the main portion of the screen. By default it shows a list of the shows provided to it by App. As long as page is false, it will only show the list of ShowBlock items. Should page be false, ShowDisplay will present the ShowInfo instead.

## ShowBlock
This is to represent a specific show's image and title. They may be clicked on to change page state to true and making ShowDisplay render that specific show's ShowInfo page.

## ShowInfo
This displays the information for the specified show. Things such as its poster, name, episode count, and overview.