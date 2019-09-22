import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-offline-movie-search-view',
  templateUrl: './offline-movie-search-view.component.html',
  styleUrls: ['./offline-movie-search-view.component.scss']
})
export class OfflineMovieSearchViewComponent implements OnInit {

  listMovies: any = []

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  outputData(event) {
    //Call API
    console.log(event);
    // this.menuService.GetPost(event).subscribe(result=> {

    // });

    this.listMovies = [{
      id: 0,
      imgUrl: "http://www.lottecinemavn.com/Media/MovieFile/MovieImg/201908/10224_103_100002.jpg",
      address: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
      name: "Ngôi Nhà Bươm Bướm",
      time: "105 phút",
      decription: "“Ngôi Nhà Bươm Bướm” là bộ phim xoay quanh câu chuyện nên duyên của Hoàng (Liên Bỉnh Phát) và Mai (Hoàng Yến Chibi). Bằng sự khôn khéo và lém lĩnh, Mai đã thuyết phục được bố mẹ từ Bắc vào Nam để gặp gỡ và bàn chuyện cưới hỏi của cả hai. Mọi chuyện tưởng chừng sẽ rất êm đẹp cho đến khi cả hai bên gia đình đều bị phơi bày những bí mật “động trời” cùng sự khác biệt về mọi mặt. Điều gì sẽ cứu vãn được tình yêu nhiệt thành của tuổi trẻ và trao cho họ một cái kết đầy viên mãn?",
      showtime: "11:30 13:25 15:45 16:35",
    },
    {
      id: 1,
      imgUrl: "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/d/e/death_whisper_-_poster_2.jpg",
      address: "246 Nguyễn Hồng Đào, Tân Bình",
      name: "BẠN HỌC CÕI ÂM",
      time: "93 phút",
      decription: "Những ngày đầu tiên tại trường trung học của cậu nam sinh Alex chẳng khác gì địa ngục, khi nạn bắt nạt và bạo lực học đường diễn ra như cơm bữa. Sự xuất hiện của cô bạn Maggie khiến cho cuộc sống của Alex thú vị hơn hẳn. Cả hai sớm trở thành đôi bạn thân. Tuy nhiên, những sự việc kì lạ và kinh hoàng bắt đầu xảy ra. Đã có những cái chết được gây ra bởi những “bạn học cõi âm” khiến cho ngôi trường trở nên đáng sợ hơn bao giờ hết.",
      showtime: "11:30 13:25 15:45 16:35",
    },];
  }

}
