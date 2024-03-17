import { NgModule } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

const modules: any[] = [ConfirmDialogModule];
const services: any[] = [ConfirmationService, MessageService];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
  providers: [...services],
})
export class PrimengModule {}
