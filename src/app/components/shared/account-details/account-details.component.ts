import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent implements OnInit {
  @Input() user!: User;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private alertController: AlertController,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (!this.user) {
      this.user = {
        id: '1',
        role: 'user',
        email: 'usuario@duocuc.cl',
        username: '_username69',
        password: '12345',
        birthdate: new Date('2003-01-10T12:00:00'),
        createdAt: new Date('2024-08-28T12:00:00'),
      };
    }
  }

  async deleteUser() {
    try {
      await this.userService.deleteUserByUsername(this.user.username);
      this.authService.logout();
      await this.modalController.dismiss();
      this.router.navigate(['/auth']);
    } catch (error) {
      if (error instanceof Error) {
        await this.showErrorAlert(error.message);
      }
    }
  }

  async showDeleteUserAlert() {
    const alert = await this.alertController.create({
      mode: 'ios',
      cssClass: 'custom-alert v2',
      header: '¿Estás seguro que deseas eliminar tu cuenta?',
      message:
        'Esta acción es irreversible y perderás tu cuenta permanentemente.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar mi cuenta',
          role: 'confirm',
          handler: async () => {
            await this.deleteUser();
          },
        },
      ],
    });

    await alert.present();
  }

  async showErrorAlert(message: string) {
    const alert = await this.alertController.create({
      mode: 'ios',
      cssClass: 'custom-alert v2',
      header: 'Error',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
