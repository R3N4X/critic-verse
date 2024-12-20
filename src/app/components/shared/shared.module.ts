import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { LogoComponent } from './logo/logo.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileReviewsComponent } from './profile-reviews/profile-reviews.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { HelpComponent } from './help/help.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AdminFloatBtnComponent } from './admin-float-btn/admin-float-btn.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { UserListComponent } from './user-list/user-list.component';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { HomeCarouselSectionComponent } from './home-carousel-section/home-carousel-section.component';
import { ClasificationComponent } from './clasification/clasification.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CastingComponent } from './casting/casting.component';
import { ReviewOptionsComponent } from './review-options/review-options.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { UserOptionsComponent } from './user-options/user-options.component';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { AddQuestionSecurityComponent } from './add-question-security/add-question-security.component';
import { ContentListComponent } from './content-list/content-list.component';
import { AddNewContentComponent } from './add-new-content/add-new-content.component';
import { ContentOptionsComponent } from './content-options/content-options.component';
import { AddNewContentDetailsComponent } from './add-new-content-details/add-new-content-details.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    CustomInputComponent,
    CustomButtonComponent,
    ChangePasswordComponent,
    AccountDetailsComponent,
    NotificationsComponent,
    ProfileReviewsComponent,
    ConfigurationComponent,
    HelpComponent,
    AdminFloatBtnComponent,
    ReviewsListComponent,
    ReportsListComponent,
    UserListComponent,
    EditProfileComponent,
    AddReviewComponent,
    HomeCarouselSectionComponent,
    ClasificationComponent,
    ReviewsComponent,
    CastingComponent,
    ReviewOptionsComponent,
    AddNewUserComponent,
    UserOptionsComponent,
    AddQuestionSecurityComponent,
    ContentListComponent,
    AddNewContentComponent,
    AddNewContentDetailsComponent,
    ContentOptionsComponent,
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    CustomInputComponent,
    CustomButtonComponent,
    ChangePasswordComponent,
    AccountDetailsComponent,
    NotificationsComponent,
    ProfileReviewsComponent,
    ConfigurationComponent,
    HelpComponent,
    AdminFloatBtnComponent,
    ReviewsListComponent,
    UserListComponent,
    ReportsListComponent,
    ReactiveFormsModule,
    EditProfileComponent,
    AddReviewComponent,
    HomeCarouselSectionComponent,
    ClasificationComponent,
    ReviewsComponent,
    CastingComponent,
    ReviewOptionsComponent,
    AddNewUserComponent,
    UserOptionsComponent,
    AddQuestionSecurityComponent,
    ContentListComponent,
    AddNewContentComponent,
    AddNewContentDetailsComponent,
    ContentOptionsComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule,
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useValue: (() => {
        const paginatorIntl = new MatPaginatorIntl();
        paginatorIntl.itemsPerPageLabel = '';
        paginatorIntl.nextPageLabel = 'Siguiente';
        paginatorIntl.previousPageLabel = 'Anterior';
        paginatorIntl.getRangeLabel = (
          page: number,
          pageSize: number,
          length: number
        ) => {
          if (length === 0 || pageSize === 0) {
            return `1 de 1`;
          }
          const totalPages = Math.ceil(length / pageSize);
          return `${page + 1} de ${totalPages}`;
        };
        return paginatorIntl;
      })(),
    },
  ],
})
export class SharedModule {}
