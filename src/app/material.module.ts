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
import { MatOptionModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import { MatCardModule } from '@angular/material';


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
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatGridListModule,
        MatTabsModule,
        MatButtonToggleModule,
        MatCardModule
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
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatTabsModule,
        MatGridListModule,
        MatButtonToggleModule,
        MatCardModule

    ],
    providers: []
})



export class MaterialModule {}