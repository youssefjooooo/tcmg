import styles from "@/components/about/About.module.css";
import Image from "next/image";

import CardContent from "@/components/about/CardContent";
import LineCard from "@/components/about/LineCard";
import CardImg from "@/components/about/CardImg";
import VisionImg from "@/components/about/VisionImg";
import VisonCard from "@/components/about/VisonCard";
import Link from "next/link";
import AboutSlider from "@/components/about/AboutSlider";

const cardInfo = [
  {
    year: "1986",
    title: "إطلاق مكتب المحامي محمد أبو ضيف الأول بالأسكندرية",
    desc: "في مارس من عام 1986 قام المحامي محمد أبو ضيف بتأسيس أول مكتب محاماة باتخاذ مقر له في مدينة الإسكندرية، ليكون شعار المكتب الأول توفير الحماية القانونية للموكلين",
  },
  {
    year: "1996",
    title: "إطلاق المكتب الثاني في قلب مدينة القاهرة",
    desc: "تم إفتتاح مكتبنا الثاني للمحاماة والاستشارات القانونية في مدينة القاهرة الكبري ليصبح المقر الرئيسي للمكتب في قلب المدينة وذلك لنوسع من نطاق أعمالنا في كافة المدن المصرية",
  },
  {
    year: "2005",
    title: "بناء فريق عمل متكامل من أكبر المحامين والمستشارين",
    desc: "إستقطب المكتب نخبة من أكبر محامين مصر والمتخصصين في مجالات القانون المختلفة رافعًا شعار تقديم مستوى جديد من الحلول القانونية عالية المستوى بطريقة فريدة ومبتكرة",
  },
  {
    year: "2008",
    title: "الإطلاق الأول للمجموعة التجارية والبحرية للمحاماة",
    desc: "تم إطلاق المجموعة التجارية والبحرية للمحاماة بكل قوة بغرض تقديم خدمات قانونية بمعايير عالمية المستوى لخدمة العملاء الكرام على الصعيد المحلي والدولي وسعياً من فريق العمل بأن تصبح أكبر مكتب محاماة دولي في مصر.",
  },
  {
    year: "2016",
    title: "الاحتفال بمرور 30 عاماً من العطاء القانوني",
    desc: "احتفل المكتب بمرور 30 عاماً من العطاء القانوني للعملاء الكرام من الأفراد والشركات والمؤسسات في مصر والشرق الأوسط وبكون المجموعة أعرق مكتب محاماة مصري يدعم الموكلين منذ 1986 في كل المدن المصرية والعربية.",
  },
  {
    year: "2020",
    title: "بروتوكول تعاون دولي مع مكتب زايد الشحي بالإمارات",
    desc: "بدء المكتب بروتوكول تعاون دولي مع مكتب المحامي زايد الشحي في دبي بالإمارات العربية المتحدة بغرض التوسع في العطاء القانوني في مصر والشرق الأوسط، ولكي يصبح مكتبنا أحد أفضل مكاتب المحاماة الدولية في مصر.",
  },
  {
    year: "2023",
    title: "بروتوكول تعاون دولي مع الجبار و المزارقة للمحاماة",
    desc: "بدء المكتب بروتوكول تعاون دولي مع الجبار و المزارقة للمحاماة في الرياض بالمملكة العربية السعودية بغرض التوسع في العطاء القانوني في مصر والشرق الأوسط، ولكي يصبح مكتبنا أحد أفضل مكاتب المحاماة الدولية في مصر.",
  },
  {
    year: "2024",
    title: "بروتوكول تعاون دولي مع شركة سيتشوان ينجلينج هيشي للمحاماة",
    desc: `
    بدء المكتب بروتوكول تعاون دولي مع سيتشوان ينجلينج هيشي
    في الصين بتشغندو بغرض التوسع في العطاء القانوني على النطاق الدولي،
    ولكي يصبح مكتبنا أحد أفضل مكاتب المحاماة الدولية في مصر.
  `,
  },
];

