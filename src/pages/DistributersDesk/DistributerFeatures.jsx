import React from 'react';
import Section from '../../components/Section';
import fake from "/assets/fake.svg";
import Separator from '../../components/Separator';

function DistributerFeatures() {
  return (
    <div className="my-12 px-4 lg:px-0">
      <Section
        title="MARKETING MATERIALS"
        description="With our products, at Universal Distributor LLC, we offer you a complete needful and useful tools for marketing our brands successfully. Whether it is an engaging headline or an attractive product description, well-thought-out videos, tempting images and enticing social media posts, our marketing assets aim to help you make sales and create brand recognition."
        imageSrc={fake}
      />
      <Separator />
      <Section
        title="SALES TOOLS"
        description="Get your salesforce going with our detailed collection of sales resources. Including but not limited to product list, fliers, sales brochures or any other material that you may require to help clinch a sale, we have the customer relationship management or the CRM tools and applications you need to ensure successful selling. They are goal oriented sales tools aimed at improving your sales process, increasing customer satisfaction and thus resulting in sales growth. "
        imageSrc={fake}
        reverse // This will swap the positions of the image and text
      />
      <Separator />
      <Section
        title="TRAINING AND EDUCATION"
        description="They say, at Universal Distributor LLC it is our business to ensure your success. That is why our training and education program is extensive and intended to ensure that you get all the information you require to succeed as distributors. Our professional staff will support you not only in product knowledge training, selling skills and promotional ideas which will enable you to achieve your maximal possibilities and goals."
        imageSrc={fake}
      />
      <Separator />
      <Section
        title="TECHNICAL SUPPORT"
        description="At Universal Distributor LLC we pride ourselves in offering our partners the best service. If you have any questions or problems, which you can have with our services, our technical support team will gladly help you. Regardless of what you require assistance with whether it is basic product knowledge or queries to order processing or help with system related issues, you will receive quick and efficient service with us. Kindly, use the mail, or phone to contact us, for support in dealing with your order."
        imageSrc={fake}
        reverse // This will swap the positions of the image and text
      />
      <Separator />
      <Section
        title="DISTRIBUTOR PORTAL"
        description="In appreciation for your business, we are proud to offer this distributor’s ONLY extranet. Here you can find all the tips, advices and tools you need to enhance your business and increase sales. It ranges from product information and order tracking to the marketing collateral and selling aids, all are within easy reach."
        imageSrc={fake}
      />
      <Separator />
    </div>
  );
}

export default DistributerFeatures;
