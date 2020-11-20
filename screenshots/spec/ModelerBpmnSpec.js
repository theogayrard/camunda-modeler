/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

const path = require('path');

const createModeler = require('../helper/createModeler');

const embedInBrowserframe = require('../helper/imageModification');


/*
* Covers screenshots for documentation in camunda-docs-manual/content/modeler/bpmn/img
*/
describe('camunda-docs-manual/content/modeler/bpmn/img screenshots', function() {

  this.timeout(30000);

  let modeler;

  afterEach(async () => {
    await modeler.close();
  });


  it('quickstart-1.png', async () => {

    // given
    modeler = await createModeler();

    // when
    await modeler.click('[title="Create diagram options"]');

    await modeler.mouseOver('.dropdown > .item', 0, 0);

    // then
    await modeler.takeScreenshot('quickstart-1.png', {
      x: 0,
      y: 0,
      width: 300,
      height: 150
    });
  });

  it('quickstart-2.png', async () => {

    // given
    const diagramPaths = [
      path.join(__dirname, '../fixtures/bpmn/diagram_2.bpmn')
    ];
    const config = '../fixtures/user-data/config_2.json';

    modeler = await createModeler(diagramPaths, config);

    // when
    await modeler.click('[data-element-id="invoiceValidGateway"]');

    // then
    await modeler.takeScreenshot('quickstart-2.png', { });
    //embedInBrowserframe(path.join(__dirname, '../quickstart-2.png'));
  });

});
