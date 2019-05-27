import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule} from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        MatSidenavModule,
        MatIconModule, 
        MatListModule,
        MatToolbarModule,
        MatButtonModule


    ],
    exports: [
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatButtonModule

    ],
    providers: []
})



export class MaterialModule {}