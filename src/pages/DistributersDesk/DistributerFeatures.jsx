import React from 'react';
import Section from '../../components/Section';
import img1 from "/assets/dd1.webp"
import img2 from "/assets/dd2.webp"
import img3 from "/assets/dd3.webp"
import img4 from "/assets/dd4.webp"
import img5 from "/assets/dd5.webp"
import Separator from '../../components/Separator';
import { useTranslation } from 'react-i18next';

function DistributerFeatures() {
  const {t}= useTranslation()
  return (
    <div className="my-12 px-4 lg:px-0">
      <Section
        title={t("distributorDesk.subparts.features.title1")}
        description={t("distributorDesk.subparts.features.description1")}
        imageSrc={img1}
      />
      <Separator />
      <Section
        title={t("distributorDesk.subparts.features.title2")}
        description={t("distributorDesk.subparts.features.description2")}
        imageSrc={img2}
        reverse // This will swap the positions of the image and text
      />
      <Separator />
      <Section
        title={t("distributorDesk.subparts.features.title3")}
        description={t("distributorDesk.subparts.features.description3")}
        imageSrc={img3}
      />
      <Separator />
      <Section
        title={t("distributorDesk.subparts.features.title4")}
        description={t("distributorDesk.subparts.features.description4")}
        imageSrc={img4}
        reverse // This will swap the positions of the image and text
      />
      <Separator />
      <Section
        title={t("distributorDesk.subparts.features.title5")}
        description={t("distributorDesk.subparts.features.description5")}
        imageSrc={img5}
      />
      <Separator />
    </div>
  );
}

export default DistributerFeatures;
