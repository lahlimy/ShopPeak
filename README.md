# ShopPeak

A frontend marketplace app for selling used items, built with React and React Native.

## Project Structure

The project comprises four packages that leverage npm Workspaces for code sharing:

- **app:** React Native app
- **server:** Express JavaScript server
- **common:** Shared code between the app and server
- **controller:** Components shared between the app and server

## Installation

1. Clone the project:

    ```bash
    git clone https://github.com/lahlimy/ShopPeak.git
    ```

2. Navigate into the project folder:

    ```bash
    cd ShopPeak
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the server with `npm start` in `packages/scripts`.

2. Run `npm start` in `packages/app` to launch the app.

## Features

1. User registration and login on the app.
2. Deployment of backend and frontend.
3. Password recovery on the app.
4. Creating listings on the app.
5. Viewing listings on the app.
6. Logout functionality.
