/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/

import { ECSchemaRpcInterface } from "@itwin/ecschema-rpcinterface-common";
import { Viewer as WebViewer } from "@itwin/web-viewer-react";
import { useAuthorizationContext } from "../Authorization";

interface ViewerProps {
  iTwinId: string;
  iModelId: string;
}

export function Viewer({ iTwinId, iModelId }: ViewerProps) {
  const { client: authClient } = useAuthorizationContext();

  return (
    <WebViewer
      iTwinId={iTwinId}
      iModelId={iModelId}
      authClient={authClient}
      enablePerformanceMonitors={false}
      theme="light"
      backendConfiguration={{
        defaultBackend: {
          rpcInterfaces: [ECSchemaRpcInterface],
        },
      }}
    />
  );
}
