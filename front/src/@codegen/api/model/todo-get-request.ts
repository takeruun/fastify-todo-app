/* tslint:disable */
/* eslint-disable */
/**
 * Fastify todo api
 * Fastify todo api Swagger
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface TodoGetRequest
 */
export interface TodoGetRequest {
    /**
     * 
     * @type {string}
     * @memberof TodoGetRequest
     */
    'userId': string;
    /**
     * 
     * @type {string}
     * @memberof TodoGetRequest
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof TodoGetRequest
     */
    'description'?: string;
}
