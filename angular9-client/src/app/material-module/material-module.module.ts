import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    imports: [
        CommonModule,

        MatSortModule,
        MatListModule,
        MatTooltipModule,
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatSnackBarModule
    ],
    exports: [
        MatSortModule,
        MatListModule,
        MatTooltipModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatSnackBarModule
    ],
})
export class MaterialModuleModule { }
