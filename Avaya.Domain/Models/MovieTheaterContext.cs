using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Avaya.Domain.Models
{
    public partial class MovieTheaterContext : DbContext
    {
        public MovieTheaterContext()
        {
        }

        public MovieTheaterContext(DbContextOptions<MovieTheaterContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Bill> Bill { get; set; }
        public virtual DbSet<BillDetail> BillDetail { get; set; }
        public virtual DbSet<Booking> Booking { get; set; }
        public virtual DbSet<BookingDetail> BookingDetail { get; set; }
        public virtual DbSet<CategoriesOfFilm> CategoriesOfFilm { get; set; }
        public virtual DbSet<Cinema> Cinema { get; set; }
        public virtual DbSet<FilmCategory> FilmCategory { get; set; }
        public virtual DbSet<FilmOnline> FilmOnline { get; set; }
        public virtual DbSet<Menu> Menu { get; set; }
        public virtual DbSet<Movie> Movie { get; set; }
        public virtual DbSet<NewsArticleCategories> NewsArticleCategories { get; set; }
        public virtual DbSet<NewsArticles> NewsArticles { get; set; }
        public virtual DbSet<NewsCategories> NewsCategories { get; set; }
        public virtual DbSet<NewsImage> NewsImage { get; set; }
        public virtual DbSet<ReservedSeat> ReservedSeat { get; set; }
        public virtual DbSet<Room> Room { get; set; }
        public virtual DbSet<RoomDetail> RoomDetail { get; set; }
        public virtual DbSet<SeatType> SeatType { get; set; }
        public virtual DbSet<Service> Service { get; set; }
        public virtual DbSet<ShowTime> ShowTime { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS;Database=MovieTheater;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.0-rtm-35687");

            modelBuilder.Entity<Bill>(entity =>
            {
                entity.Property(e => e.IdUser).HasColumnName("Id_User");

                entity.Property(e => e.Total).HasColumnType("numeric(18, 0)");
            });

            modelBuilder.Entity<BillDetail>(entity =>
            {
                entity.ToTable("Bill_Detail");

                entity.Property(e => e.IdBill).HasColumnName("Id_Bill");

                entity.Property(e => e.IdService).HasColumnName("Id_Service");

                entity.Property(e => e.Price).HasColumnType("numeric(18, 0)");

                entity.HasOne(d => d.IdBillNavigation)
                    .WithMany(p => p.BillDetail)
                    .HasForeignKey(d => d.IdBill)
                    .HasConstraintName("FK__Bill_Deta__Id_Bi__74AE54BC");
            });

            modelBuilder.Entity<Booking>(entity =>
            {
                entity.Property(e => e.IdRoom).HasColumnName("Id_Room");

                entity.Property(e => e.IdRoomDetail).HasColumnName("Id_Room_Detail");

                entity.Property(e => e.IdSeatType).HasColumnName("Id_Seat_Type");

                entity.Property(e => e.IdShowTime).HasColumnName("Id_ShowTime");

                entity.HasOne(d => d.IdRoomDetailNavigation)
                    .WithMany(p => p.Booking)
                    .HasForeignKey(d => d.IdRoomDetail)
                    .HasConstraintName("FK__Booking__Id_Room__40F9A68C");
            });

            modelBuilder.Entity<BookingDetail>(entity =>
            {
                entity.ToTable("Booking_Detail");

                entity.Property(e => e.Date).HasColumnType("datetime");

                entity.Property(e => e.IdCinema).HasColumnName("Id_Cinema");

                entity.Property(e => e.IdMovie).HasColumnName("Id_Movie");

                entity.HasOne(d => d.IdCinemaNavigation)
                    .WithMany(p => p.BookingDetail)
                    .HasForeignKey(d => d.IdCinema)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Booking_Detail_Cinema");

                entity.HasOne(d => d.IdMovieNavigation)
                    .WithMany(p => p.BookingDetail)
                    .HasForeignKey(d => d.IdMovie)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Booking_Detail_Movie");
            });

            modelBuilder.Entity<Cinema>(entity =>
            {
                entity.Property(e => e.Address).IsRequired();

                entity.Property(e => e.Name).IsRequired();
            });

            modelBuilder.Entity<FilmOnline>(entity =>
            {
                entity.Property(e => e.ImgUrl).IsUnicode(false);

                entity.Property(e => e.ReleaseDate).HasColumnType("date");
            });

            modelBuilder.Entity<Menu>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name).HasMaxLength(100);
            });

            modelBuilder.Entity<Movie>(entity =>
            {
                entity.Property(e => e.Name).IsRequired();

                entity.Property(e => e.Picture).IsRequired();
            });

            modelBuilder.Entity<NewsArticleCategories>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.NewsArticleId).HasColumnName("newsArticleID");

                entity.Property(e => e.NewsCategoryId).HasColumnName("newsCategoryID");

                entity.HasOne(d => d.NewsArticle)
                    .WithMany(p => p.NewsArticleCategories)
                    .HasForeignKey(d => d.NewsArticleId)
                    .HasConstraintName("fk_artiID");

                entity.HasOne(d => d.NewsCategory)
                    .WithMany(p => p.NewsArticleCategories)
                    .HasForeignKey(d => d.NewsCategoryId)
                    .HasConstraintName("fk_cataID");
            });

            modelBuilder.Entity<NewsArticles>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Author)
                    .HasColumnName("author")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate)
                    .HasColumnName("createdDate")
                    .HasColumnType("datetime");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasColumnType("text");

                entity.Property(e => e.Headline)
                    .IsRequired()
                    .HasColumnName("headline")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.LastModifiedDate)
                    .HasColumnName("lastModifiedDate")
                    .HasColumnType("datetime");

                entity.Property(e => e.Priority).HasColumnName("priority");

                entity.Property(e => e.PublishDate)
                    .HasColumnName("publishDate")
                    .HasColumnType("datetime");

                entity.Property(e => e.Source)
                    .HasColumnName("source")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Tags)
                    .HasColumnName("tags")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Text)
                    .IsRequired()
                    .HasColumnName("text")
                    .HasColumnType("text");
            });

            modelBuilder.Entity<NewsCategories>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<NewsImage>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ArticlePhotoId).HasColumnName("articlePhotoID");

                entity.Property(e => e.PhotoHeight).HasColumnName("photoHeight");

                entity.Property(e => e.PhotoUrl)
                    .HasColumnName("photoURL")
                    .HasColumnType("text");

                entity.Property(e => e.PhotoWidth).HasColumnName("photoWidth");

                entity.Property(e => e.Type).HasColumnName("type");

                entity.HasOne(d => d.ArticlePhoto)
                    .WithMany(p => p.NewsImage)
                    .HasForeignKey(d => d.ArticlePhotoId)
                    .HasConstraintName("fk_photo");
            });

            modelBuilder.Entity<ReservedSeat>(entity =>
            {
                entity.ToTable("Reserved_Seat");

                entity.Property(e => e.IdShowTime).HasColumnName("Id_ShowTime");

                entity.HasOne(d => d.IdShowTimeNavigation)
                    .WithMany(p => p.ReservedSeat)
                    .HasForeignKey(d => d.IdShowTime)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Reserved_Seat_Show_Time");
            });

            modelBuilder.Entity<Room>(entity =>
            {
                entity.Property(e => e.IdShowTime).HasColumnName("Id_ShowTime");

                entity.Property(e => e.Name).IsRequired();

                entity.HasOne(d => d.IdShowTimeNavigation)
                    .WithMany(p => p.Room)
                    .HasForeignKey(d => d.IdShowTime)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Room_Show_Time");
            });

            modelBuilder.Entity<RoomDetail>(entity =>
            {
                entity.ToTable("Room_Detail");

                entity.Property(e => e.Guid)
                    .HasColumnName("GUID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.IdRoom).HasColumnName("Id_Room");

                entity.Property(e => e.IdSeatType).HasColumnName("Id_Seat_Type");
            });

            modelBuilder.Entity<SeatType>(entity =>
            {
                entity.ToTable("Seat_Type");

                entity.Property(e => e.Type).IsRequired();
            });

            modelBuilder.Entity<Service>(entity =>
            {
                entity.Property(e => e.IdCinema).HasColumnName("Id_Cinema");

                entity.Property(e => e.Name).IsRequired();

                entity.Property(e => e.Price).HasColumnType("numeric(18, 0)");
            });

            modelBuilder.Entity<ShowTime>(entity =>
            {
                entity.ToTable("Show_Time");

                entity.Property(e => e.IdBookingDetail).HasColumnName("Id_BookingDetail");

                entity.Property(e => e.TimeEnd).HasColumnName("Time_End");

                entity.Property(e => e.TimeStart).HasColumnName("Time_Start");

                entity.HasOne(d => d.IdBookingDetailNavigation)
                    .WithMany(p => p.ShowTime)
                    .HasForeignKey(d => d.IdBookingDetail)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Show_Time_Booking_Detail");
            });
        }
    }
}
