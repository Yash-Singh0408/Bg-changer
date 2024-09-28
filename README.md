# Color Picker App

This is a simple, interactive React-based color picker application. It allows users to change the background color of the screen by clicking on different color buttons. The app also features a responsive design, ensuring it works across a range of device sizes.

## Features

- **Dynamic Color Selection**: Change the background color of the entire screen by clicking one of the color buttons.
- **Responsive Design**: Styled with Tailwind CSS, the app adapts smoothly to different screen sizes, ensuring an optimal experience on all devices.
- **Variety of Colors**: Choose from 15 predefined color options, ranging from standard colors like red and blue to more unique colors like cyan and teal.

## How It Works

- The app leverages React's `useState` hook to track the current color selected by the user.
- When a button is clicked, the `onClick` event triggers a state update that changes the background color dynamically.
  
## Code Structure

### `App.js`

This file contains the main component for the app:

- **State Management**: Manages the selected color using React's `useState`.
- **Dynamic Styling**: The background color is applied directly via inline styling based on the state.
- **Color Buttons**: Each button represents a color, and clicking it triggers an update to the state.

### Available Colors

The following colors can be selected within the app:

- **Standard Colors**: Red, Blue, Green, Yellow, Purple, Pink, Orange, Black, White, Gray, Brown
- **Additional Colors**: Indigo, Cyan, Lime, Teal

## Dependencies

- **React**: A powerful JavaScript library used for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework that simplifies styling by providing pre-built classes.


