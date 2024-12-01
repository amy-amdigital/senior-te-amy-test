
# senior-te-amy-test

## Set Up

Clone this repository and follow the instructions below to get the tests up and running.

### Install Node.js and npm

This guide uses `npm` and `npx` commands.

- `npx` is bundled with `npm`, which comes with Node.js.

Download and install Node.js from the [official Node.js website](https://nodejs.org/). This installation will automatically include npm and npx.

### Verify the Installation

After installing Node.js, verify the installation by running the following commands in your terminal (Command Prompt, PowerShell, or Visual Studio's integrated terminal):

These commands should output the installed versions of Node.js, npm, and npx.

### Using npx in Visual Studio

1. Open the integrated terminal in Visual Studio by navigating to **View > Terminal**.
2. You can now run any `npx` command directly from the terminal in Visual Studio.

## Running the Tests

1. **Install Dependencies**: Ensure you have installed all required packages by running:
    ```
    npm install
    ```

2. **Install Playwright**: Install Playwright by running:
    ```
    npx playwright install
    ```

3. **Generate Test Files**: To ensure you have the latest version of your tests, run:
    ```
    npx bddgen
    ```
    This will generate test files for each feature file.

4. **Run the Tests**: To run the tests, execute:
    ```
    npx playwright test
    ```
    To view the tests in the Playwright UI, run:
    ```
    npx playwright test --ui
    ```
