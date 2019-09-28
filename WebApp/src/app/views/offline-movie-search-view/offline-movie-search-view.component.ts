import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-offline-movie-search-view',
  templateUrl: './offline-movie-search-view.component.html',
  styleUrls: ['./offline-movie-search-view.component.scss']
})
export class OfflineMovieSearchViewComponent implements OnInit {

  listMovies: any = []

  constructor(private menuService: MenuService,
    private movieService: MovieService) { }

  ngOnInit() {
  }

  outputData(event) {
    // this.movieService.GetListMovies(event).subscribe(result => {
    //  this.listMovies = result;
    //   //Logic
    // });

    // this.listMovies = [{
    //   id: 0,
    //   imgUrl: "http://www.lottecinemavn.com/Media/MovieFile/MovieImg/201908/10224_103_100002.jpg",
    //   link: "https://www.google.com",
    //   name: "Ngôi Nhà Bươm Bướm",
    //   time: "105 phút",
    //   decription: "“Ngôi Nhà Bươm Bướm” là bộ phim xoay quanh câu chuyện nên duyên của Hoàng (Liên Bỉnh Phát) và Mai (Hoàng Yến Chibi). Bằng sự khôn khéo và lém lĩnh, Mai đã thuyết phục được bố mẹ từ Bắc vào Nam để gặp gỡ và bàn chuyện cưới hỏi của cả hai. Mọi chuyện tưởng chừng sẽ rất êm đẹp cho đến khi cả hai bên gia đình đều bị phơi bày những bí mật “động trời” cùng sự khác biệt về mọi mặt. Điều gì sẽ cứu vãn được tình yêu nhiệt thành của tuổi trẻ và trao cho họ một cái kết đầy viên mãn?",
    //   showtime: "11:30 13:25 15:45 16:35",
    // },
    // {
    //   id: 1,
    //   imgUrl: "http://www.lottecinemavn.com/Media/MovieFile/MovieImg/201908/10224_103_100002.jpg",
    //   link: "https://www.google.com",
    //   name: "Ngôi Nhà Bươm Bướm",
    //   time: "105 phút",
    //   decription: "“Ngôi Nhà Bươm Bướm” là bộ phim xoay quanh câu chuyện nên duyên của Hoàng (Liên Bỉnh Phát) và Mai (Hoàng Yến Chibi). Bằng sự khôn khéo và lém lĩnh, Mai đã thuyết phục được bố mẹ từ Bắc vào Nam để gặp gỡ và bàn chuyện cưới hỏi của cả hai. Mọi chuyện tưởng chừng sẽ rất êm đẹp cho đến khi cả hai bên gia đình đều bị phơi bày những bí mật “động trời” cùng sự khác biệt về mọi mặt. Điều gì sẽ cứu vãn được tình yêu nhiệt thành của tuổi trẻ và trao cho họ một cái kết đầy viên mãn?",
    //   showtime: "11:30 13:25 15:45 16:35",
    // },];
  }

}
