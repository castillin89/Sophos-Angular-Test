import { MatDialogConfig, MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { isUndefined } from 'util';

export abstract class UtilComponent {

  snackTime = 2000;

  userData;

  errorMessage = ``;

  constructor(private dialog?: MatDialog, private snackBar?: MatSnackBar, private route?: Router) { }

  afterCloseDialog(data) { }

  action(event) { }

  openDialog(component, dataDialog?, classDialog?) {
    const dialogConfig = new MatDialogConfig();

    if (!isUndefined(dataDialog['close'])) {
      dialogConfig.disableClose = dataDialog['close'];
    } else {
      dialogConfig.disableClose = false;
    }

    dialogConfig.autoFocus = true;
    if (!isUndefined(dataDialog)) {
      dialogConfig.data = dataDialog;
    }

    if (classDialog) {
      dialogConfig.panelClass = classDialog;
    }

    const dialogRef = this.dialog.open(component, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.afterCloseDialog(data);
      }
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  openSnackBar(snackMessage, cssClass?, snackAction?, idAction?, time?) {
    if (isUndefined(snackAction)) {
      snackAction = "";
    }
    let snackBarRef = this.snackBar.open(snackMessage, snackAction, {
      duration: time ? time : this.snackTime,
      panelClass: cssClass ? cssClass : ""
    });
    snackBarRef.onAction().subscribe(() => {
      this.snackBarTriggered({ action: idAction });
    });
  }

  snackBarTriggered(data) { }

  getErrorMessage(fieldFormGroup) {
    const ERROR = fieldFormGroup.errors;
    let message = '';
    if (!isUndefined(ERROR['required'])) {
      message = 'Debe ingresar este campo';
    } else if (
      !isUndefined(ERROR['minlength']) ||
      !isUndefined(ERROR['maxlength']) ||
      !isUndefined(ERROR['pattern'])
    ) {
      message = 'Número inválido';
    }
    return message;
  }

}
