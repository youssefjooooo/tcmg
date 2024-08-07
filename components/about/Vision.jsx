import React from "react";
import styles from "@/components/about/About.module.css";
import VisionImg from "@/components/about/VisionImg";
import VisonCard from "@/components/about/VisonCard";
const visionData = [
  {
    title: "التوسع علي النطاق المحلي",
    desc: "نفخر أننا حققنا أولى طموحتنا بالتوسع في مصر وفتح فروع في القاهرة والإسكندرية وتوصيل خدماتنا القانونية لأكبر عدد ممكن من العملاء, أفرادًا أو شركاتٍ أو أي كيان قانوني آخر. باعتبارنا أحد مكاتب المحاماة الرائدة في مصر بمعايير عالمية المستوى.",
    path: "/assets/images/about/visionimg1.png",
  },
  {
    title: "التوسع على النطاق الإقليمي",
    desc: "قمنا بتنسيق بروتوكولات تعاون دولية عدة مع مكاتب وشركات محاماة دولية رائدة من الدول العربية كالمملكة العربية السعودية والإمارات العربية المتحدة والكويت وقطر والاردن وعمان وغيرها من الدول العربية الشقيقة. ونتطلع لزيادة التعاون ليشمل شتى بقاع دول العالم لخدمة موكلينا وتسهيل الإجراءات القانونية عليهم.",
    path: "/assets/images/about/visionimg2.png",
  },
  {
    title: "التوسع على النطاق الدولي",
    desc: "بعد تحقيق رؤيتنا في التوسع على النطاق الإقليمي ونشر رسالتنا, سنبدأ برسم خطتنا سعيًا لتوسيع نطاق خدماتنا القانونية في جميع دول العالم, وذلك من خلال فتح فروع جديدة؛ للاستجابة لطلبات عملائنا المتزايدة من الأفراد والشركات من العملاء الأجانب, أو العملاء العرب الذين يمارسون أعمالهم في مختلف أنحاء العالم.",
    path: "/assets/images/about/visionimg3.png",
  },
  {
    title: "رفع معدل فاعلية الحلول القانونية",
    desc: `نؤمن بأن العمل الجدي هو الركيزة الأساسية التي تسعى إليها المجموعة التجارية والبحرية منذ تاريخ نشأتها.
    وهي تكمن في إعطاء الحلول القانونية المتكاملة لعملائها، بشكل فريد ومتميز وغير تقليدي.`,
    path: "/assets/images/about/visionimg4.png",
  },
  {
    title: "تحسين مستوى العمل الداخلي والخارجي",
    desc: "استطاعت المجموعة من خلال سنوات من التناضل والممارسة، أن تضع آلية في حل القضايا القانونية لعملائها والتعامل معها. ومنها الالتزام بمبدأ التكامل والتفاوض إذا تطلب الأمر ذلك. وبمرور سنوات من الخبرة العملية والقانونية على أرض الواقع، اكتسبت المجموعة النهج الصحيح، والأسس العلمية الممنهجة، لمباشرة الأعمال القانونية خارج جمهورية مصر العربية وداخلها.",
    path: "/assets/images/about/visionimg5.png",
  },
  {
    title: "تسهيل الحلول القضائية لعملائنا",
    desc: "نسعى جاهدين لأجل بناء رؤية كاملة لمستقبل مليء بالطموح والأهداف المحددة. رؤيتنا تكمن في تسهيل الحلول القضائية للعملاء، ومباشرة الإجراءات القانونية وخدمة مصالحهم وأهدافهم.",
    path: "/assets/images/about/visionimg6.png",
  },
  {
    title: "رفع معايير جودة خدماتنا القانونية",
    desc: "نسعى دائما لرفع معايير الجودة لدينا وتقديم الخدمات القانونية المختلفة بشكل متطور ممتزج بخبراتنا التي تجاوزت الثلاثة عقود. نهدف لأن نصبح شركة محاماة مصرية رائدة في مصر والشرق الأوسط.",
    path: "/assets/images/about/visionimg7.png",
  },
  {
    title: "تعزيز مبادئ العدالة والمساواة",
    desc: "يمثل مسعانا الأول وطموحنا الأسمى من تأسيس مكاتبنا, هو تأصيل معنى العدالة في كافة أرجاء مصر والوطن العربي, باسترجاع الحقوق المسلوبة وحمايتها والحفاظ عليها ضد أي اعتداء خارجي.",
    path: "/assets/images/about/visionimg8.png",
  },
];
const Vision = () => {
  return (
    <>
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
    </>
  );
};

export default Vision;
