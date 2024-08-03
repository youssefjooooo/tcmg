import Image from "next/image";
import styles from "./page.module.css";

function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>
            المجموعة التجارية والبحرية للمحاماة اختيارك الأول لدعم قانوني قوي
          </h1>
          <p>
            خبرة متراكمة, تقنيات مبتكرة ونتائج فعّالة: مزايا يتمتع بها محامين
            ومستشارين المكتب؛ خدمةً للحق القانوني وتحقيقًا للعدالة, بمستوى متطور
            من الخدمات القانونية الشاملة وأعمال الشركات.
          </p>
        </div>
      </section>
      <section className={styles.carousel}>
        <div className={styles.caroChild}>
          <h2>استشارات قانونية بمعايير عالمية المستوى</h2>
          <div>
            <p>
              بخبرة قانونية واسعة، نقدم استشارات قانونية لجميع العملاء من أيدي
              نخبة من أكفأ المحامين المتمرسين وأفضل الشركاء  بمستوى جديد من
              الحلول القانونية المتكاملة. اطلب الآن استشارة قانونية فورية وتواصل
              مع أفضل مستشار قانوني واحصل على الدعم القانوني لحل قضاياك وتحقيق
              أهدافك.
            </p>
            <Image
              src="assets/symbols/bottomL.svg"
              alt="Bottom L"
              width={130}
              height={100}
            />
          </div>
          <div>
            <span>
              اطلب الأن أستشارة فورية
              <Image
                src="assets/icons/arrow-left.svg"
                alt="Arrow Left Small"
                width={20}
                height={20}
              />
            </span>
          </div>
        </div>
        <div className={styles.caroChild}>
          <h2>مكتب محاماة دولي بمعايير أداء عالمية</h2>
          <div>
            <p>
              بتعد المجموعة التجارية والبحرية أكبر مكتب محاماة دولي في مصر، وهذا
              يرجع لحجم القضايا الكبير التي تسلمها المكتب، والعملاء الدوليين
              والمحليين الذين تعاملوا معنا، بالإضافة إلى حجم وقوة العلاقات
              العامة وبروتوكولات التعاون المرتبطة بالمكتب. وقد اتخد المكتب مقره
              الرئيسي في قلب مدينة القاهرة ليكون منارة لتحقيق الأهداف القانونية
              لكافة عملائنا الكرام. تواصل الآن مع أفضل شركة محاماة رائدة في مصر.
            </p>
            <Image
              src="assets/symbols/topL.svg"
              alt="Bottom L"
              width={130}
              height={100}
            />
          </div>
          <div>
            <span>
              تواصل معنا عبر البريد الإلكتروني
              <Image
                src="assets/icons/arrow-left.svg"
                alt="Arrow Left Small"
                width={20}
                height={20}
              />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
