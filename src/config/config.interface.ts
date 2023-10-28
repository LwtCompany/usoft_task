/**
 * Configuration for the database connection.
 */
export interface ConfigDBData {
  url?: string;
}
export interface ConfigAuthorizationData {
  baseUrl: string;
  serviceClientToken: string;
}
/**
 * Configuration data for the app.
 */
export interface ConfigData {
  /**
   * The name of the environment.
   * @example 'production'
   */
  env: string;
  db: ConfigDBData;
  logLevel: string;
  /** The New Relic key to use. */
  newRelicKey?: string;
}