/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly IMJS_URL_PREFIX?: string;
  readonly IMJS_ITWIN_ID?: string;
  readonly IMJS_IMODEL_ID?: string;
  readonly IMJS_AUTH_AUTHORITY: string;
  readonly IMJS_AUTH_CLIENT_CLIENT_ID: string;
  readonly IMJS_AUTH_CLIENT_SCOPES: string;
  readonly IMJS_AUTH_CLIENT_REDIRECT_URI: string;
  readonly IMJS_AUTH_CLIENT_LOGOUT_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
