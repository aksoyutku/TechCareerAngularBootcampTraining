import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterServiceMethods {

  constructor(private toaster: ToastrService) { }

  successToaster() {
    this.toaster.success('This is success toastr...')
  }
  infoToaster() {
    this.toaster.info('This is info toastr...')
  }
  warningToaster() {
    this.toaster.warning('This is warning toastr...')
  }
  errorToaster() {
    this.toaster.error('This is error toastr...')
  }
}