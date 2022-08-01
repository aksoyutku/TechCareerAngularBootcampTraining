import { Injectable } from '@angular/core';

@Injectable()
export class ToastrNameService {
    getToastrNames() {
        return ToastNames;
    }
}

let ToastNames = [
    {
        id: 1,
        name: "Success",
        buttonDesc: "Show Sucsess Toaster",
        cardId: "sucsess",
        buttonId: "sucsess-button"
    },
    {
        id: 2,
        name: "Info",
        buttonDesc: "Show Info Toaster",
        cardId: "info",
        buttonId: "info-button"
    },
    {
        id: 3,
        name: "Warning",
        buttonDesc: "Show Warning Toaster",
        cardId: "warning",
        buttonId: "warning-button"
    },
    {
        id: 4,
        name: "Error",
        buttonDesc: "Show Error Toaster",
        cardId: "error",
        buttonId: "error-button"
    },
];