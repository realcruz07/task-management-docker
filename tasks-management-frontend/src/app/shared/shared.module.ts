import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ReactiveFormsModule } from '@angular/forms';

const modulesToExport = [
  CommonModule,
  NzButtonModule,
  NzGridModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [...modulesToExport],
  exports: [...modulesToExport],
})
export class SharedModule {}
