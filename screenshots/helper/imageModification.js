/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */


 const { app, BrowserWindow } = require('electron');

const BROWSER_FRAME = `<html>
<head>
<style>
:root {
  --light-grey: #f2f2f3;
  --dark-grey: #606060;
}

.browser-frame {
  display: inline-block;
}

.browser-frame__container {
  box-shadow: 5px 10px 8px var(--light-grey);
  border: 2px solid var(--light-grey);
  border-radius: 5px;
}

.browser-frame__header {
  height: 30px;
  width: 100%;
  background-color: var(--light-grey);
}

.button {
  height: 13px;
  width: 13px;
  background-color: var(--dark-grey);
  border-radius: 50%;
  display: inline-block;
  margin-top: 7px;
  margin-left: 4px;
}
</style>
</head>
<body>
  <div class="browser-frame browser-frame__container">
    <div class="browser-frame browser-frame__header">
      <span class="button button__grey"></span>
      <span class="button button__grey"></span>
      <span class="button button__grey"></span>
    </div>
    <br/>
  <div class="browser-frame browser-frame__imgContainer" >
    <img src="!IMG" />
  </div>
</div>
</div>
</body>
</html>`

function embedInBrowserframe(imgPath) {
  const dataURI = `data:application/dataurl,${BROWSER_FRAME
    .replace('!IMG', imgPath)}`;
}

module.exports = embedInBrowserframe;
