/**
 * this is pojo at cliet side to 
 * store the response coming from
 * the server..............
 * This is not service layer 
 * so no need to registered inside
 * app.module.ts file
 */
export class AppResponse {
      public status:string;      
      public message:string;      
}