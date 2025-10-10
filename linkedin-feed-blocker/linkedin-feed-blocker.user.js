// ==UserScript==
// @name         LinkedIn Feed Blocker
// @namespace    linkedin-feed-blocker
// @version      2.0.0
// @description  Redirects the LinkedIn feed to a chosen profile.
// @match        https://www.linkedin.com/*
// @match        https://linkedin.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Change only this value to redirect the feed to another LinkedIn profile.
  const TARGET_PROFILE = "your-linkedin-profile";
  const REDIRECT_URL = `https://www.linkedin.com/in/${TARGET_PROFILE}/`;

  function isFeedPath(pathname) {
    return pathname === "/feed" || pathname.startsWith("/feed/");
  }

  function redirectFromFeed() {
    if (isFeedPath(window.location.pathname)) {
      window.location.replace(REDIRECT_URL);
    }
  }

  function observeNavigation() {
    for (const method of ["pushState", "replaceState"]) {
      const original = history[method];
      history[method] = function (...args) {
        const result = original.apply(this, args);
        redirectFromFeed();
        return result;
      };
    }

    window.addEventListener("popstate", redirectFromFeed);
  }

  redirectFromFeed();
  observeNavigation();
})();
