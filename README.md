# Country Chrome Extension

A chrome extension that displays your country name and city based on your current IP Address. It is built using `Plasmo`, `TypeScript`, and `Tailwind CSS`.

This project is a [Plasmo extension](https://docs.plasmo.com/) bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

---

## :fire: Demo

A [demo](Demo%20(Chrome%20Extension).mp4) is included in the repository. If you are unable to access the video, you can visit [here](https://drive.google.com/file/d/1nLhB3BAANvOBkIfPu-0RPKpMd1pmhF_v/view?usp=sharing) to see the demo.

---

## ✅ Guidelines to run web app locally

To run the application locally, follow these guidelines:

1. Configure environment variables in your `.env` file located in the root directory. Add the following variable:

    ```
    PLASMO_PUBLIC_IPINFO_API_TOKEN=<value>
    ```

    > You can obtain the API key by signing up at https://ipinfo.io/.

2. Install the dependencies using either of the following commands:

    ```bash
    npm install
    ```

    or

    ```bash
    pnpm install
    ```

3. Run the development server using either of the following commands:

    ```bash
    pnpm dev
    ```

    or

    ```bash
    npm run dev
    ```

4. Open your browser and load the appropriate development build. For example, if you are developing for the Chrome browser using manifest v3, load the following path: `build/chrome-mv3-dev`.

5. For further guidance on loading the extension in the Chrome browser, refer to the official [Plasmo documentation](https://docs.plasmo.com/framework#loading-the-extension-in-chrome).

6. To start editing the popup, modify the `popup.tsx` file. Any changes you make should auto-update the extension. To add an options page, create an `options.tsx` file in the root directory and export a default React component. Similarly, to add a content page, create a `content.ts` file, import the necessary module, and perform the required logic. Make sure to reload the extension in your browser after making these changes.

7. For further guidance, visit the [Plasmo documentation](https://docs.plasmo.com/).

---

## Making production build

To create a production bundle for your extension, follow these steps:

1. Run either of the following commands:

    ```bash
    pnpm build
    ```

    or

    ```bash
    npm run build
    ```

2. This will generate a production bundle of your extension, which can be zipped and published to the stores.

---

## How this works

1. First, obtain the user's IP address:
    - Call a REST API to retrieve the user's IP address, with the response format in JSON.
    - Use the API from https://www.ipify.org/ (signup not required).

2. Get the country and city from the IP address:
    - Use the API from https://ipinfo.io/ (sign up required).
    - An access token is required for this API, which you'll receive after signing up.
    - Store the access token as a sensitive data in the `.env` file. Ensure that this file is not committed to GitHub. Refer to [Plasmo documentation](https://docs.plasmo.com/framework/env) for more information on managing environment variables.

3. Parse the country and city from the API response and display them on the extension's popup as "Your country is {country} and city is {city}".

---

## <img src="https://user-images.githubusercontent.com/74038190/221857984-5bf77e81-6f65-4502-a7c8-f29a978efb3f.png" alt="bullseye" width="35" /> Frameworks & Tools

<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" /> 
<img src="https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white" />

---

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action, make sure to build your extension and upload the first version to the store to establish the basic credentials. Once done, follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!

