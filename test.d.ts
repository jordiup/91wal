yarn run v1.17.3
$ /Users/jordihermoso/code/93wal/node_modules/.bin/typegen https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.yaml
import {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios'; 

declare namespace Components {
  namespace Schemas {
    export interface Error {
      code: number; // int32
      message: string;
    }
    export interface Pet {
      id: number; // int64
      name: string;
      tag?: string;
    }
    export type Pets = Pet[];
  }
}
declare namespace Paths {
  namespace CreatePets {
    namespace Responses {
      export type Default = Components.Schemas.Error;
    }
  }
  namespace ListPets {
    namespace Parameters {
      export type Limit = number; // int32
    }
    export interface QueryParameters {
      limit?: Parameters.Limit; // int32
    }
    namespace Responses {
      export type $200 = Components.Schemas.Pets;
      export type Default = Components.Schemas.Error;
    }
  }
  namespace ShowPetById {
    namespace Parameters {
      export type PetId = string;
    }
    export interface PathParameters {
      petId: Parameters.PetId;
    }
    namespace Responses {
      export type $200 = Components.Schemas.Pet;
      export type Default = Components.Schemas.Error;
    }
  }
}

export interface OperationMethods {
  /**
   * listPets - List all pets
   */
  'listPets'(
    parameters?: Parameters<Paths.ListPets.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListPets.Responses.$200 | Paths.ListPets.Responses.$Default>
  /**
   * createPets - Create a pet
   */
  'createPets'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreatePets.Responses.$Default>
  /**
   * showPetById - Info for a specific pet
   */
  'showPetById'(
    parameters?: Parameters<Paths.ShowPetById.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ShowPetById.Responses.$200 | Paths.ShowPetById.Responses.$Default>
}

export interface PathsDictionary {
  ['/pets']: {
    /**
     * listPets - List all pets
     */
    'get'(
      parameters?: Parameters<Paths.ListPets.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListPets.Responses.$200 | Paths.ListPets.Responses.$Default>
    /**
     * createPets - Create a pet
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreatePets.Responses.$Default>
  }
  ['/pets/{petId}']: {
    /**
     * showPetById - Info for a specific pet
     */
    'get'(
      parameters?: Parameters<Paths.ShowPetById.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ShowPetById.Responses.$200 | Paths.ShowPetById.Responses.$Default>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
Done in 1.52s.
