/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

import { is } from 'bpmn-js/lib/util/ModelUtil';

import BpmnModdle from 'bpmn-moddle';

import CamundaBpmnModdle from 'camunda-bpmn-moddle/resources/camunda';


export async function getDefinitions(xml) {
  const moddle = new BpmnModdle({
    camunda: CamundaBpmnModdle,
  });

  const { rootElement: definitions } = await moddle.fromXML(xml);

  return definitions;
}

function extractFlowElementsOfType(rootElement, type, flowElements) {
  rootElement.flowElements.forEach((element) => {
    if (is(element, type)) {
      flowElements.push(element);
    }
    if (element.flowElements) {
      flowElements = extractFlowElementsOfType(element, type, flowElements);
    }
  });
  return flowElements;
}

/**
 * Return all elements of a given type in a diagram,
 * and an empty array if none exist.
 *
 * @param {String} xml
 * @param {String} type
 *
 * @return {Array<Object>} a list of elements matching the type
 */
export async function getAllElementsByType(xml, type) {
  const definitions = await getDefinitions(xml);
  const processes = definitions.rootElements.filter((e) => is(e, 'bpmn:Process'));
  let flowElements = [];

  processes.forEach((process) => {
    if (process.flowElements) {
      flowElements = extractFlowElementsOfType(process, type, flowElements);
    }
  });

  return flowElements;
}