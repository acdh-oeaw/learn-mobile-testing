# Mobile Testing Demo

This repository demonstrates the importance of mobile testing for web applications and provides an introduction to various testing methods.

## Installation

1. **Clone the project:**
   ```sh
   git clone <repository-url>
   cd mobile-testing-demo
   ```
2. Install dependencies:
   ```sh
   pnpm install
   ```
3. Start the development server:
   ```sh
   pnpm run serve
   ```

## Testing the Application

### 1. Testing on your own smartphone in the same network

1. Find the IP address of your development server:

   ```sh
   ifconfig # or ipconfig on Windows
   ```

   Look for your computer's local IP address (e.g., 192.168.0.10).

2. Test on your smartphone:

   Connect your smartphone to the same Wi-Fi network.
   Open the browser on your smartphone and navigate to **`http://<your-ip>:8080`**.

### 2. Simulation and emulation

#### Chrome DevTools Device Mode

The DevTools in Chrome are probably well-known. They provide an easy simulation of various screen sizes and user agents which makes it easy to test responsive layouts without the need for additional software. However, they do not emulate real devices and their specific limitations.

#### Emulators

- [Google's Android Emulator](https://developer.android.com/studio/run/emulator?hl=de)
- [Genymotion (another Android Emulator)](https://www.genymotion.com/product-desktop/)
- iPhone emulators are harder to find. If you are working on a Mac, you can use [Xcode](https://developer.apple.com/documentation/xcode/running-your-app-in-simulator-or-on-a-device) to simulate an iPhone or try [QEMU](https://www.qemu.org/)

### 3. Testing with [Browserstack](https://www.browserstack.com/)

Browserstack is a cloud-based testing platform that allows you to test your web applications across a wide range of real devices and browsers. This ensures that your application works seamlessly for all users, regardless of the device or browser they use.

1. Create a Browserstack account.

   There is a free trial and also an option to apply for **free unlimited access** when you are working on **Open Source** projects.

2. Open Browserstack Live

   Select _Live_ from the Dashboard and choose your desired device and browser (**Note:** Firefox does not seem to support local testing yet).

3. Navigate to your website

   Wait for the device to boot and navigate to your website using your local IP address 127.0.0.1.

4. An Error 😨

   Browserstack will display a notification and ask you to install their [Local Desktop App](https://www.browserstack.com/support/faq/local-testing/setup/how-to-setup-a-connection-for-local-testing). While running, the app sets up a tunnel from your PC to the remote device you are working on, allowing you to use your local IP address.

5. You should now be able to open your Web App on the remote device.

### 4. Test automation with Browserstack

You can even combine Browserstack with Playwright tests and run them remotely on real devices. Regarding phones, iOS devices are currently not supported for automated tests, but Android deviced as well as Windows and Mac work fine.

This reposititory contains a small example test case. In order to run it, you will have to add your browserstack credentials to the `browserstack.yml` file or set them as local environment variables as described [here](https://www.browserstack.com/docs/automate/playwright/getting-started/nodejs/integrate-your-tests-sdk#set-browserstack-credentials-cli). You can then run the tests using the command

```sh
pnpm run test
```

The results are summarized under [https://automate.browserstack.com/](https://automate.browserstack.com/). There is even a short video for each test case on the corresponding device.
