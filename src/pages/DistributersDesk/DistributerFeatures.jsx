import React from 'react';
import Section from '../../components/Section';
import fake from "/assets/fake.svg";
import Separator from '../../components/Separator';

function DistributerFeatures() {
  return (
    <div className="my-12">
      <Section
        title="MARKETING MATERIALS"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
        imageSrc={fake}
      />
      <Separator />
      <Section
        title="SALES TOOLS"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
        imageSrc={fake}
        reverse // This will swap the positions of the image and text
      />
      <Separator />
      <Section
        title="TRAINING AND EDUCATION"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
        imageSrc={fake}
      />
      <Separator />
      <Section
        title="TECHNICAL SUPPORT"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
        imageSrc={fake}
        reverse // This will swap the positions of the image and text
      />
      <Separator />
      <Section
        title="DISTRIBUTOR PORTAL"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
        imageSrc={fake}
      />
      <Separator />
    </div>
  );
}

export default DistributerFeatures;
