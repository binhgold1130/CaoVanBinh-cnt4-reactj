using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Cvblesson06.Models
{
    public class CvbSong
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage ="Cvb:Hãy nhập tiêu đề")]
        [DisplayName("Tiêu đề")]
        public string CvbTitle { get; set; }
        [Required(ErrorMessage = "Cvb:Hãy nhập tác giả")]
        [DisplayName("tác giả")]
        public string CvbAuthor { get; set; }
        [Required(ErrorMessage = "Cvb:hãy nhập nghệ sĩ")]
        [StringLength(50,MinimumLength =2,ErrorMessage ="Cvb:tên nghệ sĩ có ít nhất 2 kí tự ,tối đa 50 kí tự")]
        [DisplayName("nghệ sĩ")]
        public int CvbArtist { get; set;}
        [Required(ErrorMessage = "Cvb:Hãy nhập Năm xuất bản")]
        [RegularExpression("@[0-9]",ErrorMessage ="Cvb:Nhập xuất bản phải có 2 kí tự số")]
        [Range(1900,2024,ErrorMessage ="Cvb:Năm xuất bản trong khoảng 1900-2004")]
        [DisplayName("Năm xuất bản")]
        public int CvbYearRelease { get;}
            

    }
}