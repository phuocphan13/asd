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
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<ProductCinema> ProductCinema { get; set; }
        public virtual DbSet<Room> Room { get; set; }
        public virtual DbSet<RoomDetail> RoomDetail { get; set; }
        public virtual DbSet<SeatType> SeatType { get; set; }
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
                entity.Property(e => e.Total).HasColumnType("numeric(18, 0)");
            });

            modelBuilder.Entity<BillDetail>(entity =>
            {
                entity.Property(e => e.Price).HasColumnType("numeric(18, 0)");

                entity.HasOne(d => d.IdBillNavigation)
                    .WithMany(p => p.BillDetail)
                    .HasForeignKey(d => d.IdBill)
                    .HasConstraintName("FK_Bill_Detail_Bill");
            });

            modelBuilder.Entity<Booking>(entity =>
            {
                entity.HasOne(d => d.IdRoomNavigation)
                    .WithMany(p => p.Booking)
                    .HasForeignKey(d => d.IdRoom)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Booking_Room");

                entity.HasOne(d => d.IdRoomDetailNavigation)
                    .WithMany(p => p.Booking)
                    .HasForeignKey(d => d.IdRoomDetail)
                    .HasConstraintName("FK__Booking__IdRoomD__778AC167");

                entity.HasOne(d => d.IdSeatTypeNavigation)
                    .WithMany(p => p.Booking)
                    .HasForeignKey(d => d.IdSeatType)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Booking_SeatType");
            });

            modelBuilder.Entity<BookingDetail>(entity =>
            {
                entity.Property(e => e.Date).HasColumnType("datetime");

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
                entity.Property(e => e.Author)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).HasColumnType("text");

                entity.Property(e => e.HeadLine)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.LastModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.PublishDate).HasColumnType("datetime");

                entity.Property(e => e.Source)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Tags)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Text)
                    .IsRequired()
                    .HasColumnType("text");
            });

            modelBuilder.Entity<NewsCategories>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<NewsImage>(entity =>
            {
                entity.Property(e => e.PhotoUrl).HasColumnType("text");

                entity.HasOne(d => d.ArticlePhoto)
                    .WithMany(p => p.NewsImage)
                    .HasForeignKey(d => d.ArticlePhotoId)
                    .HasConstraintName("fk_photo");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.Name).IsRequired();
            });

            modelBuilder.Entity<ProductCinema>(entity =>
            {
                entity.Property(e => e.Price).HasColumnType("decimal(18, 0)");

                entity.HasOne(d => d.IdCinemaNavigation)
                    .WithMany(p => p.ProductCinema)
                    .HasForeignKey(d => d.IdCinema)
                    .HasConstraintName("FK__ProductCi__IdCin__7F2BE32F");

                entity.HasOne(d => d.IdProductNavigation)
                    .WithMany(p => p.ProductCinema)
                    .HasForeignKey(d => d.IdProduct)
                    .HasConstraintName("FK__ProductCi__IdPro__00200768");
            });

            modelBuilder.Entity<Room>(entity =>
            {
                entity.Property(e => e.Name).IsRequired();

                entity.HasOne(d => d.IdShowTimeNavigation)
                    .WithMany(p => p.Room)
                    .HasForeignKey(d => d.IdShowTime)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Room_Show_Time");
            });

            modelBuilder.Entity<RoomDetail>(entity =>
            {
                entity.Property(e => e.Guid)
                    .HasColumnName("GUID")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.IdProduct).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.IdProductNavigation)
                    .WithMany(p => p.RoomDetail)
                    .HasForeignKey(d => d.IdProduct)
                    .HasConstraintName("FK__RoomDetai__IdPro__02084FDA");
            });

            modelBuilder.Entity<SeatType>(entity =>
            {
                entity.Property(e => e.Type).IsRequired();
            });

            modelBuilder.Entity<ShowTime>(entity =>
            {
                entity.HasOne(d => d.IdBookingDetailNavigation)
                    .WithMany(p => p.ShowTime)
                    .HasForeignKey(d => d.IdBookingDetail)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Show_Time_Booking_Detail");
            });
        }
    }
}
