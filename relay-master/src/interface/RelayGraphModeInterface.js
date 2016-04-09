/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayGraphModeInterface
 * @typechecks
 * @flow
 */

'use strict';

import type {PageInfo} from 'RelayConnectionInterface';
import type {Call, DataID} from 'RelayInternalTypes';

export type CacheKey = string;

export type GraphModePayload = Array<GraphOperation>;
export type GraphOperation =
  PutRootOperation |
  PutNodesOperation |
  PutEdgesOperation;
export type PutRootOperation = {
  op: 'putRoot',
  field: string;
  identifier: mixed;
  root: ?(GraphRecord | GraphReference);
};
export type PutNodesOperation = {
  op: 'putNodes';
  nodes: {[dataID: DataID]: GraphRecord};
};
export type PutEdgesOperation = {
  op: 'putEdges';
  args: Array<Call>;
  edges: Array<?GraphRecord>;
  pageInfo: PageInfo;
  range: {
    __key: CacheKey;
  };
};

export type GraphRecord = {[storageKey: string]: ?GraphValue};
export type GraphReference = {
  __ref: DataID;
};
export type GraphScalar = (
  boolean |
  number |
  string |
  GraphRecord |
  GraphReference
);
export type GraphValue = (
  GraphScalar |
  Array<?GraphScalar>
);

const RelayGraphModeInterface = {
  CACHE_KEY: '__key',
  FRAGMENTS: '__fragments__',
  REF_KEY: '__ref',

  // Operation types
  PUT_EDGES: 'putEdges',
  PUT_NODES: 'putNodes',
  PUT_ROOT: 'putRoot',
};

module.exports = RelayGraphModeInterface;
