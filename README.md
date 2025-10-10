# Tampermonkey Plugins

A collection of Tampermonkey userscripts. Each plugin lives in its own directory with its related tests.

## Plugins

### [LinkedIn Feed Blocker](linkedin-feed-blocker/)

Redirects LinkedIn's home feed to a chosen profile while leaving other LinkedIn sections available.

#### Installation

1. Install the Tampermonkey browser extension in Chrome, Chromium, or Firefox.
2. Open the Tampermonkey dashboard and create a new script.
3. Copy the contents of [`linkedin-feed-blocker/linkedin-feed-blocker.user.js`](linkedin-feed-blocker/linkedin-feed-blocker.user.js) into the editor.
4. Set `TARGET_PROFILE` to the profile identifier from the LinkedIn profile URL.
5. Save the script and open or reload `https://www.linkedin.com/feed/`.

For example, for `https://www.linkedin.com/in/jane-doe/`, set the value to `jane-doe`.

## Repository layout

```text
tampermonkey-plugins/
├── README.md
└── linkedin-feed-blocker/
    ├── linkedin-feed-blocker.user.js
    └── tests/
        └── smoke.test.js
```

Each new plugin should follow the same structure: one directory for the plugin and a `tests/` directory for its tests.
