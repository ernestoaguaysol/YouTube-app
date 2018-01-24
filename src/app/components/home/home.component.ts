import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public videos: any[] = [];
  public videoSel: any;

  constructor( public _youtubeService: YoutubeService) {
    this._youtubeService.getVideos()
                    .subscribe( videos => this.videos = videos);
   }

  ngOnInit() {
  }

  verVideo(video: any) {
    this.videoSel = video;
    console.log(this.videoSel);
    
    $('#exampleModal').modal();
  }

  cerrarModal() {
    this.videoSel = null;
    $('#exampleModal').modal('hide');
  }

  cargarMas() {
    this._youtubeService.getVideos()
                .subscribe( videos => this.videos.push.apply(this.videos, videos));
  }

}