const visionData = [
  {
    title: "التوسع علي النطاق المحلي",
    desc: "نفخر أننا حققنا أولى طموحتنا بالتوسع في مصر وفتح فروع في القاهرة والإسكندرية وتوصيل خدماتنا القانونية لأكبر عدد ممكن من العملاء, أفرادًا أو شركاتٍ أو أي كيان قانوني آخر. باعتبارنا أحد مكاتب المحاماة الرائدة في مصر بمعايير عالمية المستوى.",
    path: "/assets/images/visionimg1.png",
  },
  {
    title: "التوسع على النطاق الإقليمي",
    desc: "قمنا بتنسيق بروتوكولات تعاون دولية عدة مع مكاتب وشركات محاماة دولية رائدة من الدول العربية كالمملكة العربية السعودية والإمارات العربية المتحدة والكويت وقطر والاردن وعمان وغيرها من الدول العربية الشقيقة. ونتطلع لزيادة التعاون ليشمل شتى بقاع دول العالم لخدمة موكلينا وتسهيل الإجراءات القانونية عليهم.",
    path: "/assets/images/visionimg2.png",
  },
  {
    title: "التوسع على النطاق الدولي",
    desc: "بعد تحقيق رؤيتنا في التوسع على النطاق الإقليمي ونشر رسالتنا, سنبدأ برسم خطتنا سعيًا لتوسيع نطاق خدماتنا القانونية في جميع دول العالم, وذلك من خلال فتح فروع جديدة؛ للاستجابة لطلبات عملائنا المتزايدة من الأفراد والشركات من العملاء الأجانب, أو العملاء العرب الذين يمارسون أعمالهم في مختلف أنحاء العالم.",
    path: "/assets/images/visionimg3.png",
  },
  {
    title: "رفع معدل فاعلية الحلول القانونية",
    desc: `نؤمن بأن العمل الجدي هو الركيزة الأساسية التي تسعى إليها المجموعة التجارية والبحرية منذ تاريخ نشأتها.
    وهي تكمن في إعطاء الحلول القانونية المتكاملة لعملائها، بشكل فريد ومتميز وغير تقليدي.`,
    path: "/assets/images/visionimg4.png",
  },
  {
    title: "تحسين مستوى العمل الداخلي والخارجي",
    desc: "استطاعت المجموعة من خلال سنوات من التناضل والممارسة، أن تضع آلية في حل القضايا القانونية لعملائها والتعامل معها. ومنها الالتزام بمبدأ التكامل والتفاوض إذا تطلب الأمر ذلك. وبمرور سنوات من الخبرة العملية والقانونية على أرض الواقع، اكتسبت المجموعة النهج الصحيح، والأسس العلمية الممنهجة، لمباشرة الأعمال القانونية خارج جمهورية مصر العربية وداخلها.",
    path: "/assets/images/visionimg5.png",
  },
  {
    title: "تسهيل الحلول القضائية لعملائنا",
    desc: "نسعى جاهدين لأجل بناء رؤية كاملة لمستقبل مليء بالطموح والأهداف المحددة. رؤيتنا تكمن في تسهيل الحلول القضائية للعملاء، ومباشرة الإجراءات القانونية وخدمة مصالحهم وأهدافهم.",
    path: "/assets/images/visionimg6.png",
  },
  {
    title: "رفع معايير جودة خدماتنا القانونية",
    desc: "نسعى دائما لرفع معايير الجودة لدينا وتقديم الخدمات القانونية المختلفة بشكل متطور ممتزج بخبراتنا التي تجاوزت الثلاثة عقود. نهدف لأن نصبح شركة محاماة مصرية رائدة في مصر والشرق الأوسط.",
    path: "/assets/images/visionimg7.png",
  },
  {
    title: "تعزيز مبادئ العدالة والمساواة",
    desc: "يمثل مسعانا الأول وطموحنا الأسمى من تأسيس مكاتبنا, هو تأصيل معنى العدالة في كافة أرجاء مصر والوطن العربي, باسترجاع الحقوق المسلوبة وحمايتها والحفاظ عليها ضد أي اعتداء خارجي.",
    path: "/assets/images/visionimg8.png",
  },
];

