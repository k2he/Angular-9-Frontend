// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    
    apiPath: "https://www.kaihe.duckdns.org/api",
  
    DEFAULT_AUTH_URL: 'http://www.kaihe.duckdns.org/api/login',
    GOOGLE_AUTH_URL: 'https://www.kaihe.duckdns.org/api/oauth2/authorize/google?redirect_uri=https://www.kaihe.duckdns.org/home',
    FACEBOOK_AUTH_URL: 'https://www.kaihe.duckdns.org/api/oauth2/authorize/facebook?redirect_uri=https://www.kaihe.duckdns.org/home',
    GITHUB_AUTH_URL: 'http://www.kaihe.duckdns.org/api/oauth2/authorize/github?redirect_uri=https://www.kaihe.duckdns.org/home',
  // 
};
  