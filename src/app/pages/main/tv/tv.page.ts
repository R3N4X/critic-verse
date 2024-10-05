import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { TvShow } from 'src/app/types/tv';
import { ratingDescription } from 'src/utils/rating-desc';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.page.html',
  styleUrls: ['./tv.page.scss'],
})
export class TvPage implements OnInit {
  tvList: TvShow[] = [];
  isLoading: boolean = true;

  constructor(private dbService: DbService) {}

  ngOnInit() {
    this.loadTvShows();
  }

  async loadTvShows() {
    try {
      this.isLoading = true;
      this.tvList = await this.dbService.getTvShows();
    } catch (error) {
      console.error('Error loading tv shows:', error);
    } finally {
      this.isLoading = false;
    }
  }

  getRatingDescription = ratingDescription;
}
