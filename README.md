# Color generator

A simple color generator application built with React, allowing users to generate random HEX color codes and copy them directly to their clipboard.

## Project Setup

1. **Clone the repository:** `git clone https://github.com/FunChosa/color-generator.git`
2. **Navigate to the project directory:** `cd color-generator`
3. **Install dependencies:** `npm install`
4. **Start the development server:** `npm run dev`

## Features

* Generate Random Colors: Click a button to generate a new random HEX color code. The color is displayed visually and as a HEX code.
* Copy to Clipboard: Easily copy the generated HEX color code to your clipboard with a single click.
* Theme Switching: Toggle between light and dark themes to personalize your experience.


## Technology Stack

* React: ^18.3.1
* Vite: ^5.4.10
* React icons: ^5.3.0
* React toastify: ^10.0.6
* Use local storage: ^3.0.0

## State Management

The application's state is managed using the `useState` hook.

## Data Storage

Theme persistence is handled via local storage, while generated color codes are copied to the system clipboard using the browser’s native clipboard API.

## Deployment

The application is deployed on Netlify: https://funchosa-color-generator.netlify.app

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
