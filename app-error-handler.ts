import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler{
    handleError(error){
        alert('Unexpected apperrorhandler error occured');
        console.log(error);

    }
}