function AboutUs() {
  return (
    <div className={styles.about}>
      <AboutSlider/>
      <section className={styles.absection}>
        <div className={styles.aboutparent}>
          <div className={styles.aboutcontent}>
            <h2>من هي المجموعة التجارية والبحرية للمحاماة ؟</h2>
            <p>
              المجموعة التجارية والبحرية للمحاماة والاستشارات القانونية, هي أحد
              مكاتب المحاماة الكبيرة في مصر صاحبة الريادة في مجال المحاماة
              والقانون بخبرة محامين ومستشارين بما يزيد عن 30 عامٍ من التعلم
              والممارسة, وتحقيق سلسلة لا تنتهي من النجاحات المتوالية, بما يثبت
              كفائتنا في تطبيق القانون ونشر العدالة في مصر والشرق الأوسط أجمع.
            </p>
          </div>
          <div className={styles.boximg}>
            <Image
              src="/assets/symbols/gtop.png"
              alt="Group for Commercial and Maritime Law logo"
              width={140}
              height={141}
              className={styles.img}
            />
            <Image
              src="/assets/symbols/s.png"
              alt="Symbol representing legal excellence"
              width={140}
              height={141}
              className={styles.img2}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.parent}>
          <CardContent
            year={cardInfo[0].year}
            title={cardInfo[0].title}
            desc={cardInfo[0].desc}
          />
          <LineCard />
          <CardImg path="/assets/images/alex.png" />
        </div>
        <div className={styles.parent}>
          <CardImg path="/assets/images/cairo.png" />
          <LineCard />
          <CardContent
            year={cardInfo[1].year}
            title={cardInfo[1].title}
            desc={cardInfo[1].desc}
          />
        </div>
        <div className={styles.parent}>
          <CardContent
            year={cardInfo[2].year}
            title={cardInfo[2].title}
            desc={cardInfo[2].desc}
          />
          <LineCard />
          <CardImg path="/assets/images/building.png" />
        </div>
        <div className={styles.parent}>
          <CardImg path="/assets/images/space.png" />
          <LineCard />
          <CardContent
            year={cardInfo[3].year}
            title={cardInfo[3].title}
            desc={cardInfo[3].desc}
          />
        </div>
        <div className={styles.parent}>
          <CardContent
            year={cardInfo[6].year}
            title={cardInfo[6].title}
            desc={cardInfo[6].desc}
          />
          <LineCard />
          <CardImg path="/assets/images/anniversary.png" />
        </div>
        <div className={styles.parent}>
          <CardImg path="/assets/images/Maskgroup.png" />
          <LineCard />
          <CardContent
            year={cardInfo[5].year}
            title={cardInfo[5].title}
            desc={cardInfo[5].desc}
          />
        </div>
        <div className={styles.parent}>
          <CardContent
            year={cardInfo[6].year}
            title={cardInfo[6].title}
            desc={cardInfo[6].desc}
          />
          <LineCard />
          <CardImg path="/assets/images/anniversary2.png" />
        </div>
        <div className={styles.parent}>
          <CardImg path="/assets/images/Maskgroup2.png" />
          <LineCard />
          <CardContent
            year={cardInfo[7].year}
            title={cardInfo[7].title}
            desc={cardInfo[7].desc}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.centerHeading}>رؤيتنا للمستقبل</h2>
        <div className={styles.parentvision}>
          <div className={styles.vision}>
            <VisonCard
              visionContentstyle="visioncontent"
              title={visionData[0].title}
              desc={visionData[0].desc}
            />
            <VisionImg imgStyle="imgleft" path={visionData[0].path} />
          </div>
          <div className={styles.vision}>
            <VisionImg imgStyle="imgright" path={visionData[1].path} />
            <VisonCard
              visionContentstyle="visioncontentleft"
              title={visionData[1].title}
              desc={visionData[1].desc}
            />
          </div>
          <div className={styles.vision}>
            <VisonCard
              visionContentstyle="visioncontent"
              title={visionData[2].title}
              desc={visionData[2].desc}
            />
            <VisionImg imgStyle="imgleft" path={visionData[2].path} />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.centerHeading}>
          الهدف والمهمة الراسخين منذ تاريخ النشأة
        </h2>
        <div className={styles.parentvision}>
          <div className={styles.vision}>
            <VisonCard
              visionContentstyle="visioncontent"
              title={visionData[3].title}
              desc={visionData[3].desc}
            />
            <VisionImg imgStyle="imgleft" path={visionData[3].path} />
          </div>
          <div className={styles.vision}>
            <VisionImg imgStyle="imgright" path={visionData[4].path} />
            <VisonCard
              visionContentstyle="visioncontentleft"
              title={visionData[4].title}
              desc={visionData[4].desc}
            />
          </div>
          <div className={styles.vision}>
            <VisonCard
              visionContentstyle="visioncontent"
              title={visionData[5].title}
              desc={visionData[5].desc}
            />
            <VisionImg imgStyle="imgleft" path={visionData[5].path} />
          </div>
          <div className={styles.vision}>
            <VisonCard
              visionContentstyle="visioncontent"
              title={visionData[6].title}
              desc={visionData[6].desc}
            />
            <VisionImg imgStyle="imgleft" path={visionData[6].path} />
          </div>
          <div className={styles.vision}>
            <VisionImg imgStyle="imgright" path={visionData[7].path} />
            <VisonCard
              visionContentstyle="visioncontentleft"
              title={visionData[7].title}
              desc={visionData[7].desc}
            />
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        
          <h2 className={styles.headingTeam}>فريقنا من المحامين والمستشارين الخبراء</h2>
        
        <div className={styles.team}>
          <p>
            فريق العمل الناجح هو الإنجاز الأكثر أهمية في أي عمل وبشكل خاص في
            مجال المحاماة, فهو يمثل فرصة مميزة لتبادل الخبرات ومشاركة المعلومات
            الحديثة, وتحقيق أكبر عدد ممكن من الإنجازات بما يحقق من هدف مكاتبنا
            وتوصيل رسالة العدالة لأكبر عدد ممكن من المواطنين المصريين والعرب
            أجمعين, يضم مكتبنا نخبة من أكبر وأشهر محامين مصر خبرة في شتى مجالات
            القانون, مستعدون لتقديم أفضل ما لديهم دعمًا لعملائنا الكرام بتقديم
            أنسب الحلول لجميع المشاكل القانونية بما فيها الأكثر تعقيدًا.
          </p>
          <Link href="#" className={styles.abLink}>
            مشاهدة كامل فريق العمل
            <Image
              src="assets/icons/arrow-left.svg"
              alt="Arrow Left Small"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.teamParent}>
          <div className={styles.teamCard}>
            <div className={styles.teamCardContainer}>
              <span className={styles.teamCardIcon}>
                <Image
                  src="assets/symbols/hand.svg"
                  width={30}
                  height={30}
                  alt="Symbol of a hand"
                />
              </span>
              <p>
                العدالة ليست مجرد مفهوم مجرد, بل هي هدف ومسعى أرغب بتحقيقه على
                أكبر نطاق ممكن؛ فأنا أمثل صوت المظلوم بالدفاع عنه ضد أي اعتداء
                خارجي؛ استرجاعًا لحقوقه المسلوبة, وحفاظًا عليها.
              </p>
            </div>
            <div className={styles.teamCardBottomData}>
              <div>
                <p>الاستاذ محمد أبو ضيف</p>
                <span>الرئيس التنفيذي</span>
              </div>
              <Image
                src="/assets/images/mohamed.png"
                width={60}
                height={60}
                alt="Profile picture of Mohamed Abu Deif"
              />
            </div>
          </div>
          <div className={styles.teamCard}>
            <div>
              <div className={styles.teamCardTopData}>
                <div>
                  <p>أستاذة سهى خيري</p>
                  <span>محامية بنوك</span>
                </div>
                <Image
                  src="/assets/images/soha.png"
                  width={60}
                  height={60}
                  alt="Profile picture of soha"
                />
              </div>
              <div className={styles.teamCardContainer}>
                <span>
                  <Image
                    src="assets/symbols/hand.svg"
                    width={20}
                    height={20}
                    alt="Symbol of a hand"
                  />
                </span>
                <p>
                  مهنة المحاماة ليست مجرد تقاضي كما يعتقد البعض؛ فأنا أسعى
                  جاهدةً لتَولِّي مهمة إتمام الإجراءات القانونية مع البنوك
                  والمصارف, بمساعدة جميع الكيانات من الأفراد والشركات والمؤسسات
                  في مسائلها المالية وإنجازها تمامًا كما يقول القانون.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.teamCard}>
            <div className={styles.teamCardContainer}>
              <span className={styles.teamCardIcon}>
                <Image
                  src="assets/symbols/hand.svg"
                  width={30}
                  height={30}
                  alt="Symbol of a hand"
                />
              </span>
              <p>
                أمثل الدعم القانوني من الجانبين في التماثل دفاعًا عن حقوق
                الشركات خاصة الصغيرة, وتقديم الدعم والمتابعة الدائمة منذ بداية
                تأسيس الشركة حتى الانتهاء من إتمام الإجراءات القانونية وأمور
                التوثيق؛ ساعيًا لمساعدة رجال الأعمال والمبتدئين على ممارسة عملهم
                بناءً على أساس قانوني راسخ.
              </p>
            </div>
            <div className={styles.teamCardBottomData}>
              <div>
                <p>أستاذ كرم موريس</p>
                <span>محامي شركات</span>
              </div>
              <Image
                src="/assets/images/Karim.png"
                width={60}
                height={60}
                alt="Profile picture of Karim Mores"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.owner}>
        <div className={styles.ownerImg}>
          <Image
            src="/assets/images/mohamedabudaif.png"
            className={styles.img}
            width={450}
            height={450}
            alt="mohamed abu daif"
          />
        </div>
        <div className={styles.ownerInfo}>
          <p>
            نسعى لأن نكون الأفضل بفضل جهود خبرائنا في خدمة العملاء الكرام، ونهدف
            للتقدم على الصعيد المحلي والإقليمي والعالمي بسبب إيماننا القوي
            بخبرات فريقنا القانوني ورغبتنا الجامحة في رفع شعار جديد للحلول
            القانونية.
          </p>
          <div className={styles.ownerInfoHeading}>
            <h3>المستشار محمد أبو ضيف</h3>
            <span>المؤسس والرئيس التنفيذي</span>
          </div>
        </div>
      </section>

      <section className={styles.numbers}>
        <div>
          <span>7</span>
          <p>مكاتب محاماه اقليمية</p>
        </div>
        <div>
          <span>+50</span>
          <p>سنين الخبرة</p>
        </div>
        <div>
          <span>40</span>
          <p>عدد الخبراء</p>
        </div>
        <div>
          <span>300</span>
          <p>العملاء</p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
