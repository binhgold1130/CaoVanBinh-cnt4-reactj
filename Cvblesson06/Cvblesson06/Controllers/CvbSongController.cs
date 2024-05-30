using Cvblesson06.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Cvblesson06.Controllers
{
    public class CvbSongController : Controller
    {
        private static List<CvbSong> CvbSongs = new List<CvbSong>()
        {
            new CvbSong{Id=221090091,CvbTitle="Cao Văn Bình ",CvbAuthor="K22CNTT4",},
            new CvbSong{Id=221090091,CvbTitle="Cao Văn Bình ",CvbAuthor="K22CNTT4",},

        };

        // GET: CvbSong
        /// Hiển thị bài hát
        /// author: Cao Văn Bình
        /// </summary>
        /// <returns></returns>
        public ActionResult CvbIndex()
        {
            return View(CvbSongs);
        }
        /// get :Cvbcreate
        /// <summary>
        /// form thêm mới bài hát
        /// author: Cao Văn Bình
        ///</summary>
        /// <summary></summary>
        public ActionResult Cvbcreate()
        {
            var CvbSong = new CvbSong ();
            return View(CvbSong);

        }
    }
}