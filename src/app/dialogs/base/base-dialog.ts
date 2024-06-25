import { MatDialogRef } from "@angular/material/dialog";

export class BaseDialog<DialogComponnet> {
    constructor(public dialogRef: MatDialogRef<DialogComponnet>) {

    }
    close(){
        this.dialogRef.close();
    }
}
