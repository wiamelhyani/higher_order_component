interface IWebClientAppEnvironment {
  AUTH_API_URL: string | undefined;
}

export const environment: IWebClientAppEnvironment = {
  AUTH_API_URL: process.env.NEXT_PUBLIC_API_URI,
};
