import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatTableModule} from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule } from '@angular/material'


@NgModule({
    declarations: [],
    imports: [
        MatSidenavModule,
        MatIconModule, 
        MatListModule,
        MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule
        


    ],
    exports: [
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule
        

    ],
    providers: []
})



export class MaterialModule {}