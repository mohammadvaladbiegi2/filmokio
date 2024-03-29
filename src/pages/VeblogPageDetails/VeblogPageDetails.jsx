import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWeblogsFromServer } from "../../Redux/stors/WeblogsReduce";
export default function VeblogPageDetails() {
  const { id } = useParams();
  const { AllWeblogs } = useSelector((state) => state.Weblogs);
  const dispatch = useDispatch();
  const [WeblogDetails, setWeblogDetails] = useState(null);

  useEffect(() => {
    dispatch(getWeblogsFromServer());
    let main = AllWeblogs.find((weblog) => weblog.id === Number(id));
    setWeblogDetails(main);
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <img
        src={WeblogDetails?.image}
        alt=""
        className="object-cover h-[737px] w-full "
      />
      <div className="overlay absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black to-transparent "></div>
      <h1 className="absolute bottom-[50%] left-0 right-0 block text-center  text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        {WeblogDetails?.title}
      </h1>
      <h1 className="absolute bottom-[40%] left-0 right-0 block text-center  text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        تست Description
      </h1>
      <div className="bg-[#0c1012] w-[80%] h-auto left-[10.5%] p-5 rounded-lg mt-[-150px] z-10 absolute flex flex-col gap-7">
        <span className="text-[#f2f2f2] font-medium text-justify block leading-9">
          سال ۲۰۲۳ روزهای پایانی‌اش را سپری می‌کند و این روزها، بهترین زمان برای
          مرور و بررسی بهترین آثار منتشر شده در هرژانر از مدیوم‌های مختلف سرگرمی
          به شمار می‌رود. در جریان سال جاری میلادی، عناوین متعدد و برجسته‌ای در
          تمامی ژانرهای حوزه سینما در دسترس اشخاص قرار گرفتند که موفق شدند تا
          ضمن جلب رضایت منتقدین، با استقبال قابل توجهی نیز از جانب مخاطبین مواجه
          شوند. از این رو تصمیم گرفتیم تا در این مطلب به سراغ ژانر اکشن رفته و
          پنج فیلم برتر اکشن و هیجان انگیز در ماه‌های گذشته را معرفی کنیم. برکسی
          پوشیده نیست که امسال، بازه زمانی بسیار خوبی برای طرفداران این دسته از
          فیلم‌ها بود و آثار متعددی نظیر نسخه جدید فرنچایز Fast & Furious، فیلم
          Guardians of the Galaxy Vol. 3 یا فیلم The Killer در دسترس قرار
          گرفتند. با این حال، تمامی موارد مطرح شده در این مطلب با در نظر داشتن
          نظر سنجی‌های صورت گرفته در شبکه‌های اجتماعی و همچنین لیست‌های رسمی
          منتشر شده توسط رسانه‌هایی نظیر ددلاین و کولایدر کنار یک‌دیگر قرار داده
          شده‌اند و عدم حضور یک عنوان به خصوص در میان آن‌ها، الزاما به معنی
          پایین بودن سطح کیفی آن اثر نیست. در ادامه با معرفی پنج فیلم برتر ژانر
          اکشن در سال ۲۰۲۳ همراه ما باشید.
        </span>
        <div>
          <img
            src="/filmokio/images/chris-hemsworth-extraction-1536x864.jpg"
            className="rounded-lg object-cover"
            alt=""
          />
        </div>
        <span className="text-white font-medium text-justify block leading-9">
          پس از تجربه مرگ و بازگشت به زندگی، تایلر ریک با نقش آفرینی کریس همسورث
          (Chris Hemsworth) این‌بار می‌بایست راهی ماجراجویی جدیدی به منظور نجات
          زندگی یک زن و فرزندش شود و آن‌ها را از دست همسرش که یه قاچاقچی بزرگ
          موارد مخدر است، نجات دهد. با این حال، طولی نمی‌شد که سم در طول این
          مسیر متوجه ارتباطات موجود میان اهدافش و زندگی گذشته‌اش می‌شود و همه
          چیز برایش به نوعی جنبه شخصی پیدا می‌کند. مشابه با فیلم نخست فرنچایز،
          سم هارگریو (Sam Hargrave) به عنوان کارگردان فیلم The Extraction 2
          مجددا موفق به خلق لحظات و صحنه‌های اکشن نفس‌گیری شده است. فیلم مملو از
          سکانس‌های مبارزه‌ای است و برای لحظه‌ای اجازه پلک زدن به مخاطبش را
          نمی‌دهد. همچنین باید خاطر نشان کرد که یکی از بخش‌های هیجان انگیز فیلم
          به مدت ۱۴ دقیقه بدون هرگونه کات و به صورت پیوسته فیلمبرداری شده و بعید
          است که مخاطبین به یک بار تماشای آن بسنده کنند.
        </span>
        <div>
          <img
            src="/filmokio/images/thecovenant-1536x864.jpg"
            className="rounded-lg object-cover"
            alt=""
          />
        </div>
        <span className="text-white font-medium text-justify block leading-9">
          پس از آن‌که جان ویک با بازی کیانو ریوز (Keanu Reeves) یکی از اعضا حاضر
          در های تیبل را در نسخه‌های پیشین به قتل رساند، ماکوس د گارمونت با نقش
          آفرینی بیل اسکارشگرد (Bill Skarsgard) از جانب اعضا بالا رده سازمان
          قاتلین حرفه‌ای مامور می‌شود تا یک بار برای همیشه جان را از بین ببرد.
          به همین منظور، جان مجددا می‌بایست تمام تلاشش را به کار بگیرد تا پیش از
          آن‌که دشمنان موفق به کشتنش شوند، تمامی آن‌ها را از مسیرش بردارد. مطابق
          انتظار، فیلم John Wick: Chapter 4 به کارگردانی چاد استاهلسکی (Chad
          Stahelski) مملو از صحنه‌های مبارزه‌ای و اکشن نفس‌گیر است که به مخاطب
          خود اجازه می‌دهد تا برای بازه زمانی بیش از دو ساعت از مبارزات هیجان
          انگیز شخصیت محبوبش نهایت لذت را ببرد.
        </span>
        <div>
          <img
            src="/filmokio/images/john-wick-chapter-4-1536x864.jpg"
            className="rounded-lg object-cover"
            alt=""
          />
        </div>
        <span className="text-white font-medium text-justify block leading-9">
          فیلم جدید فرنچایز ماموریت غیرممکن لحظه‌ای آغاز می‌شود که یوجین کتریج
          با بازی هنری زرنی (Henry Czerny)، مدیر سابق سازمان IMF با پیشنهاد
          جدیدی به سراغ پروتاگونیست محبوب این مجموعه، ایتن هانت با نقش آفرینی
          تام کروز (Tom Criuse) می‌رود. هدف اصلی آن‌ها متوقف کردن یا نابودسازی
          یک هوش مصنوعی بسیار خطرناک و قدرت‌مند است و برای تحقق این امر آن‌ها
          نیازمند یافتن دو کلید به خصوص هستند. همانطور که از فیلم‌های این
          فرنچایز انتظار می‌رود، فیلم Mission: Impossible – Dead Reckoning Part
          One نیز برای لحظه‌ای اجازه کاهش میزان هیجان و آدرنالین را به مخاطب خود
          نمی‌دهد و داستان به نسبت عمیق‌تر و گسترده‌تری را در قیاس با گذشته برای
          اشخاص روایت می‌کند. کریستوفر مک کوآری (Christopher McQuarrie) از
          هم‌اکنون به مخاطبین وعده افزایش هرچه بیشتر میزان هیجان اتفاقات در نسخه
          بعدی این مجموعه را داده و اذعان داشته است که هیچ شخصی نمی‌تواند آن‌چه
          که در مسیر ایتن و دوستانش قرار دارد را پیش بینی کند!
        </span>
      </div>
    </div>
  );
}
