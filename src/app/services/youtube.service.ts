import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class YoutubeService {

  private youTubeUrl: string = 'https://www.googleapis.com/youtube/v3';
  private apiKey: string = 'AIzaSyCZyGw1ZFEV0vVqA0DgzPHtsvgjwsxVwbo';
  private playList: string = 'UUuaPTYj15JSkETGnEseaFFg';

  private nextPageToken: string = '';

  constructor( public http: Http) { }

  getVideos() {
    let url = `${this.youTubeUrl}/playlistItems`;

    let params = new URLSearchParams();
    params.set('part', 'snippet');
    params.set('maxResults', '10');
    params.set('playlistId', this.playList);
    params.set('key', this.apiKey );

    return this.http.get(url, {search: params})
                .map(res => {
                  console.log(res.json());
                  this.nextPageToken = res.json().nextPageToken;

                  let videos: any[] = [];
                  for (let item of res.json().items ) {
                    let video = item.snippet;
                    videos.push(video);
                  }

                  return videos;
                });
  }

}
